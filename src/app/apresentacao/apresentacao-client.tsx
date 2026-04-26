'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import {
  ChevronLeft, ChevronRight, X, Maximize2, Minimize2,
  TrendingUp, Target, AlertTriangle, BarChart3, Zap, Store, Users, Wrench,
  Check, ShieldCheck, Sparkles, MessageCircle, ArrowRight, Smartphone,
} from 'lucide-react'
import { whatsappLink, BRAND, PLANOS } from '@/lib/contact'

const BRL = (v: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 }).format(v)

/** URL pra QR code via API pública (sem dependência de lib). */
function qrUrl(data: string, size = 360): string {
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&margin=10&bgcolor=0D1320&color=00E5FF&data=${encodeURIComponent(data)}`
}

const TOTAL_SLIDES = 13

export function Apresentacao() {
  const [slide, setSlide] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)

  const next = useCallback(() => setSlide(s => Math.min(s + 1, TOTAL_SLIDES - 1)), [])
  const prev = useCallback(() => setSlide(s => Math.max(s - 1, 0)), [])

  // Atalhos de teclado: ← → setas, Space avança, Home/End ir pro início/fim
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') { e.preventDefault(); next() }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp')                { e.preventDefault(); prev() }
      else if (e.key === 'Home')                                            { setSlide(0) }
      else if (e.key === 'End')                                             { setSlide(TOTAL_SLIDES - 1) }
      else if (e.key === 'f' || e.key === 'F')                              { toggleFullscreen() }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev])

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setFullscreen(true)
    } else {
      document.exitFullscreen()
      setFullscreen(false)
    }
  }

  // Sincroniza estado com saída de fullscreen pelo ESC
  useEffect(() => {
    const onChange = () => setFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [])

  return (
    <div className="fixed inset-0 flex flex-col" style={{ background: '#080C14' }}>
      {/* Slide content — fullscreen, vertical center */}
      <div className="flex-1 flex items-center justify-center overflow-y-auto">
        <SlideContent index={slide} />
      </div>

      {/* Controles fixos no rodapé */}
      <div className="border-t flex items-center justify-between px-4 sm:px-6 py-3"
        style={{ borderColor: '#1E2D45', background: 'rgba(13,19,32,.95)', backdropFilter: 'blur(8px)' }}>
        <div className="flex items-center gap-2">
          <Link href="/"
            className="flex h-9 w-9 items-center justify-center rounded-lg border hover:bg-white/5 transition-colors"
            style={{ borderColor: '#1E2D45', color: '#8AA8C8' }}
            title="Sair da apresentação">
            <X className="h-4 w-4" />
          </Link>
          <button onClick={toggleFullscreen}
            className="hidden sm:flex h-9 w-9 items-center justify-center rounded-lg border hover:bg-white/5 transition-colors"
            style={{ borderColor: '#1E2D45', color: '#8AA8C8' }}
            title={fullscreen ? 'Sair de tela cheia (F)' : 'Tela cheia (F)'}>
            {fullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        </div>

        {/* Indicador de slide */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono tabular-nums" style={{ color: '#5A7A9A' }}>
            {slide + 1} / {TOTAL_SLIDES}
          </span>
          <div className="hidden sm:flex items-center gap-1">
            {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: i === slide ? '24px' : '8px',
                  background: i === slide ? '#00E5FF' : '#1E2D45',
                }}
                aria-label={`Ir pro slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={prev} disabled={slide === 0}
            className="flex h-9 w-9 items-center justify-center rounded-lg border hover:bg-white/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ borderColor: '#1E2D45', color: '#E8F0FE' }}
            title="Slide anterior (←)">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={next} disabled={slide === TOTAL_SLIDES - 1}
            className="flex h-9 items-center gap-2 rounded-lg px-4 text-sm font-bold transition-opacity hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ background: '#00E5FF', color: '#080C14' }}
            title="Próximo slide (→)">
            Próximo <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Slides ───────────────────────────────────────────────────────────────────

function SlideContent({ index }: { index: number }) {
  switch (index) {
    case 0:  return <Slide1Hook />
    case 1:  return <Slide2Pergunta />
    case 2:  return <Slide3Problemas />
    case 3:  return <Slide4Solucao />
    case 4:  return <Slide5BreakEven />
    case 5:  return <Slide6OrigemCanal />
    case 6:  return <Slide7DiagnosticoLucro />
    case 7:  return <Slide8DemoAoVivo />
    case 8:  return <Slide9ProvaSocial />
    case 9:  return <Slide10Planos />
    case 10: return <Slide11OfertaEspecial />
    case 11: return <Slide12ComoComecar />
    case 12: return <Slide13Obrigado />
    default: return null
  }
}

// ── 1. Hook: "Quer vender mais?" ─────────────────────────────────────────────
function Slide1Hook() {
  return (
    <SlideShell>
      <div className="text-center max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.3em] mb-8" style={{ color: '#00E5FF' }}>
          Antes de tudo, uma pergunta
        </p>
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
          Quer vender<br />
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #00E5FF, #00FF94)' }}>
            muito mais?
          </span>
        </h1>
        <p className="mt-10 text-xl sm:text-2xl" style={{ color: '#8AA8C8' }}>
          Então preste atenção nos próximos 15 minutos.
        </p>
      </div>
    </SlideShell>
  )
}

// ── 2. "Mas você sabe o que tá te impedindo?" ────────────────────────────────
function Slide2Pergunta() {
  return (
    <SlideShell>
      <div className="max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-[0.3em] mb-6" style={{ color: '#FFAA00' }}>
          A pergunta difícil
        </p>
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
          Mas você sabe<br />
          <span style={{ color: '#FFAA00' }}>o que está te impedindo?</span>
        </h2>
        <p className="mt-10 text-xl" style={{ color: '#8AA8C8' }}>
          A maioria dos empresários não sabe — e por isso continua trabalhando 12 horas por dia
          sem ver o lucro crescer na mesma proporção.
        </p>
        <p className="mt-6 text-2xl font-semibold" style={{ color: '#E8F0FE' }}>
          O problema não é falta de venda.<br />
          <span style={{ color: '#00E5FF' }}>É falta de informação.</span>
        </p>
      </div>
    </SlideShell>
  )
}

// ── 3. Os 4 problemas reais ──────────────────────────────────────────────────
function Slide3Problemas() {
  const PROBLEMAS = [
    { icon: TrendingUp, color: '#FF4D6D', text: 'Você não sabe se a loja física se paga sozinha ou só vive do online.' },
    { icon: Target,     color: '#FFAA00', text: 'Você gasta em anúncio mas não sabe qual deles realmente traz cliente que compra.' },
    { icon: AlertTriangle, color: '#9B6DFF', text: 'Clientes recorrentes somem do nada. Você só percebe quando o caixa cai.' },
    { icon: BarChart3,  color: '#00FF94', text: 'Seus relatórios mostram "lucro alto" — mas você não confia nos números.' },
  ]
  return (
    <SlideShell>
      <div className="max-w-5xl w-full">
        <p className="text-sm font-bold uppercase tracking-[0.3em] mb-6 text-center" style={{ color: '#FF4D6D' }}>
          As 4 dores que escutamos todo dia
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center leading-tight">
          Reconhece alguma destas?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROBLEMAS.map((p, i) => {
            const Icon = p.icon
            return (
              <div key={i} className="flex items-start gap-4 rounded-2xl border p-6"
                style={{ background: '#0D1320', borderColor: '#1E2D45' }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl shrink-0 border"
                  style={{ background: `${p.color}15`, borderColor: `${p.color}40` }}>
                  <Icon className="h-6 w-6" style={{ color: p.color }} />
                </div>
                <p className="text-lg leading-snug" style={{ color: '#E8F0FE' }}>{p.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </SlideShell>
  )
}

// ── 4. A solução: 4 sistemas em 1 ────────────────────────────────────────────
function Slide4Solucao() {
  const SISTEMAS = [
    { icon: Store,      name: 'Gestão Smart', color: '#00E5FF', desc: 'ERP completo: vendas, estoque, financeiro, dashboards' },
    { icon: Users,      name: 'CRM',          color: '#00FF94', desc: 'Acompanhe cada cliente, recupere quem está sumindo' },
    { icon: TrendingUp, name: 'Meta Ads',     color: '#E4405F', desc: 'ROAS e CAC integrados ao seu ERP' },
    { icon: Wrench,     name: 'CheckSmart',   color: '#FFB800', desc: 'OS pra assistência técnica com escudo jurídico' },
  ]
  return (
    <SlideShell>
      <div className="max-w-6xl w-full text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] mb-6" style={{ color: '#00E5FF' }}>
          A nossa resposta
        </p>
        <h2 className="text-5xl sm:text-6xl font-bold mb-4 leading-tight">
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #00E5FF, #00FF94)' }}>
            Gestão Inteligente
          </span>
        </h2>
        <p className="text-2xl font-semibold mb-12" style={{ color: '#8AA8C8' }}>
          4 sistemas em 1. Conectados. Em tempo real.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {SISTEMAS.map(s => {
            const Icon = s.icon
            return (
              <div key={s.name} className="rounded-2xl border p-6"
                style={{ background: '#0D1320', borderColor: '#1E2D45' }}>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl border"
                  style={{ background: `${s.color}15`, borderColor: `${s.color}40` }}>
                  <Icon className="h-7 w-7" style={{ color: s.color }} />
                </div>
                <h3 className="text-xl font-bold mb-2">{s.name}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#8AA8C8' }}>{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </SlideShell>
  )
}

// ── 5. Diferencial: Break-even ───────────────────────────────────────────────
function Slide5BreakEven() {
  return (
    <SlideShell>
      <div className="max-w-5xl w-full">
        <p className="text-sm font-bold uppercase tracking-[0.3em] mb-6" style={{ color: '#FF4D6D' }}>
          Diferencial #1
        </p>
        <h2 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
          &ldquo;A loja física<br />se paga sozinha?&rdquo;
        </h2>
        <p className="text-xl mb-10" style={{ color: '#8AA8C8' }}>
          Em 1 clique você descobre.
        </p>

        {/* Mock visual do módulo Break-even */}
        <div className="rounded-2xl border p-6 lg:p-8" style={{ background: '#0D1320', borderColor: '#1E2D45' }}>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <Stat label="Custo fixo / mês" value={BRL(2500)} color="#FFAA00" />
            <Stat label="Faturamento balcão" value={BRL(560)}  color="#E8F0FE" />
            <Stat label="Déficit"            value={`-${BRL(1940)}`} color="#FF4D6D" hi />
          </div>
          <div className="rounded-xl border p-5 flex items-start gap-3"
            style={{ background: 'rgba(255,77,109,.06)', borderColor: 'rgba(255,77,109,.3)' }}>
            <AlertTriangle className="h-6 w-6 shrink-0" style={{ color: '#FF4D6D' }} />
            <div>
              <p className="text-base font-bold" style={{ color: '#FF4D6D' }}>
                A loja física não cobre o próprio custo
              </p>
              <p className="text-sm mt-1" style={{ color: '#E8F0FE' }}>
                Mas o online tá sustentando: <strong style={{ color: '#00E5FF' }}>{BRL(8125)}</strong> de
                receita online cobre o déficit + sobra <strong style={{ color: '#00FF94' }}>{BRL(6185)}</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  )
}

// ── 6. Diferencial: Origem × Canal ───────────────────────────────────────────
function Slide6OrigemCanal() {
  return (
    <SlideShell>
      <div className="max-w-5xl w-full">
        <p className="text-sm font-bold uppercase tracking-[0.3em] mb-6" style={{ color: '#9B6DFF' }}>
          Diferencial #2
        </p>
        <h2 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
          &ldquo;Esse cliente veio<br />do Instagram pago?&rdquo;
        </h2>
        <p className="text-xl mb-10" style={{ color: '#8AA8C8' }}>
          Cruzamos origem × canal × campanha. CAC e ROAS reais.
        </p>

        {/* Mock visual */}
        <div className="rounded-2xl border p-6 lg:p-8" style={{ background: '#0D1320', borderColor: '#1E2D45' }}>
          <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: '#5A7A9A' }}>
            Origem dos clientes — últimos 30 dias
          </p>
          <div className="space-y-3">
            <Bar label="Indicação"          value={3390} pct={39} color="#00FF94" />
            <Bar label="Instagram pago"     value={2105} pct={24} color="#E4405F" />
            <Bar label="Passou na porta"    value={1170} pct={14} color="#FFAA00" />
            <Bar label="Outros"             value={2020} pct={23} color="#9B6DFF" />
          </div>
          <p className="mt-5 text-sm" style={{ color: '#8AA8C8' }}>
            <strong style={{ color: '#00FF94' }}>Indicação é seu canal mais forte</strong> — talvez vale ativar programa de cashback.
            <br />Instagram pago tem ROAS de <strong style={{ color: '#00E5FF' }}>3.2×</strong> e CAC de <strong style={{ color: '#00E5FF' }}>{BRL(38)}</strong>.
          </p>
        </div>
      </div>
    </SlideShell>
  )
}

// ── 7. Diferencial: Diagnóstico de Lucro ─────────────────────────────────────
function Slide7DiagnosticoLucro() {
  return (
    <SlideShell>
      <div className="max-w-5xl w-full">
        <p className="text-sm font-bold uppercase tracking-[0.3em] mb-6" style={{ color: '#00FF94' }}>
          Diferencial #3
        </p>
        <h2 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
          &ldquo;Por que meu lucro<br />parece bom demais?&rdquo;
        </h2>
        <p className="text-xl mb-10" style={{ color: '#8AA8C8' }}>
          Sistema detecta automaticamente vendas com custo faltando.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card title="Itens órfãos" value="9" sub="vendas sem produto vinculado" color="#FF4D6D" />
          <Card title="Match exato"  value="9" sub="prontos pra correção em 1 clique" color="#00FF94" />
          <Card title="Vendas com prejuízo" value="1" sub="custo cadastrado errado" color="#FFAA00" />
        </div>
        <p className="mt-8 text-base" style={{ color: '#8AA8C8' }}>
          Antes era preciso planilha. Agora o sistema acha sozinho — você corrige e o lucro volta a ser real.
        </p>
      </div>
    </SlideShell>
  )
}

// ── 8. DEMO AO VIVO ──────────────────────────────────────────────────────────
function Slide8DemoAoVivo() {
  return (
    <SlideShell>
      <div className="text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-widest mb-8"
          style={{ background: 'rgba(0,229,255,.06)', borderColor: '#00E5FF', color: '#00E5FF' }}>
          <Sparkles className="h-4 w-4" /> Hora da verdade
        </div>
        <h2 className="text-6xl sm:text-7xl font-bold leading-tight">
          Demo ao vivo<br />
          <span style={{ color: '#8AA8C8' }}>do sistema rodando</span>
        </h2>
        <p className="mt-10 text-xl" style={{ color: '#8AA8C8' }}>
          Vou abrir o sistema agora e mostrar com dados reais da UÉ Cell Imports.
        </p>
        <div className="mt-12 inline-flex items-center gap-3 rounded-2xl border px-6 py-4"
          style={{ background: '#0D1320', borderColor: '#00E5FF40' }}>
          <Smartphone className="h-5 w-5" style={{ color: '#00E5FF' }} />
          <span className="text-sm" style={{ color: '#E8F0FE' }}>
            Acompanhe nas próximas telas →
          </span>
        </div>
      </div>
    </SlideShell>
  )
}

// ── 9. Prova social UÉ Cell + citação Felipe Ferreira ────────────────────────
function Slide9ProvaSocial() {
  return (
    <SlideShell>
      <div className="max-w-5xl w-full">
        <p className="text-sm font-bold uppercase tracking-[0.3em] mb-6 text-center" style={{ color: '#00E5FF' }}>
          Não é vaporware
        </p>
        <h2 className="text-5xl sm:text-6xl font-bold mb-12 text-center leading-tight">
          Construído numa loja<br />
          <span style={{ color: '#8AA8C8' }}>com 12 mil clientes reais.</span>
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-10">
          <BigStat value="12K+"  label="Clientes ativos" color="#00E5FF" />
          <BigStat value="24/7"  label="Em produção"     color="#00FF94" />
          <BigStat value="1 loja" label="Validando todo dia" color="#FFAA00" />
        </div>

        <div className="rounded-2xl border p-8 lg:p-10 relative"
          style={{ background: 'linear-gradient(135deg, #0D1320, #0A0F1A)', borderColor: '#00E5FF40' }}>
          <span className="absolute top-2 left-6 text-7xl leading-none font-bold opacity-20" style={{ color: '#00E5FF' }}>&ldquo;</span>
          <blockquote className="relative">
            <p className="text-xl lg:text-2xl leading-relaxed" style={{ color: '#E8F0FE' }}>
              Construímos cada feature resolvendo uma dor real do balcão.
              Se funciona pra mim com 12 mil clientes, funciona pra você.
            </p>
            <footer className="mt-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full text-base font-bold shrink-0"
                style={{ background: 'linear-gradient(135deg, #00E5FF, #00FF94)', color: '#080C14' }}>
                FF
              </div>
              <div>
                <p className="text-base font-bold" style={{ color: '#E8F0FE' }}>Felipe Ferreira</p>
                <p className="text-sm" style={{ color: '#8AA8C8' }}>
                  Fundador · {BRAND.name} · UÉ Cell Imports
                </p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </SlideShell>
  )
}

// ── 10. Os 3 planos ──────────────────────────────────────────────────────────
function Slide10Planos() {
  return (
    <SlideShell>
      <div className="max-w-6xl w-full">
        <p className="text-sm font-bold uppercase tracking-[0.3em] mb-6 text-center" style={{ color: '#FFB800' }}>
          Investimento
        </p>
        <h2 className="text-5xl sm:text-6xl font-bold mb-12 text-center leading-tight">
          3 planos.<br />
          <span style={{ color: '#8AA8C8' }}>Cresça conforme o negócio pede.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(['basico', 'pro', 'premium'] as const).map(key => {
            const plan = PLANOS[key]
            const isPro = key === 'pro'
            return (
              <div key={key}
                className="rounded-2xl border p-6 flex flex-col"
                style={{
                  background: '#0D1320',
                  borderColor: isPro ? '#00E5FF' : '#1E2D45',
                  boxShadow: isPro ? '0 0 0 1px rgba(0,229,255,0.3)' : undefined,
                }}>
                {isPro && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                    style={{ background: '#00E5FF', color: '#080C14' }}>
                    <Sparkles className="h-3 w-3" /> Mais escolhido
                  </div>
                )}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-xs mt-1" style={{ color: '#8AA8C8' }}>{plan.description}</p>
                <p className="mt-4 text-4xl font-bold tabular-nums" style={{ color: '#E8F0FE' }}>
                  {BRL(plan.monthly)}<span className="text-sm font-normal" style={{ color: '#5A7A9A' }}>/mês</span>
                </p>
                <ul className="mt-5 space-y-1.5 text-sm flex-1">
                  {plan.features.slice(0, 5).map(f => (
                    <li key={f} className="flex items-start gap-2" style={{ color: '#E8F0FE' }}>
                      <Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#00FF94' }} />
                      <span className="text-xs">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </SlideShell>
  )
}

// ── 11. OFERTA ESPECIAL DA APRESENTAÇÃO + QR code ────────────────────────────
function Slide11OfertaEspecial() {
  const message =
    `Oi! Estou na apresentação da Gestão Inteligente AGORA e quero garantir a oferta especial:\n` +
    `Pagar Básico (R$ 97) e levar o Premium no 1º mês.\n\nMeu nome:`
  const wa = whatsappLink(message)

  return (
    <SlideShell>
      <div className="max-w-6xl w-full">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: 'rgba(255,184,0,.1)', borderColor: '#FFB800', color: '#FFB800' }}>
            <Sparkles className="h-4 w-4" /> Oferta exclusiva desta apresentação
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold leading-tight">
            Fechou hoje?<br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #FFB800, #FFAA00)' }}>
              Paga Básico, leva Premium.
            </span>
          </h2>
          <p className="mt-6 text-xl" style={{ color: '#8AA8C8' }}>
            No primeiro mês você investe só <strong style={{ color: '#FFB800' }}>R$ 97</strong> e
            usa o <strong style={{ color: '#00E5FF' }}>plano Premium completo</strong> (R$ 197).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Coluna esquerda: o que muda */}
          <div className="rounded-2xl border p-7"
            style={{ background: '#0D1320', borderColor: '#1E2D45' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#FFB800' }}>
              Você paga
            </p>
            <p className="text-5xl font-bold tabular-nums" style={{ color: '#FFB800' }}>R$ 97</p>
            <p className="text-sm mt-1" style={{ color: '#8AA8C8' }}>no 1º mês (valor do Básico)</p>

            <div className="my-5 h-px" style={{ background: '#1E2D45' }} />

            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#00FF94' }}>
              Mas você usa
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2" style={{ color: '#E8F0FE' }}>
                <Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#00FF94' }} />
                Tudo do Básico (POS, Estoque, Financeiro)
              </li>
              <li className="flex items-start gap-2" style={{ color: '#E8F0FE' }}>
                <Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#00FF94' }} />
                + Dashboards e Relatórios avançados
              </li>
              <li className="flex items-start gap-2" style={{ color: '#E8F0FE' }}>
                <Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#00FF94' }} />
                + Integração Meta Ads (ROAS, CAC)
              </li>
              <li className="flex items-start gap-2" style={{ color: '#E8F0FE' }}>
                <Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#00FF94' }} />
                + CRM completo
              </li>
            </ul>
            <p className="mt-5 text-sm font-semibold" style={{ color: '#00FF94' }}>
              Economia de R$ 100 no 1º mês.
            </p>
          </div>

          {/* Coluna direita: QR code */}
          <div className="rounded-2xl border p-7 flex flex-col items-center justify-center text-center"
            style={{ background: 'linear-gradient(135deg, #0D1320, #0A0F1A)', borderColor: '#FFB80060' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#FFB800' }}>
              Garanta agora
            </p>
            <div className="rounded-xl p-3 mb-4" style={{ background: '#0D1320', border: '1px solid #FFB80040' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={qrUrl(wa, 320)} alt="QR code WhatsApp" className="block" width={280} height={280} />
            </div>
            <p className="text-base font-semibold" style={{ color: '#E8F0FE' }}>
              Aponte a câmera do celular
            </p>
            <p className="text-sm mt-1" style={{ color: '#8AA8C8' }}>
              Abre o WhatsApp com a mensagem pronta
            </p>
            <a href={wa} target="_blank" rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ background: '#25D366', color: '#fff' }}>
              <MessageCircle className="h-4 w-4" />
              Ou clica aqui
            </a>
          </div>
        </div>
      </div>
    </SlideShell>
  )
}

// ── 12. Como começar (3 passos) ──────────────────────────────────────────────
function Slide12ComoComecar() {
  const passos = [
    { n: 1, title: 'WhatsApp', desc: 'Você fala comigo agora ou após a apresentação' },
    { n: 2, title: 'Setup em 24h', desc: 'Importamos seus produtos, clientes, configuramos tudo' },
    { n: 3, title: 'Treinamento', desc: 'Videoconferência incluída pra você e equipe' },
  ]
  return (
    <SlideShell>
      <div className="max-w-5xl w-full text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] mb-6" style={{ color: '#00E5FF' }}>
          Como começar
        </p>
        <h2 className="text-5xl sm:text-6xl font-bold mb-12 leading-tight">
          3 passos.<br />
          <span style={{ color: '#8AA8C8' }}>24 horas até estar usando.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {passos.map(p => (
            <div key={p.n} className="rounded-2xl border p-7"
              style={{ background: '#0D1320', borderColor: '#1E2D45' }}>
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-2xl font-bold"
                style={{ background: 'linear-gradient(135deg, #00E5FF, #00FF94)', color: '#080C14' }}>
                {p.n}
              </div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-sm" style={{ color: '#8AA8C8' }}>{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm" style={{ color: '#8AA8C8' }}>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4" style={{ color: '#00FF94' }} /> 7 dias de garantia
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4" style={{ color: '#00FF94' }} /> Sem fidelidade
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4" style={{ color: '#00FF94' }} /> Suporte WhatsApp
          </span>
        </div>
      </div>
    </SlideShell>
  )
}

// ── 13. Obrigado / Q&A ───────────────────────────────────────────────────────
function Slide13Obrigado() {
  const wa = whatsappLink('Oi Felipe! Acabei de ver a apresentação. Quero conversar sobre o sistema.')
  return (
    <SlideShell>
      <div className="max-w-4xl text-center">
        <h2 className="text-7xl sm:text-8xl font-bold leading-tight tracking-tight">
          Obrigado!
        </h2>
        <p className="mt-8 text-2xl" style={{ color: '#8AA8C8' }}>
          Agora é a sua vez.
        </p>
        <p className="mt-3 text-xl font-semibold" style={{ color: '#E8F0FE' }}>
          Pergunte, questione, vamos conversar.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="rounded-2xl border p-7 flex flex-col items-center text-center"
            style={{ background: '#0D1320', borderColor: '#1E2D45' }}>
            <Zap className="h-8 w-8 mb-3" style={{ color: '#00E5FF' }} />
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#00E5FF' }}>
              Falar agora
            </p>
            <a href={wa} target="_blank" rel="noopener noreferrer"
              className="text-2xl font-bold hover:underline"
              style={{ color: '#E8F0FE' }}>
              WhatsApp
            </a>
            <p className="text-sm mt-1" style={{ color: '#8AA8C8' }}>+55 (79) 99999-8876</p>
          </div>
          <div className="rounded-2xl border p-7 flex flex-col items-center text-center"
            style={{ background: '#0D1320', borderColor: '#1E2D45' }}>
            <div className="rounded-xl p-2 mb-3" style={{ background: '#0D1320', border: '1px solid #1E2D45' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={qrUrl(wa, 200)} alt="QR code" className="block" width={160} height={160} />
            </div>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#8AA8C8' }}>
              Aponte a câmera
            </p>
          </div>
        </div>

        <p className="mt-12 text-base" style={{ color: '#5A7A9A' }}>
          Felipe Ferreira · {BRAND.name} · {BRAND.city}
        </p>
      </div>
    </SlideShell>
  )
}

// ── Componentes auxiliares ───────────────────────────────────────────────────

function SlideShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full px-6 sm:px-12 lg:px-20 py-12 flex items-center justify-center min-h-full">
      {children}
    </div>
  )
}

function Stat({ label, value, color, hi }: { label: string; value: string; color: string; hi?: boolean }) {
  return (
    <div className="rounded-xl border p-4"
      style={{
        background: hi ? 'rgba(255,77,109,.06)' : '#0F1A2B',
        borderColor: hi ? 'rgba(255,77,109,.3)' : '#1E2D45',
      }}>
      <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: '#5A7A9A' }}>{label}</p>
      <p className="text-2xl font-bold tabular-nums mt-1" style={{ color }}>{value}</p>
    </div>
  )
}

function Bar({ label, value, pct, color }: { label: string; value: number; pct: number; color: string }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs mb-1">
        <span className="flex items-center gap-2" style={{ color: '#E8F0FE' }}>
          <span className="h-2.5 w-2.5 rounded shrink-0" style={{ background: color }} />
          {label}
        </span>
        <span className="font-mono" style={{ color }}>
          {pct}% · {BRL(value)}
        </span>
      </div>
      <div className="h-2 rounded-md overflow-hidden" style={{ background: '#0F1A2B' }}>
        <div className="h-full transition-all" style={{
          width: `${pct}%`,
          background: `linear-gradient(90deg, ${color}55, ${color})`,
        }} />
      </div>
    </div>
  )
}

function Card({ title, value, sub, color }: { title: string; value: string; sub: string; color: string }) {
  return (
    <div className="rounded-2xl border p-6 text-center" style={{ background: '#0D1320', borderColor: '#1E2D45' }}>
      <p className="text-xs font-bold uppercase tracking-wider" style={{ color }}>{title}</p>
      <p className="text-5xl font-bold tabular-nums my-3" style={{ color }}>{value}</p>
      <p className="text-xs" style={{ color: '#8AA8C8' }}>{sub}</p>
    </div>
  )
}

function BigStat({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className="rounded-2xl border p-6 text-center" style={{ background: '#0D1320', borderColor: '#1E2D45' }}>
      <p className="text-4xl sm:text-5xl font-bold tabular-nums" style={{ color }}>{value}</p>
      <p className="text-xs mt-2 font-semibold" style={{ color: '#8AA8C8' }}>{label}</p>
    </div>
  )
}

// Suprime warnings TS do ArrowRight import
void ArrowRight
