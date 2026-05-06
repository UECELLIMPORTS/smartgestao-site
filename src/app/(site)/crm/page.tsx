import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft, ArrowRight, MessageCircle, Inbox, Kanban, Tag,
  Calendar, Image as ImageIcon, Users, Mic, Sparkles, ShieldCheck,
} from 'lucide-react'
import { whatsappLink, BRAND } from '@/lib/contact'
import { PricingCRM } from '@/components/pricing-crm'

export const metadata: Metadata = {
  title: 'CRM — Inbox WhatsApp + Pipeline de Vendas | Gestão Smart',
  description: 'Centralize WhatsApp, organize leads em kanban e dispare mensagens em massa do seu próprio número. Sem API oficial cara, sem chip novo.',
}

const FEATURES = [
  {
    icon: Inbox,
    title: 'Inbox WhatsApp unificado',
    desc: 'Todas as conversas dos clientes num lugar só. Sai do seu próprio número de WhatsApp — sem chip novo, sem API oficial cara.',
  },
  {
    icon: Kanban,
    title: 'Pipeline kanban arrastável',
    desc: 'Arraste leads entre estágios (Novo → Qualificado → Proposta → Fechado). Visão clara do funil em tempo real, com valores agregados por etapa.',
  },
  {
    icon: Tag,
    title: 'Etiquetas coloridas',
    desc: 'Crie etiquetas (VIP, Cliente Recorrente, Aguardando Proposta) e filtre conversas/leads pra atender em ondas. Múltiplas etiquetas por contato.',
  },
  {
    icon: Calendar,
    title: 'Mensagens programadas',
    desc: 'Agende disparos pra um lead, todos com uma etiqueta, ou todos os contatos. Texto, imagem, vídeo, áudio ou PDF — com progresso ao vivo.',
  },
  {
    icon: ImageIcon,
    title: 'Status WhatsApp pelo CRM',
    desc: 'Posta status (texto, imagem ou vídeo) direto do CRM, com agendamento. Comentários nos seus status caem no Inbox com referência ao status original.',
  },
  {
    icon: Mic,
    title: 'Áudio + mídia inline',
    desc: 'Grava áudio direto no chat (igual WhatsApp Web), envia foto/vídeo, e baixa qualquer mídia recebida pra ouvir/ver dentro do CRM.',
  },
  {
    icon: Users,
    title: 'Welcome message automática',
    desc: 'Resposta automática pra leads novos pedindo pra te salvarem na agenda — só assim eles recebem seus status.',
  },
  {
    icon: Sparkles,
    title: 'Quick replies salvas',
    desc: 'Salva respostas frequentes ("Bom dia! Como posso ajudar?", "Segue nosso pix:") e dispara com 2 cliques no Inbox.',
  },
  {
    icon: ShieldCheck,
    title: 'Multi-funcionário com permissão',
    desc: 'Vendedores veem só conversas atribuídas a eles. Owner vê tudo. Permissão fina por módulo (Inbox/Pipeline/Programadas/etc).',
  },
]

export default function CRMPage() {
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
              <div className="chip mb-6">
                <MessageCircle className="h-3.5 w-3.5" />
                CRM com WhatsApp embutido
              </div>

              <h1 className="display-1 max-w-3xl" style={{ color: 'var(--text)' }}>
                Atendimento.<br />
                <span style={{
                  background: 'linear-gradient(135deg, var(--accent) 0%, var(--primary) 60%, var(--primary-hover) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Que vira venda.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed" style={{ color: 'var(--text-2)' }}>
                Inbox unificado de WhatsApp, pipeline kanban, mensagens programadas
                e status pelo seu próprio número. <strong style={{ color: 'var(--accent)' }}>
                Sem API oficial cara, sem chip novo.</strong>
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="#planos" className="btn-primary">
                  Ver planos <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={whatsappLink('Oi! Tenho interesse no CRM. Pode me passar mais detalhes?')}
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
                  Seu próprio número
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

            {/* Coluna direita — founder */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 -m-8 opacity-60"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(34, 211, 238, .25), transparent 70%)',
                  filter: 'blur(40px)',
                  pointerEvents: 'none',
                }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/founder.jpg"
                alt="Felipe — Fundador da Gestão Smart"
                className="relative w-full max-w-sm mx-auto rounded-2xl"
                style={{
                  boxShadow: '0 24px 80px rgba(34, 211, 238, .15), 0 0 0 1px rgba(34, 211, 238, .15)',
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                }}
              />

              {/* Stat flutuante */}
              <div className="absolute -bottom-4 -left-4 hidden md:flex items-center gap-2 card-glow"
                style={{ padding: '0.625rem 0.875rem' }}>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{ background: 'var(--accent-soft)' }}>
                  <MessageCircle className="h-4 w-4" style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--muted)' }}>Inbox</p>
                  <p className="text-base font-bold" style={{ color: 'var(--accent)' }}>WhatsApp</p>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 hidden md:flex items-center gap-2 card-glow"
                style={{ padding: '0.625rem 0.875rem' }}>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{ background: 'rgba(34, 197, 94, .15)' }}>
                  <Kanban className="h-4 w-4" style={{ color: '#22C55E' }} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--muted)' }}>Pipeline</p>
                  <p className="text-xs font-semibold" style={{ color: 'var(--text)' }}>Kanban</p>
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
            <div className="chip mb-4">9 features</div>
            <h2 className="display-2" style={{ color: 'var(--text)' }}>
              O que você ganha{' '}
              <span style={{
                background: 'linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                com o CRM Smart.
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
                    style={{ background: 'var(--accent-soft)', borderColor: 'rgba(34, 211, 238, .3)' }}>
                    <Icon className="h-5 w-5" style={{ color: 'var(--accent)' }} />
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
      <PricingCRM />

      {/* CTA final */}
      <section className="py-20 lg:py-24" style={{ background: 'var(--bg)' }}>
        <div className="container-x">
          <div className="rounded-3xl border p-10 lg:p-14 text-center card-glow"
            style={{ borderColor: 'rgba(34, 211, 238, .35)' }}>
            <h2 className="display-2" style={{ color: 'var(--text)' }}>
              Pronto pra centralizar{' '}
              <span style={{
                background: 'linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                seu atendimento?
              </span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>
              Falamos com você em até 1 hora pra entender seu volume de conversas e propor o plano certo.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`${BRAND.appUrl}/signup?product=crm`} className="btn-primary">
                Começar grátis 7 dias <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={whatsappLink('Oi! Quero contratar o CRM. Pode me passar valores?')}
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
