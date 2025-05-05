"use client"

import { motion } from "framer-motion"
import { Gift } from "lucide-react"

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-violet-950 flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
          className="mb-8 inline-block"
        >
          <div className="relative w-24 h-24 bg-gradient-to-br from-purple-600 to-indigo-800 rounded-xl shadow-2xl flex items-center justify-center overflow-hidden">
            <Gift size={40} className="text-white" />
          </div>
        </motion.div>

        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 text-transparent bg-clip-text">
          Đang Chuẩn Bị Món Quà Đặc Biệt
        </h1>

        <div className="flex justify-center space-x-2 mt-6">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
