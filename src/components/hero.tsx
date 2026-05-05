import Link from 'next/link'
import { ArrowRight, Sparkles, ShieldCheck, Cpu, BarChart3 } from 'lucide-react'
import { BRAND } from '@/lib/contact'

export function Hero() {
  return (
    <section className="hero-dark">
      <div className="container-x relative pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Coluna esquerda — copy */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="chip mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              IA INTEGRADA · Análise · Insights · Automação
            </div>

            {/* Headline */}
            <h1 className="display-1 max-w-3xl" style={{ color: 'var(--text)' }}>
              Inteligência.<br />
              <span style={{
                background: 'linear-gradient(135deg, var(--accent) 0%, var(--primary) 60%, var(--primary-hover) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Gestão.
              </span><br />
              Resultados.
            </h1>

            {/* Subhead */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed" style={{ color: 'var(--text-2)' }}>
              Do caos à clareza. ERP, CRM, Checklist e Meta Ads em uma plataforma 100% em
              nuvem com IA integrada. Sua empresa no <strong style={{ color: 'var(--accent-yellow)' }}>controle total</strong>.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={`${BRAND.appUrl}/signup`} className="btn-primary">
                Começar grátis 7 dias <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/demo" className="btn-secondary">
                Agendar demonstração
              </Link>
            </div>

            {/* Trust strip */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm" style={{ color: 'var(--muted)' }}>
              <TrustItem>Sem fidelidade</TrustItem>
              <TrustItem>Cancele quando quiser</TrustItem>
              <TrustItem>Setup em 24h</TrustItem>
            </div>

            {/* 4 módulos chip */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
              <ModuleChip label="ERP" />
              <ModuleChip label="CRM" />
              <ModuleChip label="CHECKLIST" />
              <ModuleChip label="META ADS" />
            </div>
          </div>

          {/* Coluna direita — hero image */}
          <div className="lg:col-span-5 relative">
            {/* Glow background */}
            <div className="absolute inset-0 -m-8 opacity-60"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(34, 211, 238, .25), transparent 70%)',
                filter: 'blur(40px)',
                pointerEvents: 'none',
              }}
            />

            {/* Imagem hero — Felipe precisa salvar em /public/images/hero-vertical.jpg */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-vertical.jpg"
              alt="Gestão Smart — plataforma com IA"
              className="relative w-full max-w-md mx-auto rounded-2xl"
              style={{
                boxShadow: '0 24px 80px rgba(34, 211, 238, .15), 0 0 0 1px rgba(34, 211, 238, .1)',
                aspectRatio: '9/16',
                objectFit: 'cover',
                background: 'linear-gradient(180deg, var(--surface) 0%, var(--bg) 100%)',
              }}
            />

            {/* Stats flutuantes */}
            <div className="absolute -bottom-4 -left-4 hidden md:flex items-center gap-2 card-glow"
              style={{ padding: '0.625rem 0.875rem' }}>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{ background: 'var(--accent-soft)' }}>
                <BarChart3 className="h-4 w-4" style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--muted)' }}>Performance</p>
                <p className="text-base font-bold" style={{ color: 'var(--accent)' }}>98.7%</p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 hidden md:flex items-center gap-2 card-glow"
              style={{ padding: '0.625rem 0.875rem' }}>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{ background: 'var(--accent-yellow-soft)' }}>
                <Cpu className="h-4 w-4" style={{ color: 'var(--accent-yellow)' }} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--muted)' }}>IA Integrada</p>
                <p className="text-xs font-semibold" style={{ color: 'var(--text)' }}>4 modelos</p>
              </div>
            </div>
          </div>

        </div>

        {/* Logos / parceiros */}
        <div className="mt-20 pt-10 border-t" style={{ borderColor: 'var(--border)' }}>
          <p className="text-center text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
            Integrado com as ferramentas que você já usa
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <PartnerLogo>Asaas</PartnerLogo>
            <PartnerLogo>WhatsApp</PartnerLogo>
            <PartnerLogo>Meta Ads</PartnerLogo>
            <PartnerLogo>Mercado Livre</PartnerLogo>
            <PartnerLogo>Instagram</PartnerLogo>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustItem({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <ShieldCheck className="h-4 w-4" style={{ color: 'var(--accent)' }} />
      {children}
    </span>
  )
}

function ModuleChip({ label }: { label: string }) {
  return (
    <div
      className="flex items-center justify-center rounded-xl px-3 py-2.5 text-xs font-bold tracking-wide transition-all hover:scale-105"
      style={{
        background: 'rgba(34, 211, 238, .06)',
        border: '1px solid rgba(34, 211, 238, .25)',
        color: 'var(--accent)',
      }}
    >
      {label}
    </div>
  )
}

function PartnerLogo({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-base font-semibold transition-opacity hover:opacity-100"
      style={{ color: 'var(--muted-2)' }}>
      {children}
    </span>
  )
}
