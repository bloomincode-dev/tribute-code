"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

interface ThreeDGiftProps {
  isRotating?: boolean
}

export default function ThreeDGift({ isRotating = true }: ThreeDGiftProps) {
  const boxRef = useRef<THREE.Mesh>(null)
  const sphereRef = useRef<THREE.Mesh>(null)

  // Animate the gift
  useFrame((state, delta) => {
    if (boxRef.current && isRotating) {
      boxRef.current.rotation.y += delta * 0.5
      boxRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }

    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2 + 2
      sphereRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <group>
      {/* Gift box */}
      <mesh ref={boxRef} position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#9333ea" metalness={0.6} roughness={0.2} />
      </mesh>

      {/* Ribbon */}
      <mesh position={[0, 0.85, 0]}>
        <boxGeometry args={[1.6, 0.2, 1.6]} />
        <meshStandardMaterial color="#ec4899" />
      </mesh>

      <mesh position={[0, 0.85, 0]}>
        <boxGeometry args={[0.2, 1.6, 1.6]} />
        <meshStandardMaterial color="#ec4899" />
      </mesh>

      {/* Floating sphere (decorative) */}
      <mesh ref={sphereRef} position={[0, 2, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Light sources */}
      <pointLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#ec4899" />
    </group>
  )
}
