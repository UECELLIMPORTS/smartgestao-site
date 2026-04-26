import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { WhatsAppFab } from '@/components/whatsapp-fab'

/**
 * Layout do "site público" — landing, checksmart, demo.
 * /apresentacao fica fora desse grupo, então não tem Header/Footer/FAB.
 */

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
