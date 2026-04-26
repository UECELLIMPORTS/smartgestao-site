import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppFab } from '@/components/whatsapp-fab'
import { BRAND } from '@/lib/contact'

export const metadata: Metadata = {
  title:       `${BRAND.name} — ${BRAND.tagline}`,
  description: 'Plataforma 4-em-1 de gestão pra empresários que querem entender, controlar e escalar o negócio com dados reais.',
  metadataBase: new URL('https://gestaointeligente.com.br'),
  openGraph: {
    title:       `${BRAND.name} — ${BRAND.tagline}`,
    description: 'Sistemas que fazem seu negócio crescer.',
    type:        'website',
    locale:      'pt_BR',
  },
}

export const viewport = {
  themeColor: '#080C14',
  width:      'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  )
}
