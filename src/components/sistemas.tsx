import Link from 'next/link'
import { Store, Users, TrendingUp, Wrench, ArrowRight } from 'lucide-react'

const SISTEMAS = [
  {
    name:        'Gestão Smart',
    icon:        Store,
    color:       '#00E5FF',
    badge:       'Carro-chefe',
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
    color:       '#00FF94',
    badge:       'Incluso no Premium',
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
    color:       '#E4405F',
    badge:       'Incluso no Premium',
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
    color:       '#FFB800',
    badge:       'Vendido à parte',
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
    <section id="sistemas" className="py-20 lg:py-28">
      <div className="container-x">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-4"
            style={{ borderColor: '#1E2D45', color: '#00E5FF' }}>
            Os 4 sistemas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Cada um resolve uma dor.<br />
            <span style={{ color: '#8AA8C8' }}>Juntos, escalam o seu negócio.</span>
          </h2>
          <p className="mt-4 text-base" style={{ color: '#8AA8C8' }}>
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
                className="group relative rounded-2xl border p-7 transition-all hover:border-opacity-60"
                style={{ background: '#0D1320', borderColor: '#1E2D45' }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl shrink-0 border"
                    style={{
                      background: `${s.color}15`,
                      borderColor: `${s.color}40`,
                    }}>
                    <Icon className="h-6 w-6" style={{ color: s.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-bold">{s.name}</h3>
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                        style={{ background: `${s.color}18`, color: s.color }}>
                        {s.badge}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: '#8AA8C8' }}>
                      {s.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {s.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm" style={{ color: '#E8F0FE' }}>
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: s.color }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 flex items-center justify-between border-t" style={{ borderColor: '#1E2D45' }}>
                  <span className="text-xs font-semibold" style={{ color: s.color }}>
                    {s.plansFrom}
                  </span>
                  {s.href && (
                    <Link href={s.href}
                      className="inline-flex items-center gap-1 text-xs font-bold hover:underline"
                      style={{ color: s.color }}>
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
