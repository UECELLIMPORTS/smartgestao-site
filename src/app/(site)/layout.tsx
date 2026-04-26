import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppFab } from '@/components/whatsapp-fab'
import { CookieBanner } from '@/components/cookie-banner'

/**
 * Layout do "site público" — landing, checksmart, demo, termos, privacidade.
 * /apresentacao fica fora desse grupo, então não tem Header/Footer/FAB.
 */

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppFab />
      <CookieBanner />
    </>
  )
}
