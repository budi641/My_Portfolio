"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

export function ParallaxBackground() {
  const starsRef = useRef<THREE.Points>(null)
  const nebulasRef = useRef<THREE.Group>(null)

  const starsCount = 2000
  const starsPositions = useMemo(() => {
    const positions = new Float32Array(starsCount * 3)
    for (let i = 0; i < starsCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100
    }
    return positions
  }, [])

  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = state.clock.elapsedTime * 0.01
      starsRef.current.rotation.x = state.clock.elapsedTime * 0.005
    }
    if (nebulasRef.current) {
      nebulasRef.current.rotation.y = -state.clock.elapsedTime * 0.02
    }
  })

  return (
    <>
      {/* Stars */}
      <points ref={starsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={starsCount} array={starsPositions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#00BFFF" transparent opacity={0.8} sizeAttenuation />
      </points>

      {/* Nebula clouds */}
      <group ref={nebulasRef}>
        {Array.from({ length: 5 }).map((_, i) => (
          <mesh key={i} position={[(Math.random() - 0.5) * 50, (Math.random() - 0.5) * 50, (Math.random() - 0.5) * 50]}>
            <sphereGeometry args={[Math.random() * 3 + 1, 16, 16]} />
            <meshBasicMaterial color={i % 2 === 0 ? "#1e40af" : "#00BFFF"} transparent opacity={0.1} fog={false} />
          </mesh>
        ))}
      </group>
    </>
  )
}
