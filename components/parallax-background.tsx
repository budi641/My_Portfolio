"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export function ParallaxBackground() {
  const starsRef = useRef<THREE.Points>(null)
  const nebulasRef = useRef<THREE.Group>(null)

  const starsCount = 2000

  const starsGeometry = useMemo(() => {
    const positions = new Float32Array(starsCount * 3)
    for (let i = 0; i < starsCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    return geo
  }, [])

  const nebulas = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => ({
        position: [(Math.random() - 0.5) * 50, (Math.random() - 0.5) * 50, (Math.random() - 0.5) * 50] as [
          number,
          number,
          number,
        ],
        size: Math.random() * 3 + 1,
        color: i % 2 === 0 ? "#1e40af" : "#00BFFF",
      })),
    [],
  )

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (starsRef.current) {
      starsRef.current.rotation.y = t * 0.01
      starsRef.current.rotation.x = t * 0.005
    }
    if (nebulasRef.current) {
      nebulasRef.current.rotation.y = -t * 0.02
    }
  })

  return (
    <>
      <points ref={starsRef} geometry={starsGeometry} frustumCulled={false}>
        <pointsMaterial size={0.05} color="#00BFFF" transparent opacity={0.8} sizeAttenuation depthWrite={false} />
      </points>

      <group ref={nebulasRef}>
        {nebulas.map((nebula, i) => (
          <mesh key={i} position={nebula.position}>
            <sphereGeometry args={[nebula.size, 16, 16]} />
            <meshBasicMaterial color={nebula.color} transparent opacity={0.1} fog={false} depthWrite={false} />
          </mesh>
        ))}
      </group>
    </>
  )
}
