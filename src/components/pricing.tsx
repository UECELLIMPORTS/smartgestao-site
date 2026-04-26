'use client'

import { useState } from 'react'
import { Check, X, Sparkles, ArrowRight, MessageCircle } from 'lucide-react'
import { whatsappLink, PLANOS, ANNUAL_DISCOUNT, annualPricing, BRAND } from '@/lib/contact'

const BRL = (v: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, maximumFractionDigits: 0 })
    .format(v)

type PlanKey = 'basico' | 'pro' | 'premium'

export function Pricing() {
  const [annual, setAnnual] = useState(false)

  const planKeys: PlanKey[] = ['basico', 'pro', 'premium']

  return (
    <section id="planos" className="py-20 lg:py-28">
      <div className="container-x">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-4"
            style={{ borderColor: '#1E2D45', color: '#FFB800' }}>
            Planos da Gestão Smart
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Um plano pra cada estágio<br />
            <span style={{ color: '#8AA8C8' }}>do seu negócio.</span>
          </h2>
          <p className="mt-4 text-base" style={{ color: '#8AA8C8' }}>
            Comece pelo essencial e amplie quando o negócio pedir.
            Sem fidelidade, sem letra miúda, cancela quando quiser.
          </p>
        </div>

        {/* Toggle Mensal/Anual */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <button onClick={() => setAnnual(false)}
            className="text-sm font-semibold transition-colors"
            style={{ color: !annual ? '#E8F0FE' : '#5A7A9A' }}>
            Mensal
          </button>
          <button
            onClick={() => setAnnual(v => !v)}
            className="relative h-7 w-14 rounded-full border transition-colors"
            style={{
              background: annual ? '#00FF94' : '#1E2D45',
              borderColor: annual ? '#00FF94' : '#1E2D45',
            }}
            aria-label="Alternar entre mensal e anual"
          >
            <span
              className="absolute top-0.5 h-6 w-6 rounded-full transition-all"
              style={{
                left: annual ? 'calc(100% - 1.625rem)' : '0.125rem',
                background: annual ? '#080C14' : '#E8F0FE',
              }}
            />
          </button>
          <button onClick={() => setAnnual(true)}
            className="text-sm font-semibold transition-colors flex items-center gap-2"
            style={{ color: annual ? '#E8F0FE' : '#5A7A9A' }}>
            Anual
            <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded"
              style={{ background: 'rgba(0,255,148,.15)', color: '#00FF94' }}>
              -{Math.round(ANNUAL_DISCOUNT * 100)}%
            </span>
          </button>
        </div>

        {/* Cards de planos */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {planKeys.map(key => {
            const plan = PLANOS[key]
            const ann  = annualPricing(plan.monthly)
            const display = annual ? ann.monthlyEq : plan.monthly
            const highlighted = key === 'pro'

            return (
              <article
                key={key}
                className="relative rounded-2xl border p-7 flex flex-col"
                style={{
                  background: '#0D1320',
                  borderColor: highlighted ? '#00E5FF' : '#1E2D45',
                  boxShadow:   highlighted ? '0 0 0 1px rgba(0,229,255,0.3), 0 0 40px rgba(0,229,255,0.08)' : undefined,
                }}
              >
                {highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                    style={{ background: '#00E5FF', color: '#080C14' }}>
                    <Sparkles className="h-3 w-3" /> Mais escolhido
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="mt-1 text-sm" style={{ color: '#8AA8C8' }}>{plan.description}</p>
                </div>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-sm font-medium" style={{ color: '#5A7A9A' }}>R$</span>
                  <span className="text-5xl font-bold tabular-nums" style={{ color: '#E8F0FE' }}>
                    {display.toFixed(0)}
                  </span>
                  <span className="text-sm" style={{ color: '#5A7A9A' }}>/mês</span>
                </div>

                {annual ? (
                  <div className="mt-2 text-xs space-y-0.5" style={{ color: '#8AA8C8' }}>
                    <p>Total anual: <span className="font-semibold tabular-nums" style={{ color: '#00FF94' }}>{BRL(ann.annual)}</span> · economia de {BRL(ann.savings)}</p>
                    <p>Ou <span className="font-semibold tabular-nums" style={{ color: '#E8F0FE' }}>12× {BRL(ann.installment)}</span> sem juros</p>
                  </div>
                ) : (
                  <p className="mt-2 text-xs" style={{ color: '#8AA8C8' }}>
                    Cobrança mensal recorrente. Sem fidelidade.
                  </p>
                )}

                <ul className="mt-6 space-y-2 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm" style={{ color: '#E8F0FE' }}>
                      <Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#00FF94' }} />
                      <span>{f}</span>
                    </li>
                  ))}
                  {plan.notIncluded && plan.notIncluded.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm" style={{ color: '#5A7A9A' }}>
                      <X className="h-4 w-4 mt-0.5 shrink-0" />
                      <span className="line-through">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA principal: signup self-service (cliente cria conta sozinho) */}
                <a
                  href={`${BRAND.signupUrl}?plan=${key}${annual ? '&billing=annual' : ''}`}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-opacity hover:opacity-90"
                  style={highlighted
                    ? { background: 'linear-gradient(135deg, #00E5FF, #00FF94)', color: '#080C14' }
                    : { background: 'linear-gradient(135deg, #00E5FF, #00FF94)', color: '#080C14' }
                  }
                >
                  Começar grátis (7 dias) <ArrowRight className="h-4 w-4" />
                </a>

                {/* CTA secundário: WhatsApp pra quem prefere atendimento humano */}
                <a
                  href={whatsappLink(`Oi! Tenho interesse no plano ${plan.name} (${annual ? 'anual' : 'mensal'}). Pode me passar mais detalhes?`)}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-semibold transition-colors hover:bg-white/5"
                  style={{ color: '#8AA8C8', border: '1px solid #1E2D45' }}
                >
                  <MessageCircle className="h-3.5 w-3.5" /> Falar com vendas
                </a>
              </article>
            )
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 text-center text-xs max-w-2xl mx-auto" style={{ color: '#5A7A9A' }}>
          O CheckSmart (sistema pra assistência técnica) é vendido em plano à parte.{' '}
          <a href="/checksmart" className="underline hover:text-white transition-colors">Conheça aqui →</a>
        </div>
      </div>
    </section>
  )
}
