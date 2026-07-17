"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useAtmosphere } from "@/lib/atmosphere"
import { useMobile } from "@/hooks/use-mobile"

export function ParticleBackground() {
  const meshRef = useRef<THREE.Points>(null)
  const materialRef = useRef<THREE.PointsMaterial>(null)
  const energy = useAtmosphere((state) => state.energy)
  const accent = useAtmosphere((state) => state.accent)
  const isMobile = useMobile()
  const particlesCount = isMobile ? 350 : 1000

  const geometry = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    return geo
  }, [particlesCount])

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * (0.004 + energy * 0.018)
      meshRef.current.rotation.y += delta * (0.003 + energy * 0.012)
    }
    if (materialRef.current) {
      materialRef.current.color.lerp(new THREE.Color(accent), 0.035)
      materialRef.current.opacity = THREE.MathUtils.lerp(materialRef.current.opacity, 0.12 + energy * 0.42, 0.04)
    }
  })

  return (
    <points ref={meshRef} geometry={geometry} frustumCulled={false}>
      <pointsMaterial
        ref={materialRef}
        size={0.018}
        color="#38b6ff"
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}
