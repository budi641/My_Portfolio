"use client"

import { useRef, useEffect, useState } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

interface Custom3DModelProps {
  scrollY?: number
  isMobile?: boolean
}

export function Custom3DModel({ scrollY = 0, isMobile = false }: Custom3DModelProps) {
  const modelRef = useRef<THREE.Group>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useFrame((state) => {
    if (modelRef.current) {
      // Base floating animation
      const baseY = Math.sin(state.clock.elapsedTime * 1.5) * 0.3
      const baseRotationY = state.clock.elapsedTime * 0.2
      const baseRotationX = Math.sin(state.clock.elapsedTime * 0.8) * 0.1

      // Scroll-triggered animations
      const scrollProgress = Math.min(scrollY / 1000, 1)
      const scrollRotationY = scrollProgress * Math.PI * 2
      const scrollScale = 1 + scrollProgress * 0.5

      // Mouse interaction
      const mouseInfluenceX = mousePosition.x * 0.2
      const mouseInfluenceY = mousePosition.y * 0.1

      // Combine all animations
      modelRef.current.position.y = baseY + mouseInfluenceY
      modelRef.current.rotation.y = baseRotationY + scrollRotationY + mouseInfluenceX
      modelRef.current.rotation.x = baseRotationX + mouseInfluenceY * 0.5
      modelRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05

      // Pulsing scale effect
      const pulseIntensity = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.1 + scrollProgress * 0.2

      // Set scale based on device type
      const baseScale = isMobile ? 1.6 : 2.2
      modelRef.current.scale.setScalar(baseScale * scrollScale * pulseIntensity)
    }
  })

  return (
    <group ref={modelRef} scale={[isMobile ? 1.6 : 2.2, isMobile ? 1.6 : 2.2, isMobile ? 1.6 : 2.2]}>
      {/* Futuristic Gaming Setup - Main Monitor */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[3, 1.8, 0.1]} />
        <meshStandardMaterial
          color="#0a0a1a"
          emissive="#001969"
          emissiveIntensity={0.3}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Monitor Screen */}
      <mesh position={[0, 0.5, 0.06]}>
        <boxGeometry args={[2.8, 1.6, 0.02]} />
        <meshStandardMaterial color="#000000" emissive="#0087ff" emissiveIntensity={0.5} roughness={0.1} />
      </mesh>

      {/* Monitor Stand */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.1, 0.15, 0.8]} />
        <meshStandardMaterial
          color="#1a1a2e"
          emissive="#001454"
          emissiveIntensity={0.2}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      {/* Monitor Base */}
      <mesh position={[0, -0.7, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.1]} />
        <meshStandardMaterial
          color="#0f0f2a"
          emissive="#001969"
          emissiveIntensity={0.1}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Gaming Keyboard */}
      <mesh position={[0, -0.6, 0.8]}>
        <boxGeometry args={[2, 0.1, 0.6]} />
        <meshStandardMaterial
          color="#1a1a2e"
          emissive="#0087ff"
          emissiveIntensity={0.2}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Gaming Mouse */}
      <mesh position={[1.2, -0.55, 0.8]}>
        <boxGeometry args={[0.3, 0.1, 0.5]} />
        <meshStandardMaterial
          color="#0f0f2a"
          emissive="#8719ff"
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Gaming Headset */}
      <mesh position={[-1.5, 0.8, 0]}>
        <torusGeometry args={[0.4, 0.1, 8, 16]} />
        <meshStandardMaterial
          color="#1a1a2e"
          emissive="#0087ff"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Headset Ear Cups */}
      <mesh position={[-1.5, 0.8, -0.4]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial
          color="#0f0f2a"
          emissive="#8719ff"
          emissiveIntensity={0.4}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
      <mesh position={[-1.5, 0.8, 0.4]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial
          color="#0f0f2a"
          emissive="#8719ff"
          emissiveIntensity={0.4}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Gaming Controller */}
      <mesh position={[1.5, -0.5, 0.3]}>
        <boxGeometry args={[0.8, 0.4, 0.2]} />
        <meshStandardMaterial
          color="#1a1a2e"
          emissive="#0087ff"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Controller Analog Sticks */}
      <mesh position={[1.3, -0.45, 0.4]}>
        <cylinderGeometry args={[0.08, 0.08, 0.05]} />
        <meshStandardMaterial
          color="#0087ff"
          emissive="#0087ff"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
      <mesh position={[1.7, -0.55, 0.4]}>
        <cylinderGeometry args={[0.08, 0.08, 0.05]} />
        <meshStandardMaterial
          color="#0087ff"
          emissive="#0087ff"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Floating Code Symbols */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const radius = 4
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const y = Math.sin(angle * 2) * 0.5

        return (
          <mesh key={i} position={[x, y, z]}>
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshStandardMaterial
              color="#0087ff"
              emissive="#0087ff"
              emissiveIntensity={0.8}
              transparent
              opacity={0.7}
            />
          </mesh>
        )
      })}

      {/* Enhanced lighting for the setup */}
      <pointLight position={[0, 2, 2]} intensity={0.8} color="#0087ff" distance={6} />
      <pointLight position={[-3, 1, 1]} intensity={0.5} color="#8719ff" distance={4} />
      <pointLight position={[3, -1, 1]} intensity={0.5} color="#0087ff" distance={4} />
      <spotLight position={[0, 4, 0]} intensity={1} color="#8719ff" angle={0.5} />
    </group>
  )
}
