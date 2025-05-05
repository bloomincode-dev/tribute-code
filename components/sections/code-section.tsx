"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import CodeEditor from "@/components/code-editor"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { useScrollContext } from "@/contexts/scroll-context"

interface CodeSectionProps {
  onScroll: () => void
}

export default function CodeSection({ onScroll }: CodeSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const { setCurrentSection } = useScrollContext()

  useEffect(() => {
    if (inView) {
      setCurrentSection("code")
    }
  }, [inView, setCurrentSection])

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
          Từ Sợ Hãi Đến Code
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Nhờ thầy, giờ đây tôi có thể viết code hoạt động thực sự!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <CodeEditor />
      </motion.div>

      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Button
          onClick={onScroll}
          className="px-6 py-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all border-none"
        >
          <div className="flex items-center gap-2">
            <span>Khám phá thành tựu</span>
            <ChevronDown size={20} />
          </div>
        </Button>
      </motion.div>
    </div>
  )
}
