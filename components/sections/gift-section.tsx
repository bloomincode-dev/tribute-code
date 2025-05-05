"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import GiftCard from "@/components/gift-card"
import Confetti from "react-confetti"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { useScrollContext } from "@/contexts/scroll-context"

interface GiftSectionProps {
  showFinalGift: boolean
  showConfetti: boolean
  onRevealGift: () => void
  width: number
  height: number
}

export default function GiftSection({ showFinalGift, showConfetti, onRevealGift, width, height }: GiftSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const { setCurrentSection } = useScrollContext()

  useEffect(() => {
    if (inView) {
      setCurrentSection("gift")
    }
  }, [inView, setCurrentSection])

  return (
    <div ref={ref} className="text-center">
      {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={500} />}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
          Một Món Quà Nhỏ Bày Tỏ Lòng Biết Ơn
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Cho tất cả kiến thức và sự tự tin mà thầy đã trao cho tôi
        </p>
      </motion.div>

      {!showFinalGift ? (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
          <Button
            onClick={onRevealGift}
            className="px-8 py-8 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full font-medium text-xl shadow-lg hover:shadow-xl transition-all border-none"
          >
            <div className="flex items-center gap-3">
              <Heart size={28} className="animate-pulse" />
              <span>Mở Món Quà</span>
            </div>
          </Button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <GiftCard />

          <div className="mt-16 bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-white/20 max-w-2xl mx-auto">
            <p className="text-xl text-white/90 leading-relaxed">
              Cảm ơn thầy Brad đã là một người thầy tuyệt vời! Niềm đam mê giảng dạy và khả năng làm cho những khái niệm
              phức tạp trở nên đơn giản của thầy đã thay đổi hoàn toàn quan điểm của tôi về IT và lập trình. Tôi không
              còn sợ hãi công nghệ nữa - tôi đang hào hứng với nó!
            </p>
            <div className="mt-8 flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + i * 0.1 }}>
                  <svg className="w-8 h-8 text-yellow-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-white/80 font-medium">
              Với lòng biết ơn và sự kính trọng,
              <br />
              Học viên của thầy
            </p>
          </div>
        </motion.div>
      )}
    </div>
  )
}
