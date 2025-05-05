"use client"

import { useState, useEffect, useCallback, useRef } from "react"

interface UseAudioOptions {
  volume?: number
  loop?: boolean
  autoPlay?: boolean
}

export function useAudio(url: string, options: UseAudioOptions = {}) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Create audio element only on client side
    if (typeof window !== "undefined") {
      const audioElement = new Audio(url)
      audioElement.volume = options.volume ?? 1
      audioElement.loop = options.loop ?? false
      audioElement.preload = "auto"

      // Set up event listeners
      const handleCanPlayThrough = () => setIsReady(true)
      const handleEnded = () => setIsPlaying(false)

      audioElement.addEventListener("canplaythrough", handleCanPlayThrough)
      audioElement.addEventListener("ended", handleEnded)

      audioRef.current = audioElement

      return () => {
        audioElement.pause()
        audioElement.removeEventListener("canplaythrough", handleCanPlayThrough)
        audioElement.removeEventListener("ended", handleEnded)
        audioElement.src = ""
      }
    }
  }, [url, options.volume, options.loop])

  const play = useCallback(() => {
    if (!audioRef.current || !isReady) return

    // Create a user interaction promise to handle autoplay restrictions
    const playPromise = audioRef.current.play()

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true)
        })
        .catch((error) => {
          console.log("Audio playback prevented. User interaction required.")
          // Don't show error in console as it's expected in some browsers
        })
    }
  }, [isReady])

  const pause = useCallback(() => {
    if (!audioRef.current) return
    audioRef.current.pause()
    setIsPlaying(false)
  }, [])

  const stop = useCallback(() => {
    if (!audioRef.current) return
    audioRef.current.pause()
    audioRef.current.currentTime = 0
    setIsPlaying(false)
  }, [])

  const setVolume = useCallback((volume: number) => {
    if (!audioRef.current) return
    audioRef.current.volume = Math.max(0, Math.min(1, volume))
  }, [])

  return { play, pause, stop, isPlaying, setVolume, isReady }
}
