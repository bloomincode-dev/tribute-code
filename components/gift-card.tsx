"use client"

import { motion } from "framer-motion"
import { Coffee } from "lucide-react"
import { useEffect, useState } from "react"

export default function GiftCard() {
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
    // Auto flip the card after a delay
    const timer = setTimeout(() => {
      setIsFlipped(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="perspective-1000 max-w-md mx-auto h-64">
      <motion.div
        className="relative w-full h-full transition-all duration-500 preserve-3d cursor-pointer"
        initial={{ rotateY: 180 }}
        animate={{ rotateY: isFlipped ? 0 : 180 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden">
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
            {/* Card Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-teal-700" />

            {/* Decorative elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-10 -translate-y-10 blur-xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full -translate-x-10 translate-y-10 blur-xl" />

              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bg-white/30 rounded-full"
                    style={{
                      width: `${Math.random() * 20 + 5}px`,
                      height: `${Math.random() * 20 + 5}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Starbucks Logo */}
            <div className="absolute top-6 left-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="text-green-600">
                <Coffee size={32} className="fill-current" />
              </div>
            </div>

            {/* Card Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-bold mb-1">Thẻ Quà Tặng Starbucks</h3>
              <p className="text-white/80 mb-4">Một món quà nhỏ bày tỏ lòng biết ơn</p>

              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4 border border-white/30">
                <div className="text-sm text-white/80 mb-1">Giá trị</div>
                <div className="text-3xl font-bold">₩50,000</div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-white/80">Gửi tặng: Thầy Brad Duy</div>
                <div className="text-sm text-white/80">Hiệu lực: Vĩnh viễn</div>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
            {/* Card Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-700 to-green-600" />

            {/* Decorative elements */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-10 -translate-y-10 blur-xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-black/10 rounded-full translate-x-10 translate-y-10 blur-xl" />
            </div>

            {/* QR Code (simulated) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-lg p-2">
              <div className="w-full h-full bg-[url('/placeholder.svg?height=100&width=100')] bg-center bg-no-repeat bg-contain" />
            </div>

            {/* Card Content */}
            <div className="absolute inset-x-0 bottom-0 p-6 text-white text-center">
              <p className="text-white/80 mb-2">Quét mã để sử dụng</p>
              <p className="text-sm text-white/60">Mã: SB-THANK-YOU-BRAD-2023</p>
            </div>
          </div>
        </div>
      </motion.div>

      <p className="text-center text-white/60 text-sm mt-4">Nhấn vào thẻ để xem mặt sau</p>
    </div>
  )
}
