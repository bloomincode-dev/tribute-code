"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import Image from "next/image"

export default function AdminThanks() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed bottom-4 left-4 z-40"
    >
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        className="bg-gradient-to-r from-cyan-900/70 to-blue-900/70 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-cyan-500/30 max-w-xs"
      >
        <div className="p-4 flex items-start gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400 flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anhDucTran.jpg-5bm8DxdT2Jek6s09njmnd9cAl3taXC.png"
              alt="Đức Trần"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-white font-medium text-sm">Cảm ơn anh Đức Trần</h3>
              <Heart size={12} className="text-red-400 fill-red-400 animate-pulse" />
            </div>
            <p className="text-white/80 text-xs mt-1 leading-relaxed">
              Cảm ơn anh đã luôn hỗ trợ, động viên và truyền cảm hứng cho bọn em. Những lời khuyên và sự giúp đỡ của anh
              là động lực để em tiếp tục phát triển trên con đường IT này.
            </p>
            <p className="text-cyan-300 text-xs mt-2 font-medium">— Học viên biết ơn</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
