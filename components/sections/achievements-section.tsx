"use client"

import { motion } from "framer-motion"
import { ChevronDown, Zap, Brain, Rocket, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { useScrollContext } from "@/contexts/scroll-context"

interface AchievementsSectionProps {
  onScroll: () => void
}

const achievements = [
  {
    title: "Kỹ Năng Python",
    description: "Từ không biết gì đến có thể viết các chương trình Python hoàn chỉnh",
    icon: <Zap className="text-yellow-500" />,
    progress: 75,
    color: "from-yellow-500 to-amber-500",
  },
  {
    title: "Phát Triển Web",
    description: "Học cách xây dựng trang web từ đầu với HTML, CSS và JavaScript",
    icon: <Rocket className="text-blue-500" />,
    progress: 70,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Tư Duy Lập Trình",
    description: "Phát triển tư duy logic và khả năng giải quyết vấn đề",
    icon: <Brain className="text-purple-500" />,
    progress: 80,
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "Xây Dựng API",
    description: "Hiểu và xây dựng các API với FastAPI",
    icon: <Target className="text-pink-500" />,
    progress: 65,
    color: "from-pink-500 to-rose-500",
  },
]

export default function AchievementsSection({ onScroll }: AchievementsSectionProps) {
  const [progressValues, setProgressValues] = useState(achievements.map(() => 0))
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const { setCurrentSection } = useScrollContext()

  useEffect(() => {
    if (inView) {
      setCurrentSection("achievements")

      // Animate progress bars
      const timer = setTimeout(() => {
        setProgressValues(achievements.map((achievement) => achievement.progress))
      }, 500)

      return () => clearTimeout(timer)
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
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400 text-transparent bg-clip-text">
          Thành Tựu Đạt Được
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Những kỹ năng và kiến thức tôi đã phát triển trong một tháng qua
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20 hover:border-white/30 transition-all"
          >
            <div className="flex items-start mb-4">
              <div className="bg-white/10 p-3 rounded-lg mr-4">{achievement.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">{achievement.title}</h3>
                <p className="text-white/70">{achievement.description}</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between mb-2">
                <span className="text-white/70">Tiến độ</span>
                <span className="text-white font-medium">{progressValues[index]}%</span>
              </div>
              <Progress
                value={progressValues[index]}
                className="h-2 bg-white/20"
                indicatorClassName={`bg-gradient-to-r ${achievement.color}`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Button
          onClick={onScroll}
          className="px-6 py-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all border-none"
        >
          <div className="flex items-center gap-2">
            <span>Xem lời nhắn từ tôi</span>
            <ChevronDown size={20} />
          </div>
        </Button>
      </motion.div>
    </div>
  )
}
