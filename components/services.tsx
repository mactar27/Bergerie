import {
  ShoppingCart,
  Dna,
  Lightbulb,
  Sparkles,
  ClipboardCheck,
  Truck,
  type LucideIcon,
} from "lucide-react"

const services: { titre: string; description: string; Icon: LucideIcon }[] = [
  {
    titre: "Vente de moutons",
    description:
      "Une sélection rigoureuse de moutons sains et performants, disponibles toute l'année pour tous vos besoins.",
    Icon: ShoppingCart,
  },
  {
    titre: "Sélection génétique",
    description:
      "Un savoir-faire unique en amélioration génétique pour produire des animaux de qualité supérieure.",
    Icon: Dna,
  },
  {
    titre: "Conseils d'élevage",
    description:
      "Un accompagnement expert pour optimiser la santé, la nutrition et la croissance de vos animaux.",
    Icon: Lightbulb,
  },
  {
    titre: "Reproduction & amélioration",
    description:
      "Programmes de reproduction maîtrisés pour renforcer les meilleures lignées et races.",
    Icon: Sparkles,
  },
  {
    titre: "Suivi des animaux",
    description:
      "Un suivi sanitaire et génétique complet, de la naissance à la maturité de chaque mouton.",
    Icon: ClipboardCheck,
  },
  {
    titre: "Transport & livraison",
    description:
      "Service de livraison sécurisé pour acheminer vos moutons dans les meilleures conditions.",
    Icon: Truck,
  },
]

export function Services() {
  return (
    <section id="nos-services" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Nos services
          </p>
          <h2 className="font-heading text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
            Un accompagnement complet
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            De la sélection à la livraison, nous mettons notre expertise à votre
            service à chaque étape.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ titre, description, Icon }) => (
            <div
              key={titre}
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-7" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                {titre}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
