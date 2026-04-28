import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { BRAND } from '@/lib/contact'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title:       `${BRAND.name} — ${BRAND.tagline}`,
  description: 'ERP completo pra lojas que querem vender mais e gastar menos tempo. Frente de caixa, estoque, financeiro, CRM e Meta Ads em um só painel.',
  metadataBase: new URL('https://gestaosmarterp.online'),
  openGraph: {
    title:       `${BRAND.name} — ${BRAND.tagline}`,
    description: 'Sistema de gestão pra lojas que querem crescer com dados.',
    type:        'website',
    locale:      'pt_BR',
  },
}

export const viewport = {
  themeColor:   '#FFFFFF',
  width:        'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
