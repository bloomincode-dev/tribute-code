"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  return (
    <>
      <motion.div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          mass: 0.1,
          stiffness: 120,
          damping: 10,
        }}
      >
        <div className="w-full h-full rounded-full bg-white opacity-70"></div>
      </motion.div>

      <motion.div
        className="fixed w-40 h-40 rounded-full pointer-events-none z-40 mix-blend-difference"
        animate={{
          x: mousePosition.x - 80,
          y: mousePosition.y - 80,
          opacity: isVisible ? 0.05 : 0,
        }}
        transition={{
          type: "spring",
          mass: 0.5,
          stiffness: 50,
          damping: 20,
        }}
      >
        <div className="w-full h-full rounded-full bg-white blur-xl"></div>
      </motion.div>
    </>
  )
}
