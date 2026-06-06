export const CONTACT = {
  address: "MGRX+PH2, 140 Rue FA 22, Dakar",
  email: "mamouralia@live.fr",
  phones: ["78 574 97 15", "70 604 74 84", "77 474 67 06"],
  whatsapp: "221785749715",
}

export type Mouton = {
  id: string
  nom: string
  race: string
  age: string
  poids: string
  disponibilite: "Disponible" | "Réservé" | "Vendu"
  prix: string
  image: string
  genealogie?: string
}

export const MOUTONS: Mouton[] = [
  {
    id: "ladoum-amir",
    nom: "AMIR",
    race: "Ladoum",
    age: "Adult",
    poids: "100+ kg",
    disponibilite: "Disponible",
    prix: "Sur demande",
    image: "/images/amir.png",
    genealogie: "true",
  },
  {
    id: "ladoum-ndiaye-fass",
    nom: "NDIAYE FASS",
    race: "Ladoum",
    age: "Adult",
    poids: "120 kg",
    disponibilite: "Disponible",
    prix: "Sur demande",
    image: "/images/ndiayefass.png",
    genealogie: "true",
  },
]

export const RACES = ["Toutes", "Ladoum", "Touabire", "Bali-Bali"] as const

export type Service = {
  titre: string
  description: string
  icon: string
}

export const SERVICES: Service[] = [
  {
    titre: "Vente de moutons",
    description:
      "Une sélection rigoureuse de moutons sains et performants, disponibles toute l'année pour tous vos besoins.",
    icon: "ShoppingCart",
  },
  {
    titre: "Sélection génétique",
    description:
      "Un savoir-faire unique en amélioration génétique pour produire des animaux de qualité supérieure.",
    icon: "Dna",
  },
  {
    titre: "Conseils d'élevage",
    description:
      "Un accompagnement expert pour optimiser la santé, la nutrition et la croissance de vos animaux.",
    icon: "Lightbulb",
  },
  {
    titre: "Reproduction & amélioration",
    description:
      "Programmes de reproduction maîtrisés pour renforcer les meilleures lignées et races.",
    icon: "Sparkles",
  },
  {
    titre: "Suivi des animaux",
    description:
      "Un suivi sanitaire et génétique complet, de la naissance à la maturité de chaque mouton.",
    icon: "ClipboardCheck",
  },
  {
    titre: "Transport & livraison",
    description:
      "Service de livraison sécurisé pour acheminer vos moutons dans les meilleures conditions.",
    icon: "Truck",
  },
]

export type Temoignage = {
  nom: string
  role: string
  note: number
  avis: string
  image: string
}

export const TEMOIGNAGES: Temoignage[] = [
  {
    nom: "Moussa Diop",
    role: "Éleveur, Thiès",
    note: 5,
    avis: "Des moutons d'une qualité exceptionnelle. La génétique de la Bergerie Malia est tout simplement la meilleure du Sénégal. Mon cheptel s'est nettement amélioré.",
    image: "/placeholder.svg?height=100&width=100&query=portrait%20Senegalese%20man%20smiling",
  },
  {
    nom: "Awa Ndiaye",
    role: "Cliente fidèle, Dakar",
    note: 5,
    avis: "Un accueil professionnel et des conseils précieux. J'ai acheté mon mouton pour la Tabaski et toute la famille a été impressionnée. Je recommande vivement.",
    image: "/placeholder.svg?height=100&width=100&query=portrait%20Senegalese%20woman%20smiling",
  },
  {
    nom: "Cheikh Fall",
    role: "Investisseur agricole",
    note: 5,
    avis: "La rigueur dans la sélection génétique fait toute la différence. Des animaux robustes et performants. Un partenaire de confiance pour mes projets d'élevage.",
    image: "/placeholder.svg?height=100&width=100&query=portrait%20Senegalese%20businessman",
  },
  {
    nom: "Fatou Sarr",
    role: "Particulier, Rufisque",
    note: 5,
    avis: "Service impeccable du premier contact à la livraison. La transparence sur la santé et l'âge des moutons m'a totalement rassurée. Bravo à toute l'équipe !",
    image: "/placeholder.svg?height=100&width=100&query=portrait%20African%20woman%20professional",
  },
]

export const GALERIE = [
  "/placeholder.svg?height=600&width=600&query=sheep%20farm%20landscape%20golden%20hour",
  "/placeholder.svg?height=600&width=600&query=Ladoum%20champion%20sheep%20closeup",
  "/placeholder.svg?height=600&width=600&query=herd%20of%20sheep%20grazing",
  "/placeholder.svg?height=600&width=600&query=young%20lambs%20in%20a%20pen",
  "/placeholder.svg?height=600&width=600&query=modern%20sheep%20farm%20facility",
  "/placeholder.svg?height=600&width=600&query=premium%20ram%20profile%20portrait",
  "/placeholder.svg?height=600&width=600&query=sheep%20feeding%20time%20farm",
  "/placeholder.svg?height=600&width=600&query=genetics%20selection%20sheep%20breeding",
]

export const STATS = [
  { valeur: "+10", label: "Années d'expérience", icon: "Trophy" },
  { valeur: "+1500", label: "Moutons élevés", icon: "Sheep" },
  { valeur: "100%", label: "Sélection génétique", icon: "Dna" },
  { valeur: "+500", label: "Clients satisfaits", icon: "Users" },
]
