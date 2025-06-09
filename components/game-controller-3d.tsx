"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

export function GameController3D() {
  const controllerRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (controllerRef.current) {
      controllerRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      controllerRef.current.rotation.y = state.clock.elapsedTime * 0.3
      controllerRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.2
    }
  })

  return (
    <group ref={controllerRef} scale={[1.2, 1.2, 1.2]}>
      {/* Main controller body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 1.5, 0.4]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Controller grips */}
      <mesh position={[-1.2, -0.3, 0]} rotation={[0, 0, 0.2]}>
        <boxGeometry args={[0.8, 1.2, 0.4]} />
        <meshStandardMaterial color="#16213e" roughness={0.4} />
      </mesh>
      <mesh position={[1.2, -0.3, 0]} rotation={[0, 0, -0.2]}>
        <boxGeometry args={[0.8, 1.2, 0.4]} />
        <meshStandardMaterial color="#16213e" roughness={0.4} />
      </mesh>

      {/* Left analog stick */}
      <mesh position={[-0.7, 0.1, 0.25]}>
        <cylinderGeometry args={[0.2, 0.2, 0.15]} />
        <meshStandardMaterial color="#00BFFF" emissive="#001a33" emissiveIntensity={0.2} />
      </mesh>

      {/* Right analog stick */}
      <mesh position={[0.7, -0.3, 0.25]}>
        <cylinderGeometry args={[0.2, 0.2, 0.15]} />
        <meshStandardMaterial color="#00BFFF" emissive="#001a33" emissiveIntensity={0.2} />
      </mesh>

      {/* D-pad */}
      <mesh position={[-0.7, -0.3, 0.25]}>
        <boxGeometry args={[0.4, 0.1, 0.08]} />
        <meshStandardMaterial color="#0066cc" emissive="#001a33" emissiveIntensity={0.1} />
      </mesh>
      <mesh position={[-0.7, -0.3, 0.25]}>
        <boxGeometry args={[0.1, 0.4, 0.08]} />
        <meshStandardMaterial color="#0066cc" emissive="#001a33" emissiveIntensity={0.1} />
      </mesh>

      {/* Action buttons (A, B, X, Y) */}
      {[
        { pos: [0.7, 0.1, 0.25], color: "#00ff88" }, // A
        { pos: [0.9, 0, 0.25], color: "#ff4444" }, // B
        { pos: [0.5, 0, 0.25], color: "#4488ff" }, // X
        { pos: [0.7, 0.3, 0.25], color: "#ffff44" }, // Y
      ].map((button, i) => (
        <mesh key={i} position={button.pos as [number, number, number]}>
          <cylinderGeometry args={[0.12, 0.12, 0.08]} />
          <meshStandardMaterial color={button.color} emissive={button.color} emissiveIntensity={0.3} roughness={0.2} />
        </mesh>
      ))}

      {/* Shoulder buttons */}
      <mesh position={[-1.3, 0.6, 0]}>
        <boxGeometry args={[0.6, 0.2, 0.3]} />
        <meshStandardMaterial color="#0066cc" />
      </mesh>
      <mesh position={[1.3, 0.6, 0]}>
        <boxGeometry args={[0.6, 0.2, 0.3]} />
        <meshStandardMaterial color="#0066cc" />
      </mesh>

      {/* Center logo area */}
      <mesh position={[0, 0.3, 0.25]}>
        <cylinderGeometry args={[0.15, 0.15, 0.05]} />
        <meshStandardMaterial color="#00BFFF" emissive="#00BFFF" emissiveIntensity={0.5} />
      </mesh>
    </group>
  )
}
