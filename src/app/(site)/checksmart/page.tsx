import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Wrench, ShieldCheck, FileSignature, Smartphone, Package, ClipboardList } from 'lucide-react'
import { whatsappLink } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'CheckSmart — Sistema pra Assistência Técnica de Celular',
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
    desc: 'Cada peça lançada na OS tem custo, preço de venda, fornecedor. Lucro calculado automaticamente.',
  },
  {
    icon: Smartphone,
    title: 'Catálogo de marcas/modelos pronto',
    desc: 'Seed com as principais marcas de celular do Brasil. Você adiciona o aparelho em segundos.',
  },
  {
    icon: Wrench,
    title: 'Sincroniza com Gestão Smart',
    desc: 'OS finalizada vira receita automaticamente no Financeiro do Gestão Smart, com canal de venda e cliente unificados.',
  },
]

export default function CheckSmartPage() {
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
            <Wrench className="h-3.5 w-3.5" /> Sistema específico pra assistência técnica
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight max-w-4xl">
            CheckSmart.<br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #FFB800, #FF8C00)' }}>
              A OS digital que blinda você.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: '#8AA8C8' }}>
            Pra assistência técnica de celular que cansou de cliente reclamando que o aparelho saiu pior do que entrou.
            Checklist com escudo jurídico, PDF com assinatura e integração com seu ERP.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappLink('Oi! Tenho interesse no CheckSmart pra minha assistência técnica.')}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #FFB800, #FF8C00)', color: '#080C14' }}
            >
              Falar com vendas <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-bold transition-colors hover:bg-white/5"
              style={{ borderColor: '#1E2D45', color: '#E8F0FE' }}
            >
              Agendar demonstração
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Por que assistências técnicas<br />
              <span style={{ color: '#8AA8C8' }}>escolhem o CheckSmart.</span>
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

      {/* CTA final */}
      <section className="py-20 lg:py-24">
        <div className="container-x">
          <div className="rounded-3xl border p-10 lg:p-14 text-center"
            style={{ background: '#0D1320', borderColor: 'rgba(255,184,0,.4)' }}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Pronto pra digitalizar sua assistência técnica?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base" style={{ color: '#8AA8C8' }}>
              Falamos com você em até 1 hora pra entender seu volume de OSs e propor o plano certo.
            </p>
            <a
              href={whatsappLink('Oi! Quero contratar o CheckSmart pra minha assistência. Pode me passar valores?')}
              target="_blank" rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #FFB800, #FF8C00)', color: '#080C14' }}
            >
              Quero contratar o CheckSmart <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
