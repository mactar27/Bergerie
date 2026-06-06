"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function SplashScreen() {
  const [hidden, setHidden] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Empêche le défilement pendant le splash
    document.body.style.overflow = "hidden"

    const fadeTimer = setTimeout(() => setFadeOut(true), 1900)
    const removeTimer = setTimeout(() => {
      setHidden(true)
      document.body.style.overflow = ""
    }, 2500)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
      document.body.style.overflow = ""
    }
  }, [])

  if (hidden) return null

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-600 ease-out ${
        fadeOut ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-8 px-6">
        <div className="animate-fade-up">
          <Image
            src="/images/logo-bergerie-malia.png"
            alt="Bergerie Malia"
            width={360}
            height={180}
            priority
            className="h-auto w-[260px] sm:w-[340px]"
          />
        </div>

        <div className="h-1 w-40 overflow-hidden rounded-full bg-secondary">
          <div className="h-full w-full origin-left animate-splash-bar rounded-full bg-primary" />
        </div>
      </div>
    </div>
  )
}
