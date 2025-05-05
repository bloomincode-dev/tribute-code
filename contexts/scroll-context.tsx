"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Section = "intro" | "timeline" | "code" | "achievements" | "quote" | "profile" | "gift"

interface ScrollContextType {
  currentSection: Section
  setCurrentSection: (section: Section) => void
}

const ScrollContext = createContext<ScrollContextType>({
  currentSection: "intro",
  setCurrentSection: () => {},
})

export const useScrollContext = () => useContext(ScrollContext)

interface ScrollProviderProps {
  children: ReactNode
}

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const [currentSection, setCurrentSection] = useState<Section>("intro")

  return <ScrollContext.Provider value={{ currentSection, setCurrentSection }}>{children}</ScrollContext.Provider>
}
