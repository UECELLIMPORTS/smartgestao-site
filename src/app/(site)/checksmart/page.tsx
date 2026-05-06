import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, Wrench, ShieldCheck, FileSignature,
  Smartphone, Package, ClipboardList, MessageCircle, Cake,
} from 'lucide-react'
import { whatsappLink, BRAND } from '@/lib/contact'
import { PricingCheckSmart } from '@/components/pricing-checksmart'

export const metadata: Metadata = {
  title: 'CheckSmart — Sistema pra Assistência Técnica de Celular | Gestão Smart',
  description: 'Ordens de serviço com checklist juridicamente blindado, PDF assinado pelo cliente e controle de peças. Pra quem leva sério.',
}

const FEATURES = [
  {
    icon: ClipboardList,
    title: 'OS multi-aparelho',
    desc: 'Cliente trouxe 3 celulares? 1 ordem de serviço, 3 aparelhos, cada um com checklist próprio.',
  },
  {
    icon: ShieldCheck,
    title: 'Escudo jurídico em aparelho apagado',
    desc: 'Aparelho que não liga? Sistema bloqueia checklist com "Não Testado" e gera adendo automático no PDF — você não atesta o que não pode verificar.',
  },
  {
    icon: FileSignature,
    title: 'PDF com assinatura do cliente',
    desc: 'Geração automática do termo de entrada com checklist completo, condição física do aparelho e assinatura digital do cliente.',
  },
  {
    icon: Package,
    title: 'Controle de peças com custo',
    desc: 'Cada peça lançada na OS tem custo, preço de venda, fornecedor. Lucro calculado automaticamente em tempo real.',
  },
  {
    icon: Smartphone,
    title: 'Catálogo de marcas/modelos pronto',
    desc: 'Seed com as principais marcas de celular do Brasil. Você adiciona o aparelho em segundos.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp pós-OS automático',
    desc: 'Marcou OS como entregue? Em X minutos o cliente recebe um WhatsApp da sua loja perguntando se está tudo OK. Texto editável.',
  },
  {
    icon: Cake,
    title: 'Aniversário + Win-back',
    desc: 'Mensagem automática no aniversário do cliente, e win-back pra quem não traz aparelho há X dias com cupom.',
  },
  {
    icon: Wrench,
    title: 'Sincroniza com Gestão Smart',
    desc: 'OS finalizada vira receita automaticamente no Financeiro do Gestão Smart, com canal de venda e cliente unificados.',
  },
  {
    icon: ShieldCheck,
    title: 'Multi-funcionário com permissão',
    desc: 'Técnicos veem só OSs atribuídas. Owner vê tudo. Permissão fina por módulo (Ordens/Clientes/Financeiro/Relatórios).',
  },
]

export default function CheckSmartPage() {
  return (
    <>
      {/* Hero — 2 colunas com imagem */}
      <section className="hero-dark border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="container-x relative pt-12 pb-20 lg:pt-16 lg:pb-24">

          <Link href="/" className="inline-flex items-center gap-1.5 text-xs hover:underline mb-6"
            style={{ color: 'var(--muted)' }}>
            <ArrowLeft className="h-3.5 w-3.5" /> Voltar pra Gestão Smart
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Coluna esquerda — copy */}
            <div className="lg:col-span-7">
              <div className="chip-yellow mb-6">
                <Wrench className="h-3.5 w-3.5" />
                Sistema específico pra assistência técnica
              </div>

              <h1 className="display-1 max-w-3xl" style={{ color: 'var(--text)' }}>
                CheckSmart.<br />
                <span style={{
                  background: 'linear-gradient(135deg, var(--accent) 0%, var(--primary) 60%, var(--primary-hover) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  A OS digital que te blinda.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed" style={{ color: 'var(--text-2)' }}>
                Pra assistência técnica de celular que cansou de cliente reclamando que
                o aparelho saiu pior do que entrou. <strong style={{ color: 'var(--accent-yellow)' }}>
                Checklist com escudo jurídico</strong>, PDF com assinatura e integração com seu ERP.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="#planos" className="btn-primary">
                  Ver planos <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={whatsappLink('Oi! Tenho interesse no CheckSmart pra minha assistência técnica.')}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Falar com vendas
                </a>
              </div>

              {/* Trust strip */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm"
                style={{ color: 'var(--muted)' }}>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4" style={{ color: 'var(--accent)' }} />
                  Termo assinado digital
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4" style={{ color: 'var(--accent)' }} />
                  Sem fidelidade
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4" style={{ color: 'var(--accent)' }} />
                  Setup em 24h
                </span>
              </div>
            </div>

            {/* Coluna direita — Felipe segurando módulos */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 -m-8 opacity-60"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(250, 204, 21, .2), transparent 70%)',
                  filter: 'blur(40px)',
                  pointerEvents: 'none',
                }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/founder-modules.jpg"
                alt="Sistema CheckSmart com 4 módulos integrados"
                className="relative w-full max-w-sm mx-auto rounded-2xl"
                style={{
                  boxShadow: '0 24px 80px rgba(250, 204, 21, .15), 0 0 0 1px rgba(250, 204, 21, .15)',
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                }}
              />

              {/* Stats flutuantes */}
              <div className="absolute -bottom-4 -left-4 hidden md:flex items-center gap-2 card-glow"
                style={{ padding: '0.625rem 0.875rem', borderColor: 'rgba(250, 204, 21, .3)' }}>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{ background: 'var(--accent-yellow-soft)' }}>
                  <FileSignature className="h-4 w-4" style={{ color: 'var(--accent-yellow)' }} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--muted)' }}>PDF</p>
                  <p className="text-base font-bold" style={{ color: 'var(--accent-yellow)' }}>Assinado</p>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 hidden md:flex items-center gap-2 card-glow"
                style={{ padding: '0.625rem 0.875rem', borderColor: 'rgba(250, 204, 21, .3)' }}>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{ background: 'var(--accent-yellow-soft)' }}>
                  <ShieldCheck className="h-4 w-4" style={{ color: 'var(--accent-yellow)' }} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--muted)' }}>Escudo</p>
                  <p className="text-xs font-semibold" style={{ color: 'var(--text)' }}>Jurídico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20 lg:py-28" style={{ background: 'var(--surface)' }}>
        <div className="container-x">
          <div className="max-w-2xl">
            <div className="chip-yellow mb-4">9 features</div>
            <h2 className="display-2" style={{ color: 'var(--text)' }}>
              Por que assistências técnicas{' '}
              <span style={{
                background: 'linear-gradient(135deg, var(--accent-yellow) 0%, var(--accent) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                escolhem CheckSmart.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(f => {
              const Icon = f.icon
              return (
                <article key={f.title} className="rounded-2xl border p-6 transition-all hover:scale-[1.02]"
                  style={{ background: 'var(--surface-2)', borderColor: 'var(--border)' }}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border mb-4"
                    style={{ background: 'var(--accent-yellow-soft)', borderColor: 'rgba(250, 204, 21, .3)' }}>
                    <Icon className="h-5 w-5" style={{ color: 'var(--accent-yellow)' }} />
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: 'var(--text)' }}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{f.desc}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingCheckSmart />

      {/* CTA final */}
      <section className="py-20 lg:py-24" style={{ background: 'var(--bg)' }}>
        <div className="container-x">
          <div className="rounded-3xl border p-10 lg:p-14 text-center card-glow"
            style={{ borderColor: 'rgba(250, 204, 21, .4)' }}>
            <h2 className="display-2" style={{ color: 'var(--text)' }}>
              Pronto pra digitalizar{' '}
              <span style={{
                background: 'linear-gradient(135deg, var(--accent-yellow) 0%, var(--accent) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                sua assistência?
              </span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>
              Falamos com você em até 1 hora pra entender seu volume de OSs e propor o plano certo.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`${BRAND.appUrl}/signup?product=checksmart`} className="btn-primary">
                Começar grátis 7 dias <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={whatsappLink('Oi! Quero contratar o CheckSmart pra minha assistência. Pode me passar valores?')}
                target="_blank" rel="noopener noreferrer"
                className="btn-secondary"
              >
                Falar com vendas
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
