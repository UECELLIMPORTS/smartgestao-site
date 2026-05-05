'use client'

import { useState } from 'react'
import { Check, X, ArrowRight, MessageCircle, Sparkles } from 'lucide-react'
import { whatsappLink, PLANOS_CHECKSMART, ANNUAL_DISCOUNT, annualPricing, BRAND, CHECKSMART_ADDON } from '@/lib/contact'

const BRL = (v: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, maximumFractionDigits: 0 })
    .format(v)

type PlanKey = 'basico' | 'pro' | 'premium'

export function PricingCheckSmart() {
  const [annual, setAnnual] = useState(false)
  const planKeys: PlanKey[] = ['basico', 'pro', 'premium']

  return (
    <section id="planos" className="py-20 lg:py-28" style={{ background: '#080C14' }}>
      <div className="container-x">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-4"
            style={{ borderColor: 'rgba(255, 184, 0, .4)', color: '#FFB800', background: 'rgba(255, 184, 0, .06)' }}>
            Planos do CheckSmart
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: '#E8F0FE' }}>
            Pague só pelo que sua{' '}
            <span style={{ color: '#8AA8C8' }}>assistência precisa.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: '#8AA8C8' }}>
            Comece pelo essencial e amplie quando o volume de OSs pedir.
            Sem fidelidade, sem letra miúda, cancela quando quiser.
          </p>
        </div>

        {/* Toggle Mensal/Anual */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <button onClick={() => setAnnual(false)}
            className="text-sm font-semibold transition-colors"
            style={{ color: !annual ? '#E8F0FE' : '#8AA8C8' }}>
            Mensal
          </button>
          <button
            onClick={() => setAnnual(v => !v)}
            className="relative h-7 w-14 rounded-full transition-colors"
            style={{ background: annual ? '#FFB800' : '#1E2D45' }}
            aria-label="Alternar entre mensal e anual"
          >
            <span
              className="absolute top-0.5 h-6 w-6 rounded-full bg-white transition-all shadow"
              style={{ left: annual ? 'calc(100% - 1.625rem)' : '0.125rem' }}
            />
          </button>
          <button onClick={() => setAnnual(true)}
            className="text-sm font-semibold transition-colors flex items-center gap-2"
            style={{ color: annual ? '#E8F0FE' : '#8AA8C8' }}>
            Anual
            <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded"
              style={{ background: 'rgba(255, 184, 0, .15)', color: '#FFB800' }}>
              -{Math.round(ANNUAL_DISCOUNT * 100)}%
            </span>
          </button>
        </div>

        {/* Cards de planos */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {planKeys.map(key => {
            const plan = PLANOS_CHECKSMART[key]
            const ann  = annualPricing(plan.monthly)
            const display = annual ? ann.monthlyEq : plan.monthly
            const highlighted = key === 'pro'

            return (
              <article
                key={key}
                className="relative rounded-2xl p-7 flex flex-col transition-all"
                style={{
                  background: '#0D1320',
                  border: `1px solid ${highlighted ? '#FFB800' : '#1E2D45'}`,
                  boxShadow: highlighted ? '0 0 0 4px rgba(255, 184, 0, .08), 0 12px 32px rgba(255, 184, 0, .12)' : undefined,
                  transform: highlighted ? 'scale(1.02)' : undefined,
                }}
              >
                {highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                    style={{ background: 'linear-gradient(135deg, #FFB800, #FF8C00)', color: '#080C14' }}>
                    <Sparkles className="h-3 w-3" /> Mais escolhido
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold" style={{ color: '#E8F0FE' }}>{plan.name}</h3>
                  <p className="mt-1 text-sm" style={{ color: '#8AA8C8' }}>{plan.description}</p>
                </div>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-sm font-medium" style={{ color: '#8AA8C8' }}>R$</span>
                  <span className="text-5xl font-bold tabular-nums tracking-tight" style={{ color: '#E8F0FE' }}>
                    {display.toFixed(0)}
                  </span>
                  <span className="text-sm" style={{ color: '#8AA8C8' }}>/mês</span>
                </div>

                {annual ? (
                  <div className="mt-2 text-xs space-y-0.5" style={{ color: '#8AA8C8' }}>
                    <p>Total anual: <span className="font-semibold tabular-nums" style={{ color: '#FFB800' }}>{BRL(ann.annual)}</span> · economia de {BRL(ann.savings)}</p>
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
                      <Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: '#FFB800' }} />
                      <span>{f}</span>
                    </li>
                  ))}
                  {plan.notIncluded && plan.notIncluded.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm" style={{ color: '#5B6B82' }}>
                      <X className="h-4 w-4 mt-0.5 shrink-0" />
                      <span className="line-through">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink(`Oi! Tenho interesse no CheckSmart ${plan.name} (${annual ? 'anual' : 'mensal'}).`)}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-opacity hover:opacity-90"
                  style={highlighted
                    ? { background: 'linear-gradient(135deg, #FFB800, #FF8C00)', color: '#080C14' }
                    : { background: '#E8F0FE', color: '#080C14' }
                  }
                >
                  Quero contratar <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href={whatsappLink(`Oi! Quero saber mais sobre o CheckSmart ${plan.name}.`)}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-semibold border transition-colors hover:bg-white/5"
                  style={{ color: '#8AA8C8', borderColor: '#1E2D45' }}
                >
                  <MessageCircle className="h-3.5 w-3.5" /> Tirar dúvidas
                </a>
              </article>
            )
          })}
        </div>

        {/* Anchoring: já tem Gestão Smart? */}
        <div className="mt-12 max-w-3xl mx-auto rounded-2xl border p-6 lg:p-8 text-center"
          style={{ background: '#0D1320', borderColor: 'rgba(255, 184, 0, .3)' }}>
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-3"
            style={{ borderColor: 'rgba(79, 70, 229, .4)', color: '#A5B4FC', background: 'rgba(79, 70, 229, .08)' }}>
            Já usa Gestão Smart?
          </div>
          <h3 className="text-xl sm:text-2xl font-bold leading-tight" style={{ color: '#E8F0FE' }}>
            Adicione CheckSmart Premium por só{' '}
            <span style={{ color: '#FFB800' }}>R$ {CHECKSMART_ADDON.monthly}/mês</span>
          </h3>
          <p className="mt-2 text-sm" style={{ color: '#8AA8C8' }}>
            Como add-on em qualquer plano do Gestão Smart (Básico/Pro/Premium), você paga R$ {CHECKSMART_ADDON.monthly}/mês
            em vez de R$ {CHECKSMART_ADDON.fullPrice} isolado — <strong style={{ color: '#FFB800' }}>50% de desconto</strong>.
          </p>
          <a
            href="/"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold underline-offset-2 hover:underline"
            style={{ color: '#A5B4FC' }}
          >
            Ver planos do Gestão Smart <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
