import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { whatsappLink } from '@/lib/contact'

export function CtaFinal() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border p-10 lg:p-16 text-center"
          style={{
            background: 'linear-gradient(135deg, #0D1320, #0A0F1A)',
            borderColor: '#00E5FF40',
          }}>
          <div className="pointer-events-none absolute inset-0 opacity-30"
            style={{ background: 'radial-gradient(circle at 50% 0%, #00E5FF20, transparent 70%)' }} />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl mx-auto">
              Pronto pra parar de adivinhar<br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #00E5FF, #00FF94)' }}>
                e começar a crescer com dados?
              </span>
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-base" style={{ color: '#8AA8C8' }}>
              Conversa de 15 minutos com um especialista pra entender se a Gestão Inteligente é pro seu negócio.
              Sem enrolação, sem compromisso.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={whatsappLink('Oi! Quero saber se a Gestão Inteligente serve pro meu negócio.')}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #00E5FF, #00FF94)', color: '#080C14' }}
              >
                Falar no WhatsApp agora <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-xl border px-7 py-3.5 text-sm font-bold transition-colors hover:bg-white/5"
                style={{ borderColor: '#1E2D45', color: '#E8F0FE' }}
              >
                Agendar demonstração
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
