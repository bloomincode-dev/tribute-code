"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Gift } from "lucide-react"

interface GiftBoxProps {
  onClick: () => void
}

export default function GiftBox({ onClick }: GiftBoxProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true)
      // We call onClick after a small delay to allow the animation to play
      setTimeout(() => {
        onClick()
      }, 800)
    }
  }

  const handleHoverStart = () => {
    setIsHovering(true)
  }

  return (
    <motion.div
      ref={boxRef}
      className="cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={
        isClicked
          ? {
              scale: [1, 1.2, 0],
              rotate: [0, 10, -10, 0],
              transition: { duration: 0.8 },
            }
          : {
              y: [0, -10, 0],
              rotate: isHovering ? [-2, 2, -2] : 0,
              transition: {
                y: { repeat: Number.POSITIVE_INFINITY, duration: 2 },
                rotate: { repeat: Number.POSITIVE_INFINITY, duration: 0.5 },
              },
            }
      }
      onHoverStart={handleHoverStart}
      onHoverEnd={() => setIsHovering(false)}
      onClick={handleClick}
    >
      <div className="relative w-64 h-64 mx-auto">
        {/* Box Shadow */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-10 bg-black/30 blur-xl rounded-full" />

        {/* Box Base */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-800 rounded-xl shadow-2xl flex items-center justify-center overflow-hidden"
          animate={{
            y: isHovering ? [0, -5, 0] : 0,
          }}
          transition={{
            y: { repeat: Number.POSITIVE_INFINITY, duration: 2 },
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-20 h-20 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full translate-x-1/2 translate-y-1/2 blur-xl" />
          </div>

          {/* Gift icon */}
          <Gift size={80} className="text-white drop-shadow-lg" />
        </motion.div>

        {/* Box Lid */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-700 rounded-xl shadow-xl flex items-center justify-center"
          initial={{ y: 0 }}
          animate={{
            y: isHovering ? -20 : 0,
            rotateX: isHovering ? -20 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <Gift size={80} className="text-white drop-shadow-lg" />
        </motion.div>

        {/* Ribbon */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
          initial={{ y: 0 }}
          animate={{ y: isHovering ? -20 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Instruction text */}
        <div className="absolute bottom-0 left-0 right-0 text-center text-white font-medium py-4">Nhấn để mở</div>
      </div>
    </motion.div>
  )
}
