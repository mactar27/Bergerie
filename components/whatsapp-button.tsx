import { MessageCircle } from "lucide-react"
import { CONTACT } from "@/lib/data"

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${CONTACT.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110"
    >
      <MessageCircle className="size-7" />
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#25D366] opacity-30" />
    </a>
  )
}
