import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { whatsappLink, BRAND } from '@/lib/contact'

export function Hero() {
  return (
    <section className="mesh-bg overflow-hidden">
      <div className="container-x relative pt-20 pb-24 lg:pt-28 lg:pb-32">

        {/* Eyebrow / badge sutil */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border bg-white px-3.5 py-1.5 text-xs font-semibold"
          style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}>
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--success)' }} />
          Em produção · 7 dias grátis · sem cartão de crédito
        </div>

        {/* Headline */}
        <h1 className="display-1 max-w-4xl"
          style={{ color: 'var(--text)' }}>
          ERP completo pra sua loja{' '}
          <span style={{ color: 'var(--primary)' }}>
            vender mais
          </span>{' '}
          e gastar menos tempo.
        </h1>

        {/* Subhead */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed"
          style={{ color: 'var(--text-2)' }}>
          Frente de caixa, controle de estoque, financeiro, CRM e Meta Ads em um só painel.
          Saiba qual canal de venda traz mais lucro, quais clientes estão sumindo e
          onde sua margem está vazando — tudo com dados reais, não achismo.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <a
            href={`${BRAND.appUrl}/signup`}
            className="btn-primary"
          >
            Começar grátis 7 dias <ArrowRight className="h-4 w-4" />
          </a>
          <Link href="/demo" className="btn-secondary">
            Agendar demonstração
          </Link>
        </div>

        {/* Trust strip */}
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm"
          style={{ color: 'var(--muted)' }}>
          <TrustItem>Sem fidelidade</TrustItem>
          <TrustItem>Cancele quando quiser</TrustItem>
          <TrustItem>Suporte por WhatsApp</TrustItem>
          <TrustItem>Setup em até 24h</TrustItem>
        </div>

        {/* Logos / parceiros — preencher quando tiver clientes referência */}
        <div className="mt-20 pt-10 border-t" style={{ borderColor: 'var(--border)' }}>
          <p className="text-center text-xs font-bold uppercase tracking-widest"
            style={{ color: 'var(--muted-2)' }}>
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
      <ShieldCheck className="h-4 w-4" style={{ color: 'var(--success)' }} />
      {children}
    </span>
  )
}

function PartnerLogo({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-base font-semibold opacity-50 hover:opacity-80 transition-opacity"
      style={{ color: 'var(--muted)' }}>
      {children}
    </span>
  )
}
