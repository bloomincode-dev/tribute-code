"use client"

import { motion } from "framer-motion"
import { Github, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function StudentInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed bottom-4 right-4 z-40"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-white/20 max-w-xs"
      >
        <div className="p-4 flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-400">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/student-photo-Ij9Yd9Iy9Yd9Iy9Yd9.jpeg"
              alt="Phuong Thao"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-medium text-sm truncate">Phuong Thao</h3>
            <p className="text-white/70 text-xs">Học viên của thầy Brad Duy</p>
          </div>
          <Link
            href="https://bloomincode-dev.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500/20 hover:bg-emerald-500/30 p-2 rounded-full transition-colors"
            aria-label="Xem portfolio"
          >
            <Globe size={16} className="text-emerald-400" />
          </Link>
        </div>
        <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 px-4 py-2 text-xs text-white/80 flex items-center justify-between">
          <span>Full-stack Developer</span>
          <Link
            href="https://github.com/bloomincode-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white/70 hover:text-white transition-colors"
          >
            <Github size={12} />
            <span>bloomincode-dev</span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}
