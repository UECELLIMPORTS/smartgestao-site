import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, MessageCircle, Inbox, Kanban, Tag, Calendar, Image, Users } from 'lucide-react'
import { whatsappLink } from '@/lib/contact'
import { PricingCRM } from '@/components/pricing-crm'

export const metadata: Metadata = {
  title: 'CRM — Inbox WhatsApp + Pipeline de Vendas',
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
    title: 'Pipeline kanban',
    desc: 'Arraste leads entre estágios (Novo → Qualificado → Proposta → Fechado). Visão clara do funil em tempo real.',
  },
  {
    icon: Tag,
    title: 'Etiquetas pra segmentar',
    desc: 'Crie etiquetas (VIP, Cliente Recorrente, Aguardando Proposta) e filtre conversas/leads pra atender em ondas.',
  },
  {
    icon: Calendar,
    title: 'Mensagens programadas',
    desc: 'Agende mensagens pra um lead, pra todos com uma etiqueta, ou pra todos os contatos. Texto, imagem, vídeo, áudio ou PDF.',
  },
  {
    icon: Image,
    title: 'Status WhatsApp pelo CRM',
    desc: 'Posta status (texto, imagem ou vídeo) direto do CRM, com agendamento. Comentários nos status caem no Inbox com a referência do status original.',
  },
  {
    icon: Users,
    title: 'Welcome message automática',
    desc: 'Resposta automática pra leads novos pedindo pra te salvarem na agenda — só assim eles recebem seus status.',
  },
]

export default function CRMPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b" style={{ borderColor: '#1E2D45' }}>
        <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #FFB800, transparent)' }} />

        <div className="container-x relative pt-12 pb-20 lg:pt-16 lg:pb-24">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs hover:underline mb-6" style={{ color: '#8AA8C8' }}>
            <ArrowLeft className="h-3.5 w-3.5" /> Voltar pra Gestão Inteligente
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold mb-6"
            style={{ background: 'rgba(255,184,0,.06)', borderColor: 'rgba(255,184,0,.4)', color: '#FFB800' }}>
            <MessageCircle className="h-3.5 w-3.5" /> CRM com WhatsApp embutido
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight max-w-4xl">
            CRM.<br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #FFB800, #FF8C00)' }}>
              Atendimento que vira venda.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: '#8AA8C8' }}>
            Inbox unificado de WhatsApp, pipeline kanban, mensagens programadas
            por etiqueta e status pelo seu próprio número. Sai do seu chip
            atual, sem API oficial cara.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappLink('Oi! Tenho interesse no CRM. Pode me passar mais detalhes?')}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #FFB800, #FF8C00)', color: '#080C14' }}
            >
              Falar com vendas <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="#planos"
              className="inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-bold transition-colors hover:bg-white/5"
              style={{ borderColor: '#1E2D45', color: '#E8F0FE' }}
            >
              Ver planos
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              O que você ganha<br />
              <span style={{ color: '#8AA8C8' }}>com o CRM Gestão Smart.</span>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(f => {
              const Icon = f.icon
              return (
                <article key={f.title} className="rounded-2xl border p-6"
                  style={{ background: '#0D1320', borderColor: '#1E2D45' }}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border mb-4"
                    style={{ background: 'rgba(255,184,0,.1)', borderColor: 'rgba(255,184,0,.3)' }}>
                    <Icon className="h-5 w-5" style={{ color: '#FFB800' }} />
                  </div>
                  <h3 className="text-base font-bold mb-2">{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#8AA8C8' }}>{f.desc}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingCRM />

      {/* CTA final */}
      <section className="py-20 lg:py-24">
        <div className="container-x">
          <div className="rounded-3xl border p-10 lg:p-14 text-center"
            style={{ background: '#0D1320', borderColor: 'rgba(255,184,0,.4)' }}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Pronto pra centralizar seu atendimento?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base" style={{ color: '#8AA8C8' }}>
              Falamos com você em até 1 hora pra entender seu volume de conversas e propor o plano certo.
            </p>
            <a
              href={whatsappLink('Oi! Quero contratar o CRM. Pode me passar valores?')}
              target="_blank" rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #FFB800, #FF8C00)', color: '#080C14' }}
            >
              Quero contratar o CRM <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
