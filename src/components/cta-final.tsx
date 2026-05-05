import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { whatsappLink, BRAND } from '@/lib/contact'

export function CtaFinal() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl p-10 lg:p-16 text-center"
          style={{
            background: 'linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)',
            color: 'white',
          }}>
          {/* Decorative pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }} />

          <div className="relative">
            <h2 className="display-2 max-w-2xl mx-auto" style={{ color: 'white' }}>
              Pare de adivinhar.{' '}
              <span style={{ color: 'rgba(255,255,255,.75)' }}>
                Comece a crescer com dados.
              </span>
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-base leading-relaxed"
              style={{ color: 'rgba(255,255,255,.85)' }}>
              7 dias grátis pra testar. Sem cartão de crédito. Setup em até 24h.
              Suporte em português direto pelo WhatsApp.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`${BRAND.appUrl}/signup`}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold transition-opacity hover:opacity-95"
                style={{ background: 'var(--surface)', color: 'var(--primary)' }}
              >
                Começar grátis 7 dias <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={whatsappLink('Oi! Quero saber se a Gestão Inteligente serve pro meu negócio.')}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold border transition-colors hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,.4)', color: 'white' }}
              >
                Falar com vendas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
