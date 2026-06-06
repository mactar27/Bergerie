"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Search, Scale, Calendar, Tag, Network, X } from "lucide-react"
import { MOUTONS, RACES, type Mouton } from "@/lib/data"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const dispoStyles: Record<string, string> = {
  Disponible: "bg-primary text-primary-foreground",
  "Réservé": "bg-accent text-accent-foreground",
  Vendu: "bg-muted text-muted-foreground",
}

export function Moutons() {
  const [race, setRace] = useState<string>("Toutes")
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    return MOUTONS.filter((m) => {
      const matchRace = race === "Toutes" || m.race === race
      const matchQuery =
        m.nom.toLowerCase().includes(query.toLowerCase()) ||
        m.race.toLowerCase().includes(query.toLowerCase())
      return matchRace && matchQuery
    })
  }, [race, query])

  return (
    <section id="nos-moutons" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Notre cheptel
          </p>
          <h2 className="font-heading text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
            Nos moutons d&apos;exception
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            Découvrez notre sélection de moutons issus des meilleures lignées
            génétiques, élevés avec soin et passion.
          </p>
        </div>

        {/* Filtres */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex flex-wrap gap-2">
            {RACES.map((r) => (
              <Button
                key={r}
                size="sm"
                variant={race === r ? "default" : "outline"}
                onClick={() => setRace(r)}
                className={cn(
                  "rounded-full font-semibold",
                  race !== r && "border-primary/30 text-foreground/70",
                )}
              >
                {r}
              </Button>
            ))}
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Rechercher un mouton..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="rounded-full pl-9"
            />
          </div>
        </div>

        {/* Grille */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((m) => (
            <article
              key={m.id}
              className="group overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={m.image || "/placeholder.svg"}
                  alt={`Mouton de la Bergerie Malia`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                {m.genealogie && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full gap-2 rounded-full border-primary/30 font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a href={`/nos-moutons?mouton=${encodeURIComponent(m.nom)}`}>
                      <Network className="size-4" />
                      Arbre généalogique
                    </a>
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">
            Aucun mouton ne correspond à votre recherche.
          </p>
        )}
      </div>

    </section>
  )
}
