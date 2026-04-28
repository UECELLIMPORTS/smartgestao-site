import Link from 'next/link'
import { Store, Users, TrendingUp, Wrench, ArrowRight } from 'lucide-react'

const SISTEMAS = [
  {
    name:        'Gestão Smart',
    icon:        Store,
    badge:       'Carro-chefe',
    accent:      'var(--primary)',
    description: 'O ERP completo: frente de caixa, estoque, financeiro, dashboards e relatórios avançados em tempo real.',
    features: [
      'Frente de Caixa (POS)',
      'Estoque com snapshot de custo',
      'Financeiro consolidado (ERP + OS)',
      'Dashboard com Origem dos Clientes',
      'Análise de Canais (Online vs Física)',
      'Diagnóstico de Lucro automático',
    ],
    plansFrom: 'A partir de R$ 97/mês',
  },
  {
    name:        'CRM',
    icon:        Users,
    badge:       'Incluso no Premium',
    accent:      'var(--success)',
    description: 'Acompanhe cada cliente do primeiro contato à fidelização. Identifique quem está em risco e quem é seu maior ativo.',
    features: [
      'Pipeline visual por estágio',
      'Histórico completo do cliente',
      'Detecção de clientes em risco',
      'Segmentação por origem e canal',
      'Lembretes de follow-up',
      'Integração nativa com Gestão Smart',
    ],
    plansFrom: 'No plano Premium',
  },
  {
    name:        'Meta Ads',
    icon:        TrendingUp,
    badge:       'Incluso no Premium',
    accent:      '#E4405F',
    description: 'Campanhas, ROAS e CAC integrados ao seu ERP. Saiba exatamente quanto cada anúncio gera de venda real.',
    features: [
      'Sincronização com Meta Graph API',
      'ROAS e CAC por canal',
      'Atribuição via campaign_code',
      'Alertas automáticos de campanhas',
      'Dashboard de performance',
      'Multi-conta (várias contas Meta)',
    ],
    plansFrom: 'No plano Premium',
  },
  {
    name:        'CheckSmart',
    icon:        Wrench,
    badge:       'Vendido à parte',
    accent:      'var(--warning)',
    description: 'O sistema especializado pra assistência técnica de celular. Ordens de serviço, checklist com escudo jurídico, PDF assinado.',
    features: [
      'OS multi-aparelho com checklist',
      'Bloqueio jurídico em aparelho apagado',
      'PDF com assinatura do cliente',
      'Controle de peças com custo',
      'Sincronização com Gestão Smart',
      'Histórico por cliente integrado',
    ],
    plansFrom: 'Plano específico — falar com vendas',
    href:      '/checksmart',
  },
]

export function Sistemas() {
  return (
    <section id="sistemas" className="py-20 lg:py-28" style={{ background: 'var(--surface)' }}>
      <div className="container-x">
        {/* Section header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-4"
            style={{ borderColor: 'var(--border)', color: 'var(--primary)' }}>
            Os 4 sistemas
          </div>
          <h2 className="display-2" style={{ color: 'var(--text)' }}>
            Cada um resolve uma dor.{' '}
            <span style={{ color: 'var(--muted)' }}>Juntos, escalam o seu negócio.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>
            Todos os sistemas conversam entre si. Você ativa só o que precisa hoje
            e amplia conforme o negócio cresce.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {SISTEMAS.map(s => {
            const Icon = s.icon
            return (
              <article
                key={s.name}
                className="card group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl shrink-0"
                    style={{
                      background: `color-mix(in srgb, ${s.accent} 10%, white)`,
                      border: `1px solid color-mix(in srgb, ${s.accent} 25%, transparent)`,
                    }}>
                    <Icon className="h-6 w-6" style={{ color: s.accent }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-bold" style={{ color: 'var(--text)' }}>{s.name}</h3>
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                        style={{
                          background: `color-mix(in srgb, ${s.accent} 10%, white)`,
                          color: s.accent,
                        }}>
                        {s.badge}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                      {s.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {s.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text)' }}>
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: s.accent }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 flex items-center justify-between border-t"
                  style={{ borderColor: 'var(--border)' }}>
                  <span className="text-xs font-semibold" style={{ color: s.accent }}>
                    {s.plansFrom}
                  </span>
                  {s.href && (
                    <Link href={s.href}
                      className="inline-flex items-center gap-1 text-xs font-bold transition-opacity hover:opacity-80"
                      style={{ color: s.accent }}>
                      Conhecer <ArrowRight className="h-3 w-3" />
                    </Link>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
