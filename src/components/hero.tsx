import Link from 'next/link'
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react'
import { whatsappLink } from '@/lib/contact'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Glows decorativos */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #00E5FF, transparent)' }} />
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, #00FF94, transparent)' }} />

      <div className="container-x relative pt-16 pb-20 lg:pt-24 lg:pb-28">
        {/* Badge topo */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold"
          style={{ background: 'rgba(0,229,255,.05)', borderColor: 'rgba(0,229,255,.3)', color: '#00E5FF' }}>
          <Zap className="h-3.5 w-3.5" /> 4 sistemas em 1 só painel
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight max-w-4xl">
          Pare de adivinhar.<br />
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #00E5FF, #00FF94)' }}>
            Comece a decidir com dados.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: '#8AA8C8' }}>
          A plataforma <strong style={{ color: '#E8F0FE' }}>Gestão Inteligente</strong> une frente de caixa, estoque, financeiro,
          CRM, Meta Ads e assistência técnica num só lugar — para empresários
          que querem entender se a loja física se paga sozinha, qual canal traz
          mais lucro e onde estão os clientes em risco de perder.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href={whatsappLink('Oi! Vim do site, quero conhecer os planos da Gestão Inteligente.')}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #00E5FF, #00FF94)', color: '#080C14' }}
          >
            Falar com um especialista <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            href="/demo"
            className="inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-bold transition-colors hover:bg-white/5"
            style={{ borderColor: '#1E2D45', color: '#E8F0FE' }}
          >
            Agendar demonstração
          </Link>
          <Link
            href="#planos"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold transition-colors hover:text-white"
            style={{ color: '#8AA8C8' }}
          >
            Ver planos →
          </Link>
        </div>

        {/* Trust strip */}
        <div className="mt-10 flex flex-wrap items-center gap-6 text-xs" style={{ color: '#8AA8C8' }}>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4" style={{ color: '#00FF94' }} />
            7 dias de garantia
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4" style={{ color: '#00FF94' }} />
            Sem fidelidade
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4" style={{ color: '#00FF94' }} />
            Suporte por WhatsApp
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4" style={{ color: '#00FF94' }} />
            Setup em até 24h
          </div>
        </div>
      </div>
    </section>
  )
}
