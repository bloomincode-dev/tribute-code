"use client"

import { motion, AnimatePresence } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { ChevronDown } from "lucide-react"
import GiftBox from "@/components/gift-box"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { useScrollContext } from "@/contexts/scroll-context"

interface IntroSectionProps {
  isGiftOpened: boolean
  hasInteracted: boolean
  onOpenGift: () => void
  onScroll: () => void
}

export default function IntroSection({ isGiftOpened, hasInteracted, onOpenGift, onScroll }: IntroSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  const { setCurrentSection } = useScrollContext()

  useEffect(() => {
    if (inView) {
      setCurrentSection("intro")
    }
  }, [inView, setCurrentSection])

  return (
    <div ref={ref} className="text-center">
      <AnimatePresence mode="wait">
        {!isGiftOpened ? (
          <motion.div
            key="gift"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 text-transparent bg-clip-text">
              Món Quà Đặc Biệt Dành Cho Thầy Brad Duy
            </h1>
            <p className="text-xl mb-10 text-white/80">Nhấn vào món quà để mở điều bất ngờ</p>

            {!hasInteracted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mb-10 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 max-w-md mx-auto"
              >
                <p className="text-white/80">
                  <span className="font-medium text-amber-400">Lưu ý:</span> Vui lòng nhấp vào bất kỳ đâu trên trang để
                  kích hoạt âm thanh, sau đó nhấn vào món quà để có trải nghiệm tốt nhất
                </p>
              </motion.div>
            ) : (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-white/60 mb-6">
                Âm thanh đã được kích hoạt. Nhấn vào món quà để mở!
              </motion.p>
            )}

            <div className="relative z-10 pointer-events-auto">
              <GiftBox onClick={onOpenGift} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="message"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 text-transparent bg-clip-text">
              Cảm Ơn Thầy Brad!
            </h1>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-white/20 mb-10">
              <TypeAnimation
                sequence={[
                  "Từ một người sợ hãi IT và lập trình...",
                  1000,
                  "Đến một người có thể tự tin xây dựng trang web và viết code Python...",
                  1000,
                  "Tất cả nhờ vào sự giảng dạy tuyệt vời và sự kiên nhẫn của thầy!",
                  1000,
                ]}
                wrapper="p"
                speed={50}
                className="text-xl md:text-2xl text-white/90 leading-relaxed"
                repeat={0}
              />
            </div>

            <motion.div className="mt-16 animate-bounce" whileHover={{ scale: 1.1 }}>
              <Button onClick={onScroll} variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
                <span className="mr-2">Khám phá hành trình</span>
                <ChevronDown size={20} />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
