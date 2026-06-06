"use client"

import Image from "next/image"
import { Network, GitBranch } from "lucide-react"
import { MOUTONS } from "@/lib/data"
import { Button } from "@/components/ui/button"

export function Moutons() {
  return (
    <section id="nos-moutons" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Génétique d&apos;élite
          </p>
          <h2 className="font-heading text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
            Nos arbres généalogiques
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            Découvrez la lignée exceptionnelle de nos deux béliers champions — <strong>AMIR</strong> et <strong>NDIAYE FASS</strong> — 
            fruit de décennies de sélection génétique rigoureuse par la Bergerie Malia.
          </p>
        </div>

        {/* Cartes des deux béliers */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 max-w-3xl mx-auto">
          {MOUTONS.map((m) => (
            <article
              key={m.id}
              className="group overflow-hidden rounded-3xl bg-card shadow-md ring-1 ring-border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Photo */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-secondary/30 to-secondary/60">
                <Image
                  src={m.image || "/placeholder.svg"}
                  alt={`${m.nom} — bélier champion de la Bergerie Malia`}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Infos */}
              <div className="p-5 text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <GitBranch className="size-4 text-primary" />
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">Arbre généalogique</p>
                </div>
                <h3 className="font-heading text-2xl font-extrabold text-foreground mb-1">{m.nom}</h3>
                <p className="text-sm text-muted-foreground mb-4">{m.race} · Bergerie Malia</p>

                <Button
                  asChild
                  className="w-full gap-2 rounded-full font-semibold"
                >
                  <a href={`/nos-moutons?mouton=${encodeURIComponent(m.nom)}`}>
                    <Network className="size-4" />
                    Voir la généalogie de {m.nom}
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
