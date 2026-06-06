import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { TEMOIGNAGES } from "@/lib/data"

export function Temoignages() {
  return (
    <section id="temoignages" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Témoignages
          </p>
          <h2 className="font-heading text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
            Ils nous font confiance
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            La satisfaction de nos clients est notre plus belle récompense.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TEMOIGNAGES.map((t) => (
            <figure
              key={t.nom}
              className="relative rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <Quote className="absolute right-6 top-6 size-10 text-primary/10" />
              <div className="flex gap-0.5">
                {Array.from({ length: t.note }).map((_, i) => (
                  <Star key={i} className="size-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-4 leading-relaxed text-foreground/90 text-pretty">
                {t.avis}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Image
                  src={t.image || "/placeholder.svg"}
                  alt={t.nom}
                  width={48}
                  height={48}
                  className="size-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{t.nom}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
