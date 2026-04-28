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
    <section id="planos" className="py-20 lg:py-28" style={{ background: 'var(--surface)' }}>
      <div className="container-x">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-4"
            style={{ borderColor: 'var(--border)', color: 'var(--warning)' }}>
            Planos da Gestão Smart
          </div>
          <h2 className="display-2" style={{ color: 'var(--text)' }}>
            Um plano pra cada estágio{' '}
            <span style={{ color: 'var(--muted)' }}>do seu negócio.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>
            Comece pelo essencial e amplie quando o negócio pedir.
            Sem fidelidade, sem letra miúda, cancela quando quiser.
          </p>
        </div>

        {/* Toggle Mensal/Anual */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <button onClick={() => setAnnual(false)}
            className="text-sm font-semibold transition-colors"
            style={{ color: !annual ? 'var(--text)' : 'var(--muted)' }}>
            Mensal
          </button>
          <button
            onClick={() => setAnnual(v => !v)}
            className="relative h-7 w-14 rounded-full transition-colors"
            style={{
              background: annual ? 'var(--success)' : 'var(--border-2)',
            }}
            aria-label="Alternar entre mensal e anual"
          >
            <span
              className="absolute top-0.5 h-6 w-6 rounded-full bg-white transition-all shadow"
              style={{
                left: annual ? 'calc(100% - 1.625rem)' : '0.125rem',
              }}
            />
          </button>
          <button onClick={() => setAnnual(true)}
            className="text-sm font-semibold transition-colors flex items-center gap-2"
            style={{ color: annual ? 'var(--text)' : 'var(--muted)' }}>
            Anual
            <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded"
              style={{ background: 'var(--success-light)', color: 'var(--success)' }}>
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
                className="relative rounded-2xl bg-white p-7 flex flex-col transition-all"
                style={{
                  border: `1px solid ${highlighted ? 'var(--primary)' : 'var(--border)'}`,
                  boxShadow: highlighted ? '0 0 0 4px rgba(79, 70, 229, .08), 0 12px 32px rgba(79, 70, 229, .12)' : '0 1px 3px rgba(15, 23, 42, .04)',
                  transform: highlighted ? 'scale(1.02)' : undefined,
                }}
              >
                {highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                    style={{ background: 'var(--primary)', color: 'white' }}>
                    <Sparkles className="h-3 w-3" /> Mais escolhido
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--text)' }}>{plan.name}</h3>
                  <p className="mt-1 text-sm" style={{ color: 'var(--text-2)' }}>{plan.description}</p>
                </div>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-sm font-medium" style={{ color: 'var(--muted)' }}>R$</span>
                  <span className="text-5xl font-bold tabular-nums tracking-tight" style={{ color: 'var(--text)' }}>
                    {display.toFixed(0)}
                  </span>
                  <span className="text-sm" style={{ color: 'var(--muted)' }}>/mês</span>
                </div>

                {annual ? (
                  <div className="mt-2 text-xs space-y-0.5" style={{ color: 'var(--text-2)' }}>
                    <p>Total anual: <span className="font-semibold tabular-nums" style={{ color: 'var(--success)' }}>{BRL(ann.annual)}</span> · economia de {BRL(ann.savings)}</p>
                    <p>Ou <span className="font-semibold tabular-nums" style={{ color: 'var(--text)' }}>12× {BRL(ann.installment)}</span> sem juros</p>
                  </div>
                ) : (
                  <p className="mt-2 text-xs" style={{ color: 'var(--muted)' }}>
                    Cobrança mensal recorrente. Sem fidelidade.
                  </p>
                )}

                <ul className="mt-6 space-y-2 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text)' }}>
                      <Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: 'var(--success)' }} />
                      <span>{f}</span>
                    </li>
                  ))}
                  {plan.notIncluded && plan.notIncluded.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm" style={{ color: 'var(--muted-2)' }}>
                      <X className="h-4 w-4 mt-0.5 shrink-0" />
                      <span className="line-through">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA primário */}
                <a
                  href={`${BRAND.signupUrl}?plan=${key}${annual ? '&billing=annual' : ''}`}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-all hover:opacity-90"
                  style={highlighted
                    ? { background: 'var(--primary)', color: 'white', boxShadow: '0 4px 12px rgba(79, 70, 229, .25)' }
                    : { background: 'var(--text)', color: 'white' }
                  }
                >
                  Começar grátis (7 dias) <ArrowRight className="h-4 w-4" />
                </a>

                {/* CTA secundário */}
                <a
                  href={whatsappLink(`Oi! Tenho interesse no plano ${plan.name} (${annual ? 'anual' : 'mensal'}). Pode me passar mais detalhes?`)}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-semibold border transition-colors hover:bg-slate-50"
                  style={{ color: 'var(--muted)', borderColor: 'var(--border)' }}
                >
                  <MessageCircle className="h-3.5 w-3.5" /> Falar com vendas
                </a>
              </article>
            )
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 text-center text-xs max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
          O CheckSmart (sistema pra assistência técnica) é vendido em plano à parte.{' '}
          <a href="/checksmart" className="underline transition-colors hover:text-slate-900">Conheça aqui →</a>
        </div>
      </div>
    </section>
  )
}
