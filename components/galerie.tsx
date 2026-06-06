"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { GALERIE } from "@/lib/data"
import { cn } from "@/lib/utils"

export function Galerie() {
  const [index, setIndex] = useState<number | null>(null)

  const close = useCallback(() => setIndex(null), [])
  const prev = useCallback(
    () => setIndex((i) => (i === null ? null : (i - 1 + GALERIE.length) % GALERIE.length)),
    [],
  )
  const next = useCallback(
    () => setIndex((i) => (i === null ? null : (i + 1) % GALERIE.length)),
    [],
  )

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [index, close, prev, next])

  return (
    <section id="galerie" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Galerie
          </p>
          <h2 className="font-heading text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
            La vie à la Bergerie
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            Plongez dans l&apos;univers de notre élevage à travers nos plus
            belles images.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {GALERIE.map((src, i) => (
            <button
              key={src}
              onClick={() => setIndex(i)}
              className={cn(
                "group relative aspect-square overflow-hidden rounded-2xl ring-1 ring-border",
                i % 5 === 0 && "md:col-span-2 md:row-span-2 md:aspect-auto",
              )}
              aria-label={`Agrandir l'image ${i + 1}`}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Photo de la Bergerie Malia ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/20" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {index !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={close}
            className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20"
            aria-label="Fermer"
          >
            <X className="size-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-2 flex size-11 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20 sm:left-6"
            aria-label="Image précédente"
          >
            <ChevronLeft className="size-6" />
          </button>
          <div
            className="relative h-[75vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={GALERIE[index] || "/placeholder.svg"}
              alt={`Photo agrandie ${index + 1}`}
              fill
              className="object-contain"
            />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-2 flex size-11 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20 sm:right-6"
            aria-label="Image suivante"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      )}
    </section>
  )
}
