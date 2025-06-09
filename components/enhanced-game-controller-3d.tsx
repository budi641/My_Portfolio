"use client"

import { useRef, useEffect, useState } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

interface EnhancedGameController3DProps {
  scrollY?: number
}

export function EnhancedGameController3D({ scrollY = 0 }: EnhancedGameController3DProps) {
  const controllerRef = useRef<THREE.Group>(null)
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
    if (controllerRef.current) {
      // Base floating animation
      const baseY = Math.sin(state.clock.elapsedTime * 1.5) * 0.3
      const baseRotationY = state.clock.elapsedTime * 0.2
      const baseRotationX = Math.sin(state.clock.elapsedTime * 0.8) * 0.1

      // Scroll-triggered animations
      const scrollProgress = Math.min(scrollY / 1000, 1)
      const scrollRotationY = scrollProgress * Math.PI * 2
      const scrollScale = 1 + scrollProgress * 0.5
      const scrollGlow = scrollProgress * 2

      // Mouse interaction
      const mouseInfluenceX = mousePosition.x * 0.2
      const mouseInfluenceY = mousePosition.y * 0.1

      // Combine all animations
      controllerRef.current.position.y = baseY + mouseInfluenceY
      controllerRef.current.rotation.y = baseRotationY + scrollRotationY + mouseInfluenceX
      controllerRef.current.rotation.x = baseRotationX + mouseInfluenceY * 0.5
      controllerRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05
      controllerRef.current.scale.setScalar(scrollScale)

      // Pulsing effect based on scroll
      const pulseIntensity = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.1 + scrollGlow * 0.2
      controllerRef.current.scale.multiplyScalar(pulseIntensity)
    }
  })

  return (
    <group ref={controllerRef} scale={[1.5, 1.5, 1.5]}>
      {/* Main controller body with enhanced materials */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 1.5, 0.4]} />
        <meshStandardMaterial
          color="#0a0a1a"
          roughness={0.2}
          metalness={0.8}
          emissive="#001969"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Controller grips with gradient effect */}
      <mesh position={[-1.2, -0.3, 0]} rotation={[0, 0, 0.2]}>
        <boxGeometry args={[0.8, 1.2, 0.4]} />
        <meshStandardMaterial
          color="#0f0f2a"
          roughness={0.3}
          metalness={0.6}
          emissive="#001454"
          emissiveIntensity={0.05}
        />
      </mesh>
      <mesh position={[1.2, -0.3, 0]} rotation={[0, 0, -0.2]}>
        <boxGeometry args={[0.8, 1.2, 0.4]} />
        <meshStandardMaterial
          color="#0f0f2a"
          roughness={0.3}
          metalness={0.6}
          emissive="#001454"
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* Enhanced analog sticks with glow */}
      <mesh position={[-0.7, 0.1, 0.25]}>
        <cylinderGeometry args={[0.2, 0.2, 0.15]} />
        <meshStandardMaterial
          color="#0087ff"
          emissive="#0087ff"
          emissiveIntensity={0.4}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
      <mesh position={[0.7, -0.3, 0.25]}>
        <cylinderGeometry args={[0.2, 0.2, 0.15]} />
        <meshStandardMaterial
          color="#0087ff"
          emissive="#0087ff"
          emissiveIntensity={0.4}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Enhanced D-pad with electric blue glow */}
      <mesh position={[-0.7, -0.3, 0.25]}>
        <boxGeometry args={[0.4, 0.1, 0.08]} />
        <meshStandardMaterial
          color="#0087ff"
          emissive="#0087ff"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      <mesh position={[-0.7, -0.3, 0.25]}>
        <boxGeometry args={[0.1, 0.4, 0.08]} />
        <meshStandardMaterial
          color="#0087ff"
          emissive="#0087ff"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Enhanced action buttons with different colors */}
      {[
        { pos: [0.7, 0.1, 0.25], color: "#00ff88", emissive: "#00ff88" }, // A
        { pos: [0.9, 0, 0.25], color: "#ff4444", emissive: "#ff4444" }, // B
        { pos: [0.5, 0, 0.25], color: "#4488ff", emissive: "#4488ff" }, // X
        { pos: [0.7, 0.3, 0.25], color: "#ffff44", emissive: "#ffff44" }, // Y
      ].map((button, i) => (
        <mesh key={i} position={button.pos as [number, number, number]}>
          <cylinderGeometry args={[0.12, 0.12, 0.08]} />
          <meshStandardMaterial
            color={button.color}
            emissive={button.emissive}
            emissiveIntensity={0.5}
            roughness={0.1}
            metalness={0.7}
          />
        </mesh>
      ))}

      {/* Enhanced shoulder buttons */}
      <mesh position={[-1.3, 0.6, 0]}>
        <boxGeometry args={[0.6, 0.2, 0.3]} />
        <meshStandardMaterial
          color="#001969"
          emissive="#0087ff"
          emissiveIntensity={0.2}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
      <mesh position={[1.3, 0.6, 0]}>
        <boxGeometry args={[0.6, 0.2, 0.3]} />
        <meshStandardMaterial
          color="#001969"
          emissive="#0087ff"
          emissiveIntensity={0.2}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Enhanced center logo with pulsing glow */}
      <mesh position={[0, 0.3, 0.25]}>
        <cylinderGeometry args={[0.15, 0.15, 0.05]} />
        <meshStandardMaterial
          color="#8719ff"
          emissive="#8719ff"
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Additional glow effects */}
      <pointLight position={[0, 0, 1]} intensity={0.5} color="#0087ff" distance={5} />
      <pointLight position={[-0.7, 0.1, 0.5]} intensity={0.3} color="#0087ff" distance={2} />
      <pointLight position={[0.7, -0.3, 0.5]} intensity={0.3} color="#0087ff" distance={2} />
    </group>
  )
}
