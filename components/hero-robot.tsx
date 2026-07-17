"use client"

import { useEffect, useMemo, useRef, useState, type MutableRefObject } from "react"
import { ContactShadows, Environment, Float } from "@react-three/drei"
import { useFrame, useThree, type ThreeEvent } from "@react-three/fiber"
import * as THREE from "three"
import { useAtmosphere } from "@/lib/atmosphere"

const chassisMaterial = new THREE.MeshStandardMaterial({
  color: "#5c616a",
  roughness: 0.4,
  metalness: 1,
  envMapIntensity: 0.85,
})
const darkMaterial = new THREE.MeshStandardMaterial({
  color: "#3a3e46",
  roughness: 0.4,
  metalness: 1,
  envMapIntensity: 0.85,
})
const trimMaterial = new THREE.MeshStandardMaterial({
  color: "#b0b6c0",
  roughness: 0.4,
  metalness: 1,
  envMapIntensity: 0.9,
})

function ScreenShell({ angry }: { angry: boolean }) {
  const material = useRef<THREE.ShaderMaterial>(null)
  const accent = useAtmosphere((state) => state.accent)
  const robotState = useAtmosphere((state) => state.robotState)
  const eventVersion = useAtmosphere((state) => state.eventVersion)
  const pulseStart = useRef(0)

  useEffect(() => {
    pulseStart.current = performance.now()
  }, [eventVersion, angry])

  const uniforms = useMemo(
    () => ({
      color: { value: new THREE.Color("#38b6ff") },
      power: { value: 3.3 },
      intensity: { value: 1.05 },
    }),
    [],
  )

  useFrame(({ clock }) => {
    if (!material.current) return
    const poweredDown = robotState === "powered-down"
    const pulseAge = (performance.now() - pulseStart.current) / 1000
    const pulse = pulseAge < 0.8 ? Math.sin((pulseAge / 0.8) * Math.PI) * 0.8 : 0
    const target = angry ? "#ff2a2a" : accent
    material.current.uniforms.color.value.lerp(new THREE.Color(target), 0.08)
    material.current.uniforms.intensity.value =
      (poweredDown ? 0.16 : 0.82 + Math.sin(clock.elapsedTime * 1.8) * 0.08) + pulse
  })

  return (
    <mesh>
      <sphereGeometry args={[0.61, 64, 64, 0, Math.PI * 2, 0, Math.PI]} />
      <shaderMaterial
        ref={material}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexShader={`
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vViewPosition = -mvPosition.xyz;
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * mvPosition;
          }
        `}
        fragmentShader={`
          uniform vec3 color;
          uniform float power;
          uniform float intensity;
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          void main() {
            float fresnel = 1.0 - max(dot(normalize(vViewPosition), normalize(vNormal)), 0.0);
            fresnel = pow(fresnel, power);
            gl_FragColor = vec4(color, fresnel * intensity);
          }
        `}
      />
    </mesh>
  )
}

function Eye({ x, angry }: { x: number; angry: boolean }) {
  const eyeMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: angry ? "#ff2a2a" : "#eef8ff",
        toneMapped: false,
      }),
    [angry],
  )

  if (angry) {
    return (
      <group position={[x, -0.01, 0.585]}>
        <mesh rotation={[0, 0, x < 0 ? 0.35 : -0.35]} material={eyeMaterial}>
          <boxGeometry args={[0.11, 0.028, 0.016]} />
        </mesh>
        <mesh position={[0, 0.095, 0.01]} rotation={[0, 0, x < 0 ? -0.65 : 0.65]} material={eyeMaterial}>
          <boxGeometry args={[0.16, 0.024, 0.014]} />
        </mesh>
      </group>
    )
  }

  return (
    <group position={[x, 0, 0.585]}>
      <mesh material={eyeMaterial}>
        <capsuleGeometry args={[0.025, 0.08, 8, 16]} />
      </mesh>
    </group>
  )
}

function Antenna({ side, angry }: { side: -1 | 1; angry: boolean }) {
  const tip = useRef<THREE.MeshBasicMaterial>(null)
  const accent = useAtmosphere((state) => state.accent)
  const poweredDown = useAtmosphere((state) => state.robotState === "powered-down")

  useFrame(({ clock }) => {
    if (!tip.current) return
    tip.current.color.lerp(new THREE.Color(angry ? "#ff2a2a" : accent), 0.08)
    tip.current.opacity = poweredDown ? 0.2 : 0.75 + Math.sin(clock.elapsedTime * 3 + side) * 0.2
  })

  return (
    <group position={[side * 0.59, 0.08, 0]} rotation={[0, 0, side * -0.2]}>
      <mesh rotation={[0, 0, Math.PI / 2]} material={trimMaterial}>
        <cylinderGeometry args={[0.085, 0.085, 0.09, 24]} />
      </mesh>
      <mesh position={[side * 0.04, 0.16, 0]} rotation={[0, 0, side * -0.18]} material={trimMaterial}>
        <cylinderGeometry args={[0.012, 0.018, 0.28, 12]} />
      </mesh>
      <mesh position={[side * 0.064, 0.3, 0]}>
        <sphereGeometry args={[0.035, 16, 16]} />
        <meshBasicMaterial ref={tip} transparent toneMapped={false} color="#38b6ff" />
      </mesh>
    </group>
  )
}

function AngryFrown() {
  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.12, -0.26, 0),
        new THREE.Vector3(-0.06, -0.16, 0),
        new THREE.Vector3(0, -0.13, 0),
        new THREE.Vector3(0.06, -0.16, 0),
        new THREE.Vector3(0.12, -0.26, 0),
      ]),
    [],
  )

  return (
    <mesh position={[0, -0.06, 0.56]}>
      <tubeGeometry args={[curve, 32, 0.011, 8, false]} />
      <meshBasicMaterial color="#ff2a2a" toneMapped={false} />
    </mesh>
  )
}

function PointerLight({
  enabled,
  mouse,
}: {
  enabled: boolean
  mouse: MutableRefObject<{ x: number; y: number }>
}) {
  const light = useRef<THREE.PointLight>(null)
  useFrame(({ viewport, gl }) => {
    if (!light.current || !enabled) return
    const rect = gl.domElement.getBoundingClientRect()
    if (rect.width < 1 || rect.height < 1) return
    const ndcX = ((mouse.current.x - rect.left) / rect.width) * 2 - 1
    const ndcY = -((mouse.current.y - rect.top) / rect.height) * 2 + 1
    light.current.position.x = THREE.MathUtils.lerp(light.current.position.x, ndcX * viewport.width * 0.35, 0.08)
    light.current.position.y = THREE.MathUtils.lerp(light.current.position.y, ndcY * viewport.height * 0.25, 0.08)
  })
  return <pointLight ref={light} position={[0, 1, 2.5]} color="#38b6ff" intensity={enabled ? 8 : 4} distance={7} />
}

/** Locked so a full-bleed canvas does not change on-screen size or roam range. */
const ROBOT_SCALE = { desktop: 0.62 * 0.75, mobile: 0.95 } as const
const MOVE_SPAN = 1.15
const ROAM_SPAN = { desktop: 0.95, mobile: 0.28 } as const
/** Push the robot away from the camera (mobile farther back). */
const STAGE_Z = { desktop: -0.1, mobile: -1.7 } as const
const HEAD_YAW_LIMIT = 0.95
const HEAD_PITCH_LIMIT = 0.28
const BODY_YAW_LIMIT = 0.45

type HeroRobotProps = {
  /** Mobile: roam + look around; frown on tap. Desktop: track cursor anywhere on the page. */
  isMobile?: boolean
}

export function HeroRobot({ isMobile = false }: HeroRobotProps) {
  const body = useRef<THREE.Group>(null)
  const head = useRef<THREE.Group>(null)
  const idleSince = useRef(performance.now())
  const angryTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const roamTarget = useRef({ x: 0, lookX: 0, lookY: 0 })
  /** Raw client coordinates — look math runs each frame from the robot head. */
  const mouse = useRef({ x: typeof window !== "undefined" ? window.innerWidth * 0.5 : 0, y: typeof window !== "undefined" ? window.innerHeight * 0.4 : 0 })
  const lookScratch = useMemo(
    () => ({
      headWorld: new THREE.Vector3(),
      projected: new THREE.Vector3(),
    }),
    [],
  )
  const [angry, setAngry] = useState(false)
  const { viewport } = useThree()
  const robotState = useAtmosphere((state) => state.robotState)
  const setRobotState = useAtmosphere((state) => state.setRobotState)

  // Desktop: keep stage on the right so copy on the left stays clear. Mobile: centered above the name.
  const stageX = isMobile ? 0 : viewport.width * 0.34
  const stageY = isMobile ? -0.05 : 0
  const stageZ = isMobile ? STAGE_Z.mobile : STAGE_Z.desktop
  const scale = isMobile ? ROBOT_SCALE.mobile : ROBOT_SCALE.desktop
  const groundY = isMobile ? -0.9 : -1.15
  const roamSpan = isMobile ? ROAM_SPAN.mobile : ROAM_SPAN.desktop
  const baseY = isMobile ? -0.45 : -0.72

  useEffect(
    () => () => {
      if (angryTimer.current) clearTimeout(angryTimer.current)
    },
    [],
  )

  // Desktop: track cursor anywhere on the page
  useEffect(() => {
    if (isMobile) return
    const onMove = (event: PointerEvent) => {
      mouse.current.x = event.clientX
      mouse.current.y = event.clientY
      idleSince.current = performance.now()
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => window.removeEventListener("pointermove", onMove)
  }, [isMobile])

  // Mobile: roam + look around on its own (kept inside the top band)
  useEffect(() => {
    if (!isMobile) return
    const pick = () => {
      roamTarget.current.x = (Math.random() * 2 - 1) * roamSpan
      roamTarget.current.lookX = (Math.random() * 2 - 1) * 0.7
      roamTarget.current.lookY = (Math.random() * 2 - 1) * 0.25
    }
    pick()
    const id = window.setInterval(pick, 2200)
    return () => window.clearInterval(id)
  }, [isMobile, roamSpan])

  useFrame((state, delta) => {
    if (!body.current || !head.current) return
    const dt = Math.min(delta, 0.05)
    const t = state.clock.elapsedTime

    if (isMobile) {
      const wanderX = THREE.MathUtils.clamp(
        roamTarget.current.x + Math.sin(t * 0.65) * 0.08,
        -roamSpan,
        roamSpan,
      )
      const wanderY = baseY + Math.sin(t * 0.85) * 0.04
      body.current.position.x = THREE.MathUtils.damp(body.current.position.x, wanderX, 1.6, dt)
      body.current.position.y = THREE.MathUtils.damp(body.current.position.y, wanderY, 2, dt)

      const lookX = roamTarget.current.lookX + Math.sin(t * 0.45) * 0.18
      const lookY = roamTarget.current.lookY + Math.sin(t * 0.7) * 0.1
      body.current.rotation.y = THREE.MathUtils.damp(body.current.rotation.y, -lookX * 0.45, 2, dt)
      body.current.rotation.z = THREE.MathUtils.damp(body.current.rotation.z, 0, 4, dt)
      head.current.rotation.y = THREE.MathUtils.damp(head.current.rotation.y, lookX * 0.85, 3.2, dt)
      head.current.rotation.x = THREE.MathUtils.damp(head.current.rotation.x, -lookY * 0.4, 3.2, dt)
      head.current.rotation.z = THREE.MathUtils.damp(head.current.rotation.z, 0, 4, dt)
      return
    }

    // Desktop: aim from the head's real screen position to the cursor (no roll / over-tilt)
    const { camera, gl } = state
    const rect = gl.domElement.getBoundingClientRect()
    if (rect.width < 1 || rect.height < 1) return

    const ndcX = ((mouse.current.x - rect.left) / rect.width) * 2 - 1
    const ndcY = -((mouse.current.y - rect.top) / rect.height) * 2 + 1

    head.current.getWorldPosition(lookScratch.headWorld)
    lookScratch.projected.copy(lookScratch.headWorld).project(camera)

    // Cursor offset relative to where the eyes actually are on screen
    const gazeX = THREE.MathUtils.clamp(ndcX - lookScratch.projected.x, -1.25, 1.25)
    const gazeY = THREE.MathUtils.clamp(ndcY - lookScratch.projected.y, -1.25, 1.25)

    const headYaw = THREE.MathUtils.clamp(gazeX * 0.95, -HEAD_YAW_LIMIT, HEAD_YAW_LIMIT)
    const headPitch = THREE.MathUtils.clamp(-gazeY * 0.45, -HEAD_PITCH_LIMIT, HEAD_PITCH_LIMIT)

    const idleSeconds = (performance.now() - idleSince.current) / 1000
    const idleTurn = idleSeconds > 8 ? Math.sin((idleSeconds - 8) * 0.34) * 0.35 : 0
    const bodyYawTarget = THREE.MathUtils.clamp(-headYaw * 0.32 + idleTurn, -BODY_YAW_LIMIT, BODY_YAW_LIMIT)

    body.current.position.x = THREE.MathUtils.damp(body.current.position.x, gazeX * MOVE_SPAN * 0.75, 3.2, dt)
    body.current.position.y = THREE.MathUtils.damp(body.current.position.y, baseY + gazeY * 0.03, 3.2, dt)
    body.current.rotation.y = THREE.MathUtils.damp(body.current.rotation.y, bodyYawTarget, 3.5, dt)
    body.current.rotation.z = THREE.MathUtils.damp(body.current.rotation.z, 0, 6, dt)
    head.current.rotation.y = THREE.MathUtils.damp(head.current.rotation.y, headYaw - bodyYawTarget, 10, dt)
    head.current.rotation.x = THREE.MathUtils.damp(head.current.rotation.x, headPitch, 10, dt)
    head.current.rotation.z = THREE.MathUtils.damp(head.current.rotation.z, 0, 8, dt)
  })

  const react = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation()
    if (angryTimer.current) clearTimeout(angryTimer.current)
    setAngry(true)
    setRobotState("angry")
    angryTimer.current = setTimeout(() => {
      setAngry(false)
      setRobotState("idle")
    }, 2200)
  }

  return (
    <>
      <PointerLight enabled={!isMobile} mouse={mouse} />
      <group position={[stageX, stageY, stageZ]}>
        <Float
          speed={robotState === "powered-down" ? 0.35 : isMobile ? 0.9 : 0.85}
          rotationIntensity={isMobile ? 0.015 : 0.03}
          floatIntensity={isMobile ? 0.06 : 0.06}
        >
          <group
            ref={body}
            scale={scale}
            position={[0, baseY, 0]}
            onPointerDown={react}
            onPointerOver={() => {
              if (!isMobile) document.body.style.cursor = "pointer"
            }}
            onPointerOut={() => {
              if (!isMobile) document.body.style.cursor = "auto"
            }}
          >
            <mesh castShadow receiveShadow material={chassisMaterial}>
              <sphereGeometry args={[0.82, 64, 64, 0, Math.PI * 2, Math.PI * 0.12, Math.PI * 0.83]} />
            </mesh>
            <mesh position={[0, 0.64, 0]} material={trimMaterial}>
              <cylinderGeometry args={[0.31, 0.38, 0.16, 48]} />
            </mesh>
            <group ref={head} position={[0, 1.08, 0]}>
              <mesh castShadow receiveShadow material={darkMaterial}>
                <sphereGeometry args={[0.58, 64, 64, 0, Math.PI * 2, 0, Math.PI]} />
              </mesh>
              <ScreenShell angry={angry} />
              <Eye x={-0.16} angry={angry} />
              <Eye x={0.16} angry={angry} />
              {angry && <AngryFrown />}
              <Antenna side={-1} angry={angry} />
              <Antenna side={1} angry={angry} />
            </group>
          </group>
        </Float>
        <ContactShadows
          position={[0, groundY, 0]}
          opacity={isMobile ? 0.4 : 0.55}
          scale={isMobile ? 2.4 : 3.2}
          blur={2.4}
          far={2.2}
          color="#00173b"
        />
      </group>
      <Environment preset="studio" environmentIntensity={1.15} />
    </>
  )
}
