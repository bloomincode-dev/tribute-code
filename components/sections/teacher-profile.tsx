"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { useScrollContext } from "@/contexts/scroll-context"
import Image from "next/image"

export default function TeacherProfile() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const { setCurrentSection } = useScrollContext()

  useEffect(() => {
    if (inView) {
      setCurrentSection("profile")
    }
  }, [inView, setCurrentSection])

  return (
    <div ref={ref} className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-transparent bg-clip-text">
          Về Thầy Brad Duy
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Người thầy đã truyền cảm hứng và thay đổi cuộc đời tôi
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16 p-6"
        >
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-2xl border-2 border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-violet-900/80 mix-blend-multiply z-10"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BradDuy.jpg-H2yAdYPywrw7IBm3HecgaPJ0jRYLh4.png"
                alt="Thầy Brad Duy"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-1/3 z-20"></div>
              <div className="absolute bottom-4 left-4 z-30">
                <h3 className="text-3xl md:text-4xl font-bold text-cyan-300 font-display tracking-wider">BRAD DUY</h3>
              </div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
            >
              <p className="text-white/90 text-lg leading-relaxed mb-4">
                Dr. Brad Duy, Ph.D. từ Đại học Quốc gia Seoul về công nghệ, là một nhà nghiên cứu AI dày dặn kinh nghiệm
                và hiện đang là nghiên cứu viên thỉnh giảng tại Đại học Chung-Ang — một trong những tổ chức hàng đầu của
                Hàn Quốc.
              </p>
              <p className="text-white/90 text-lg leading-relaxed mb-4">
                Với kinh nghiệm phong phú và các ấn phẩm quốc tế, thầy còn đảm nhận vai trò là người đánh giá cho các
                tạp chí AI hàng đầu. Công trình của thầy với các nhà nghiên cứu Hàn Quốc bao gồm deep learning,
                vision-language-models, thúc đẩy đổi mới và tạo ảnh hưởng học thuật toàn cầu.
              </p>
              <p className="text-white/90 text-lg leading-relaxed">
                Ngoài những thành tựu học thuật ấn tượng, thầy Brad còn là một người thầy tận tâm, luôn truyền cảm hứng
                và kiên nhẫn hướng dẫn học viên khám phá thế giới công nghệ.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
