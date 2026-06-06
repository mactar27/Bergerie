import Image from "next/image"
import { ArrowRight, Phone, Trophy, Dna, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { valeur: "+10", label: "Années d'expérience", Icon: Trophy },
  { valeur: "+1500", label: "Moutons élevés", Icon: Users },
  { valeur: "100%", label: "Sélection génétique", Icon: Dna },
  { valeur: "+500", label: "Clients satisfaits", Icon: Users },
]

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pb-8 pt-10 lg:grid-cols-2 lg:gap-6 lg:px-8 lg:pt-16">
        {/* Texte */}
        <div className="animate-fade-up">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Bergerie Malia
          </p>
          <h1 className="font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl">
            Genius in <br />
            <span className="text-primary">Genetics!</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            Élevage, sélection génétique et vente de moutons de qualité
            supérieure.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full font-semibold">
              <a href="#nos-moutons">
                Découvrir nos moutons
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary/40 font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="#contact">
                Nous contacter
                <Phone className="size-4" />
              </a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <Image
                  key={i}
                  src={`/placeholder.svg?height=80&width=80&query=client%20avatar%20portrait%20${i}`}
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-primary">+500 clients</span>{" "}
              satisfaits
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative animate-fade-up">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-primary/10 lg:aspect-[5/4]">
            <Image
              src="/placeholder.svg?height=640&width=800&query=champion%20Ladoum%20sheep%20black%20and%20white%20with%20blue%20collar%20portrait"
              alt="Mouton Ladoum de championnat de la Bergerie Malia"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-accent px-5 py-4 text-accent-foreground shadow-lg sm:block">
            <p className="font-heading text-2xl font-extrabold leading-none">100%</p>
            <p className="text-xs font-medium">Qualité génétique garantie</p>
          </div>
        </div>
      </div>

      {/* Barre de statistiques */}
      <div className="mx-auto max-w-7xl px-4 pb-12 lg:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border shadow-xl lg:grid-cols-4">
          {stats.map(({ valeur, label, Icon }) => (
            <div
              key={label}
              className="flex items-center gap-4 bg-card px-6 py-6"
            >
              <Icon className="size-9 shrink-0 text-primary" strokeWidth={1.5} />
              <div>
                <p className="font-heading text-2xl font-extrabold text-foreground">
                  {valeur}
                </p>
                <p className="text-sm text-muted-foreground">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
