import { TrendingDown, Target, AlertTriangle, BarChart3 } from 'lucide-react'

const STORIES = [
  {
    icon: TrendingDown,
    accent: 'var(--danger)',
    label: 'A pergunta que ninguém respondia',
    question: '"A loja física se paga sozinha ou só vive do online?"',
    answer:
      'O módulo Break-even cruza faturamento de balcão com seu custo fixo (aluguel + salários + contas) e mostra na hora se a loja física cobre o próprio custo, ou quanto o online está sustentando.',
    metric: 'Visibilidade real do que cada canal dá de lucro líquido.',
  },
  {
    icon: Target,
    accent: 'var(--accent)',
    label: 'Atribuição de verdade',
    question: '"Esse cliente veio do Instagram pago ou da indicação?"',
    answer:
      'Cruzamos origem do cliente × canal de venda × campanha do Meta Ads. Você vê CAC e ROAS por canal — e até pra clientes que compraram sem cadastro, inferimos a origem pelo canal de fechamento.',
    metric: 'Pare de gastar em anúncio que não converte.',
  },
  {
    icon: AlertTriangle,
    accent: 'var(--warning)',
    label: 'Detecção automática',
    question: '"Quais clientes estão sumindo sem eu perceber?"',
    answer:
      'O CRM identifica clientes recorrentes que não compram há mais de 60 dias, rankeia por valor de risco (quanto você perde se eles forem embora) e te avisa pra recuperar antes que esfrie.',
    metric: 'Recupere receita recorrente antes que ela vire prejuízo.',
  },
  {
    icon: BarChart3,
    accent: 'var(--success)',
    label: 'Dados que se conectam',
    question: '"Por que meu lucro tá inflado nos relatórios?"',
    answer:
      'Diagnóstico automático identifica vendas com snapshot de custo faltando, OSs sem custo de peças, e produtos cadastrados sem cost_cents. Você corrige em 1 clique e o lucro volta a ficar real.',
    metric: 'Confiança nos números que aparecem na sua tela.',
  },
]

export function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 lg:py-28">
      <div className="container-x">
        {/* Section header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-4"
            style={{ borderColor: 'var(--border)', color: 'var(--success)' }}>
            Diferenciais
          </div>
          <h2 className="display-2" style={{ color: 'var(--text)' }}>
            Não vendemos &quot;ERP&quot;.{' '}
            <span style={{ color: 'var(--muted)' }}>Vendemos respostas.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>
            Empresário não quer software — quer saber o que aumenta o lucro.
            Estas são as 4 perguntas que nossos clientes mais fazem,
            e como a Gestão Inteligente responde:
          </p>
        </div>

        {/* Cards de histórias */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {STORIES.map(s => {
            const Icon = s.icon
            return (
              <article key={s.question} className="card space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                    style={{
                      background: `color-mix(in srgb, ${s.accent} 10%, white)`,
                      border: `1px solid color-mix(in srgb, ${s.accent} 25%, transparent)`,
                    }}>
                    <Icon className="h-5 w-5" style={{ color: s.accent }} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: s.accent }}>
                    {s.label}
                  </span>
                </div>

                <p className="text-xl font-bold leading-snug" style={{ color: 'var(--text)' }}>
                  {s.question}
                </p>

                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                  {s.answer}
                </p>

                <div className="pt-3 border-t flex items-center gap-2 text-xs font-semibold"
                  style={{ borderColor: 'var(--border)', color: s.accent }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.accent }} />
                  {s.metric}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
