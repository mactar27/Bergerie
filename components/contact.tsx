"use client"

import { useState } from "react"
import { MapPin, Mail, Phone, Send, MessageCircle } from "lucide-react"
import { CONTACT } from "@/lib/data"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Contact
          </p>
          <h2 className="font-heading text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
            Parlons de votre projet
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            Une question, une demande de devis ? Notre équipe vous répond
            rapidement.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Infos + carte */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard Icon={MapPin} titre="Adresse" lignes={[CONTACT.address]} />
              <InfoCard
                Icon={Mail}
                titre="Email"
                lignes={[CONTACT.email]}
                href={`mailto:${CONTACT.email}`}
              />
              <div className="sm:col-span-2">
                <InfoCard
                  Icon={Phone}
                  titre="Téléphones"
                  lignes={CONTACT.phones}
                  phones
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-full font-semibold">
                <a href={`tel:+221${CONTACT.phones[0].replace(/\s/g, "")}`}>
                  <Phone className="size-4" /> Appeler maintenant
                </a>
              </Button>
              <Button
                asChild
                className="rounded-full bg-[#25D366] font-semibold text-white hover:bg-[#1eb955]"
              >
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
              </Button>
            </div>

            <div className="overflow-hidden rounded-2xl ring-1 ring-border">
              <iframe
                title="Localisation Bergerie Malia"
                src="https://www.google.com/maps?q=MGRX%2BPH2%2C+140+Rue+FA+22%2C+Dakar&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>

          {/* Formulaire */}
          <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="nom">Nom complet</Label>
                  <Input id="nom" name="nom" required placeholder="Votre nom" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tel">Téléphone</Label>
                  <Input id="tel" name="tel" type="tel" required placeholder="77 000 00 00" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="vous@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Décrivez votre besoin..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-full font-semibold">
                <Send className="size-4" /> Envoyer le message
              </Button>
              {sent && (
                <p className="text-center text-sm font-medium text-primary">
                  Merci ! Votre message a bien été envoyé.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({
  Icon,
  titre,
  lignes,
  href,
  phones,
}: {
  Icon: typeof MapPin
  titre: string
  lignes: string[]
  href?: string
  phones?: boolean
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="size-5" />
      </div>
      <p className="mt-4 font-semibold text-foreground">{titre}</p>
      <div className="mt-1 space-y-0.5">
        {lignes.map((l) =>
          phones ? (
            <a
              key={l}
              href={`tel:+221${l.replace(/\s/g, "")}`}
              className="block text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {l}
            </a>
          ) : href ? (
            <a
              key={l}
              href={href}
              className="block break-all text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {l}
            </a>
          ) : (
            <p key={l} className="text-sm text-muted-foreground">
              {l}
            </p>
          ),
        )}
      </div>
    </div>
  )
}
