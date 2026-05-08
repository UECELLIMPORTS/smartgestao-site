import { Hero } from '@/components/hero'
import { Sistemas } from '@/components/sistemas'
import { Diferenciais } from '@/components/diferenciais'
import { VoiceEntry } from '@/components/voice-entry'
import { Mensageria } from '@/components/mensageria'
import { ProvaSocial } from '@/components/prova-social'
import { Pricing } from '@/components/pricing'
import { FAQ } from '@/components/faq'
import { CtaFinal } from '@/components/cta-final'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Sistemas />
      <Diferenciais />
      <VoiceEntry />
      <Mensageria />
      <ProvaSocial />
      <Pricing />
      <FAQ />
      <CtaFinal />
    </>
  )
}
