import { Hero } from '@/components/hero'
import { Sistemas } from '@/components/sistemas'
import { Diferenciais } from '@/components/diferenciais'
import { Pricing } from '@/components/pricing'
import { FAQ } from '@/components/faq'
import { CtaFinal } from '@/components/cta-final'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Sistemas />
      <Diferenciais />
      <Pricing />
      <FAQ />
      <CtaFinal />
    </>
  )
}
