import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css';
import SplashWrapper from '../components/SplashWrapper';
import { PwaRegister } from '@/components/pwa-register';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
})
const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Bergerie Malia | Genius in Genetics - Élevage & Sélection Génétique de Moutons',
  description:
    "Bergerie Malia, expert en élevage, sélection génétique et vente de moutons de qualité supérieure. Plus de 10 ans d'expérience et 1500 moutons élevés.",
  keywords: [
    'bergerie malia',
    'élevage moutons',
    'sélection génétique',
    'vente moutons',
    'génétique animale',
    'Sénégal',
  ],
  openGraph: {
    title: 'Bergerie Malia | Genius in Genetics',
    description:
      'Élevage, sélection génétique et vente de moutons de qualité supérieure.',
    type: 'website',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/images/logo-bergerie-malia.png',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${openSans.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <PwaRegister />
        <SplashWrapper>
          {children}
        </SplashWrapper>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
