import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { BRAND } from '@/lib/contact'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const SITE_TITLE = 'Gestão Smart — ERP, CRM, Checklist e Meta Ads em uma plataforma com IA'
const SITE_DESCRIPTION = 'Do caos à clareza. ERP completo, CRM com WhatsApp, Checklist de assistência técnica e Meta Ads — tudo 100% em nuvem com IA integrada. Sem fidelidade, 7 dias grátis.'

export const metadata: Metadata = {
  title:       SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: new URL('https://gestaosmarterp.online'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title:       SITE_TITLE,
    description: SITE_DESCRIPTION,
    url:         'https://gestaosmarterp.online',
    siteName:    'Gestão Smart',
    type:        'website',
    locale:      'pt_BR',
    images: [
      {
        url:    '/images/og-image.jpg',
        width:  1200,
        height: 630,
        alt:    'Gestão Smart — ERP, CRM, Checklist e Meta Ads com IA integrada',
      },
    ],
  },
  twitter: {
    card:        'summary_large_image',
    title:       SITE_TITLE,
    description: SITE_DESCRIPTION,
    images:      ['/images/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport = {
  themeColor:   '#050B17',
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
