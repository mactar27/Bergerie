"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#a-propos", label: "À propos" },
  { href: "#nos-moutons", label: "Moutons" },
  { href: "#nos-services", label: "Services" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 shadow-sm backdrop-blur"
          : "bg-background/80 backdrop-blur",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <a href="/" className="flex shrink-0 items-center" aria-label="Bergerie Malia - Accueil">
          <Image
            src="/images/logo-bergerie-malia.png"
            alt="Bergerie Malia - Genius in Genetics"
            width={800}
            height={272}
            className="h-48 w-auto object-contain"
            priority
          />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+221785749715"
            aria-label="Appeler"
            className="flex size-10 items-center justify-center rounded-full border border-primary/30 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Phone className="size-4" />
          </a>
          <Button asChild className="rounded-full font-semibold">
            <a href="#contact">Nous contacter</a>
          </Button>
        </div>

        <button
          className="flex size-10 items-center justify-center rounded-md text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="flex flex-col px-4 py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-semibold text-foreground/80 hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <Button asChild className="w-full rounded-full font-semibold">
                <a href="#contact" onClick={() => setOpen(false)}>
                  Nous contacter
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
