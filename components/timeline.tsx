"use client"

import { motion } from "framer-motion"
import { Code, FileCode, Terminal, Globe, Lightbulb } from "lucide-react"

const timelineItems = [
  {
    title: "First Day",
    description: "Nervous and afraid of coding, but excited to learn",
    icon: <Lightbulb className="text-yellow-500" />,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Learning Python",
    description: "From basic syntax to writing my first functional program",
    icon: <Terminal className="text-green-500" />,
    color: "from-green-400 to-emerald-500",
  },
  {
    title: "HTML & CSS",
    description: "Creating my first web pages and understanding structure",
    icon: <FileCode className="text-blue-500" />,
    color: "from-blue-400 to-indigo-500",
  },
  {
    title: "FastAPI",
    description: "Building my first API and understanding backend concepts",
    icon: <Code className="text-purple-500" />,
    color: "from-purple-400 to-violet-500",
  },
  {
    title: "Today",
    description: "Confident enough to build websites and applications on my own",
    icon: <Globe className="text-pink-500" />,
    color: "from-pink-400 to-rose-500",
  },
]

export default function Timeline() {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-300 via-purple-300 to-pink-300 rounded-full md:-translate-x-1/2" />

      {/* Timeline Items */}
      <div className="space-y-12">
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
            <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center md:-translate-x-1/2 z-10">
              {item.icon}
            </div>

            {/* Content */}
            <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
              <div
                className={`bg-white/40 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-shadow`}
              >
                <div
                  className={`inline-block px-4 py-1 rounded-full text-white font-medium mb-3 bg-gradient-to-r ${item.color}`}
                >
                  {item.title}
                </div>
                <p className="text-gray-700 text-lg">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
