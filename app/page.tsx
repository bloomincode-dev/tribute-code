"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useWindowSize } from "@/hooks/use-window-size"
import { useAudio } from "@/hooks/use-audio"
import { ChevronDown, Gift } from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import IntroSection from "@/components/sections/intro-section"
import TimelineSection from "@/components/sections/timeline-section"
import CodeSection from "@/components/sections/code-section"
import GiftSection from "@/components/sections/gift-section"
import QuoteSection from "@/components/sections/quote-section"
import AchievementsSection from "@/components/sections/achievements-section"
import TeacherProfile from "@/components/sections/teacher-profile"
import ScrollProgress from "@/components/ui/scroll-progress"
import LoadingScreen from "@/components/loading-screen"
import MouseFollower from "@/components/mouse-follower"
import StudentInfo from "@/components/student-info"
import AdminThanks from "@/components/admin-thanks"
import { ScrollProvider } from "@/contexts/scroll-context"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isGiftOpened, setIsGiftOpened] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showFinalGift, setShowFinalGift] = useState(false)
  const { width, height } = useWindowSize()

  const containerRef = useRef<HTMLDivElement>(null)
  const introRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const codeRef = useRef<HTMLDivElement>(null)
  const achievementsRef = useRef<HTMLDivElement>(null)
  const quoteRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)
  const giftRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
  })

  const { play: playOpenSound } = useAudio("/sounds/gift-open.mp3")
  const { play: playBackgroundMusic } = useAudio("/sounds/background-music.mp3", {
    loop: true,
    volume: 0.3,
  })

  // Parallax effects
  const introParallax = useTransform(scrollYProgress, [0, 0.2], [0, -100])
  const timelineParallax = useTransform(scrollYProgress, [0.15, 0.35], [100, -100])
  const codeParallax = useTransform(scrollYProgress, [0.3, 0.5], [100, -100])
  const achievementsParallax = useTransform(scrollYProgress, [0.45, 0.65], [100, -100])
  const quoteParallax = useTransform(scrollYProgress, [0.6, 0.8], [100, -100])
  const profileParallax = useTransform(scrollYProgress, [0.7, 0.9], [100, -100])
  const giftParallax = useTransform(scrollYProgress, [0.8, 1], [100, 0])

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // Add a click handler for the entire document to enable audio
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true)
        // We'll play background music only after explicit user interaction with the gift
      }
    }

    document.addEventListener("click", handleFirstInteraction, { once: true })

    return () => {
      document.removeEventListener("click", handleFirstInteraction)
    }
  }, [hasInteracted])

  const handleOpenGift = () => {
    if (!isGiftOpened) {
      // Only try to play sounds after user has interacted
      if (hasInteracted) {
        playOpenSound()
        // Play background music when gift is opened
        playBackgroundMusic()
      }

      setIsGiftOpened(true)
      setTimeout(() => {
        scrollToSection(timelineRef)
      }, 2000)
    }
  }

  const handleShowFinalGift = () => {
    setShowFinalGift(true)
    setShowConfetti(true)
    setTimeout(() => {
      setShowConfetti(false)
    }, 5000)
  }

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    window.scrollTo({
      top: ref.current?.offsetTop || 0,
      behavior: "smooth",
    })
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <ScrollProvider>
      <main
        ref={containerRef}
        className="relative bg-gradient-to-br from-indigo-950 via-purple-950 to-violet-950 text-white"
      >
        <ScrollProgress />
        <MouseFollower />
        <ParticleBackground />
        <StudentInfo />
        <AdminThanks />

        {/* Intro Section */}
        <section
          ref={introRef}
          className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden"
        >
          <motion.div style={{ y: introParallax }} className="relative z-10 w-full max-w-7xl mx-auto">
            <IntroSection
              isGiftOpened={isGiftOpened}
              hasInteracted={hasInteracted}
              onOpenGift={handleOpenGift}
              onScroll={() => scrollToSection(timelineRef)}
            />
          </motion.div>

          {!isGiftOpened && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                className="relative w-64 h-64 bg-gradient-to-br from-purple-600 to-indigo-800 rounded-xl shadow-2xl flex items-center justify-center"
                animate={{
                  rotateY: [0, 360],
                  rotateX: [0, 15, 0, -15, 0],
                }}
                transition={{
                  rotateY: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  rotateX: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              >
                <Gift size={80} className="text-white" />
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-0 left-0 w-20 h-20 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full translate-x-1/2 translate-y-1/2 blur-xl" />
                </div>
              </motion.div>
            </div>
          )}

          {!isGiftOpened && (
            <motion.div
              className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
              initial={{ opacity: 0 }}
              animate={{ opacity: isGiftOpened ? 0 : 1 }}
              transition={{ delay: 2 }}
            >
              <button
                onClick={() => scrollToSection(timelineRef)}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <span>Cuộn xuống</span>
                <ChevronDown size={20} />
              </button>
            </motion.div>
          )}
        </section>

        {/* Timeline Section */}
        <section ref={timelineRef} className="relative min-h-screen py-20 px-4 md:px-10 overflow-hidden">
          <motion.div style={{ y: timelineParallax }} className="relative z-10 w-full max-w-7xl mx-auto">
            <TimelineSection onScroll={() => scrollToSection(codeRef)} />
          </motion.div>
        </section>

        {/* Code Section */}
        <section ref={codeRef} className="relative min-h-screen py-20 px-4 md:px-10 overflow-hidden">
          <motion.div style={{ y: codeParallax }} className="relative z-10 w-full max-w-7xl mx-auto">
            <CodeSection onScroll={() => scrollToSection(achievementsRef)} />
          </motion.div>
        </section>

        {/* Achievements Section */}
        <section ref={achievementsRef} className="relative min-h-screen py-20 px-4 md:px-10 overflow-hidden">
          <motion.div style={{ y: achievementsParallax }} className="relative z-10 w-full max-w-7xl mx-auto">
            <AchievementsSection onScroll={() => scrollToSection(quoteRef)} />
          </motion.div>
        </section>

        {/* Quote Section */}
        <section ref={quoteRef} className="relative min-h-screen py-20 px-4 md:px-10 overflow-hidden">
          <motion.div style={{ y: quoteParallax }} className="relative z-10 w-full max-w-7xl mx-auto">
            <QuoteSection onScroll={() => scrollToSection(profileRef)} />
          </motion.div>
        </section>

        {/* Teacher Profile Section */}
        <section ref={profileRef} className="relative min-h-screen py-20 px-4 md:px-10 overflow-hidden">
          <motion.div style={{ y: profileParallax }} className="relative z-10 w-full max-w-7xl mx-auto">
            <TeacherProfile />
            <div className="mt-16 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(giftRef)}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-2">
                  <span>Xem món quà của tôi</span>
                  <ChevronDown size={20} />
                </div>
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* Gift Section */}
        <section ref={giftRef} className="relative min-h-screen py-20 px-4 md:px-10 overflow-hidden">
          <motion.div style={{ y: giftParallax }} className="relative z-10 w-full max-w-7xl mx-auto">
            <GiftSection
              showFinalGift={showFinalGift}
              showConfetti={showConfetti}
              onRevealGift={handleShowFinalGift}
              width={width}
              height={height}
            />
          </motion.div>
        </section>
      </main>
    </ScrollProvider>
  )
}
