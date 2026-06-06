import Image from "next/image"
import { Check, Heart, ShieldCheck, Award } from "lucide-react"

const points = [
  { Icon: Award, titre: "Qualité génétique", desc: "Sélection rigoureuse des meilleures lignées." },
  { Icon: Heart, titre: "Santé des animaux", desc: "Suivi sanitaire complet et permanent." },
  { Icon: ShieldCheck, titre: "Élevage professionnel", desc: "Plus de 10 ans de savoir-faire reconnu." },
  { Icon: Check, titre: "Satisfaction clients", desc: "Plus de 500 clients nous font confiance." },
]

export function About() {
  return (
    <section id="a-propos" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/placeholder.svg?height=600&width=800&query=spotted%20sheep%20on%20beach%20with%20blue%20collar"
              alt="Mouton de la Bergerie Malia"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -right-4 -top-4 -z-10 size-32 rounded-3xl bg-primary/10" />
          <div className="absolute -bottom-4 -left-4 -z-10 size-32 rounded-3xl bg-accent/10" />
        </div>

        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
            À propos de nous
          </p>
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-foreground text-balance sm:text-4xl">
            L&apos;excellence génétique,
            <br />
            <span className="text-primary">notre engagement</span>
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-accent" />

          <p className="mt-6 leading-relaxed text-muted-foreground text-pretty">
            Bergerie Malia est spécialisée dans l&apos;élevage et la sélection
            génétique de moutons de qualité. Notre mission est d&apos;offrir des
            animaux sains, robustes et performants pour répondre aux besoins de
            nos clients.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            Forts de plus de dix ans d&apos;expérience, nous maîtrisons chaque
            étape de l&apos;élevage, de la reproduction à la maturité, en
            appliquant les meilleures pratiques de génétique animale.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {points.map(({ Icon, titre, desc }) => (
              <div key={titre} className="flex gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{titre}</p>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
