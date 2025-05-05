"use client"

import { motion } from "framer-motion"
import { ChevronDown, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { useScrollContext } from "@/contexts/scroll-context"

interface QuoteSectionProps {
  onScroll: () => void
}

export default function QuoteSection({ onScroll }: QuoteSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const { setCurrentSection } = useScrollContext()

  useEffect(() => {
    if (inView) {
      setCurrentSection("quote")
    }
  }, [inView, setCurrentSection])

  return (
    <div ref={ref} className="flex flex-col items-center justify-center min-h-[80vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-full">
            <Quote size={40} className="text-purple-400" />
          </div>
        </div>

        <blockquote className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
          <p className="text-xl md:text-3xl font-light text-white/90 leading-relaxed mb-8">
            "Trước khi gặp thầy Brad, tôi luôn nghĩ rằng lập trình là một thứ gì đó xa vời và không thể tiếp cận. Thầy
            đã cho tôi thấy rằng, với phương pháp giảng dạy đúng đắn và sự kiên nhẫn, bất kỳ ai cũng có thể học và yêu
            thích công nghệ. Thầy không chỉ dạy tôi code, mà còn truyền cảm hứng để tôi tiếp tục khám phá và học hỏi."
          </p>
          <footer className="text-white/70">
            <p className="text-lg font-medium">Học viên của thầy Brad</p>
            <p>Tháng 5, 2023</p>
          </footer>
        </blockquote>
      </motion.div>

      <motion.div className="mt-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <Button
          onClick={onScroll}
          className="px-6 py-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all border-none"
        >
          <div className="flex items-center gap-2">
            <span>Tìm hiểu thêm về thầy</span>
            <ChevronDown size={20} />
          </div>
        </Button>
      </motion.div>
    </div>
  )
}
