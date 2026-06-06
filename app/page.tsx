import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Moutons } from "@/components/moutons"
import { Services } from "@/components/services"
import { Galerie } from "@/components/galerie"
import { Temoignages } from "@/components/temoignages"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Moutons />
        <Services />
        <Galerie />
        <Temoignages />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
