"use client"

import { motion } from "framer-motion"
import { Code, FileCode, Terminal, Globe, Lightbulb, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { useScrollContext } from "@/contexts/scroll-context"

interface TimelineSectionProps {
  onScroll: () => void
}

const timelineItems = [
  {
    title: "Ngày Đầu Tiên",
    date: "01/04/2023",
    description: "Lo lắng và sợ hãi lập trình, nhưng háo hức được học hỏi",
    longDescription:
      "Bước vào lớp học với nỗi lo lắng và sự tự ti về khả năng tiếp thu công nghệ. Thầy Brad đã tạo một môi trường học tập thân thiện và truyền cảm hứng ngay từ buổi học đầu tiên.",
    icon: <Lightbulb className="text-yellow-500" />,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Học Python",
    date: "05/04/2023",
    description: "Từ cú pháp cơ bản đến viết chương trình đầu tiên",
    longDescription:
      "Thầy Brad đã giới thiệu Python một cách dễ hiểu và thực tế. Từ việc hiểu biến, vòng lặp, điều kiện đến việc tạo ra chương trình đầu tiên của mình - một trải nghiệm đầy phấn khích khi thấy code chạy thành công.",
    icon: <Terminal className="text-green-500" />,
    color: "from-green-400 to-emerald-500",
  },
  {
    title: "HTML & CSS",
    date: "12/04/2023",
    description: "Tạo trang web đầu tiên và hiểu cấu trúc web",
    longDescription:
      "Khám phá thế giới của phát triển web với HTML và CSS. Thầy Brad đã hướng dẫn từng bước để tạo ra trang web đầu tiên, giúp tôi hiểu cách các trang web được xây dựng và hoạt động.",
    icon: <FileCode className="text-blue-500" />,
    color: "from-blue-400 to-indigo-500",
  },
  {
    title: "FastAPI",
    date: "20/04/2023",
    description: "Xây dựng API đầu tiên và hiểu khái niệm backend",
    longDescription:
      "Bước vào thế giới backend với FastAPI. Thầy Brad đã giải thích rõ ràng về API, cách chúng kết nối frontend và backend, và hướng dẫn tôi xây dựng API đầu tiên của mình.",
    icon: <Code className="text-purple-500" />,
    color: "from-purple-400 to-violet-500",
  },
  {
    title: "Ngày Hôm Nay",
    date: "01/05/2023",
    description: "Đủ tự tin để xây dựng trang web và ứng dụng",
    longDescription:
      "Chỉ sau một tháng học tập, tôi đã có thể tự tin xây dựng các trang web và ứng dụng. Từ một người sợ hãi IT, giờ đây tôi đam mê công nghệ và luôn háo hức học hỏi thêm.",
    icon: <Globe className="text-pink-500" />,
    color: "from-pink-400 to-rose-500",
  },
]

export default function TimelineSection({ onScroll }: TimelineSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const { setCurrentSection } = useScrollContext()

  useEffect(() => {
    if (inView) {
      setCurrentSection("timeline")
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
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Hành Trình Học Tập Của Tôi
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Chỉ trong một tháng, thầy đã thay đổi hoàn toàn mối quan hệ của tôi với công nghệ
        </p>
      </motion.div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full md:-translate-x-1/2" />

        {/* Timeline Items */}
        <div className="space-y-16">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white/10 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center md:-translate-x-1/2 z-10 border border-white/30">
                {item.icon}
              </div>

              {/* Date */}
              <div className="absolute left-16 md:left-auto md:right-1/2 top-0 md:mr-10 text-sm text-white/60 md:text-right">
                {item.date}
              </div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20 hover:border-white/30 transition-all`}
                >
                  <div
                    className={`inline-block px-4 py-1 rounded-full text-white font-medium mb-3 bg-gradient-to-r ${item.color}`}
                  >
                    {item.title}
                  </div>
                  <p className="text-white/90 text-lg mb-4">{item.description}</p>
                  <p className="text-white/70 text-base">{item.longDescription}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Button
          onClick={onScroll}
          className="px-6 py-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all border-none"
        >
          <div className="flex items-center gap-2">
            <Code size={20} />
            <span>Xem những gì tôi đã học được</span>
            <ChevronDown size={20} />
          </div>
        </Button>
      </motion.div>
    </div>
  )
}
