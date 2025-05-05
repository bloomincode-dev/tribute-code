"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useScrollContext } from "@/contexts/scroll-context"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const { currentSection } = useScrollContext()

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        className="h-1 bg-gradient-to-r from-violet-500 via-pink-500 to-amber-500 origin-left"
        style={{ scaleX }}
      />
      <div className="flex justify-center">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-b-lg text-white/80 text-sm"
        >
          {currentSection === "intro" && "Lời Mở Đầu"}
          {currentSection === "timeline" && "Hành Trình Học Tập"}
          {currentSection === "code" && "Từ Sợ Hãi Đến Code"}
          {currentSection === "achievements" && "Thành Tựu Đạt Được"}
          {currentSection === "quote" && "Lời Nhắn Từ Tôi"}
          {currentSection === "profile" && "Về Thầy Brad Duy"}
          {currentSection === "gift" && "Món Quà Đặc Biệt"}
        </motion.div>
      </div>
    </div>
  )
}
