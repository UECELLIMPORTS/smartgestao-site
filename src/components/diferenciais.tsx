import { TrendingDown, Target, AlertTriangle, BarChart3 } from 'lucide-react'

const STORIES = [
  {
    icon: TrendingDown,
    color: '#FF4D6D',
    label: 'A pergunta que ninguém respondia',
    question: '"A loja física se paga sozinha ou só vive do online?"',
    answer:
      'O módulo Break-even cruza faturamento de balcão com seu custo fixo (aluguel + salários + contas) e mostra na hora se a loja física cobre o próprio custo, ou quanto o online está sustentando.',
    metric: 'Visibilidade real do que cada canal dá de lucro líquido.',
  },
  {
    icon: Target,
    color: '#00E5FF',
    label: 'Atribuição de verdade',
    question: '"Esse cliente veio do Instagram pago ou da indicação?"',
    answer:
      'Cruzamos origem do cliente × canal de venda × campanha do Meta Ads. Você vê CAC e ROAS por canal — e até pra clientes que compraram sem cadastro, inferimos a origem pelo canal de fechamento.',
    metric: 'Pare de gastar em anúncio que não converte.',
  },
  {
    icon: AlertTriangle,
    color: '#FFAA00',
    label: 'Detecção automática',
    question: '"Quais clientes estão sumindo sem eu perceber?"',
    answer:
      'O CRM identifica clientes recorrentes que não compram há mais de 60 dias, rankeia por valor de risco (quanto você perde se eles forem embora) e te avisa pra recuperar antes que esfrie.',
    metric: 'Recupere receita recorrente antes que ela vire prejuízo.',
  },
  {
    icon: BarChart3,
    color: '#00FF94',
    label: 'Dados que se conectam',
    question: '"Por que meu lucro tá inflado nos relatórios?"',
    answer:
      'Diagnóstico automático identifica vendas com snapshot de custo faltando, OSs sem custo de peças, e produtos cadastrados sem cost_cents. Você corrige em 1 clique e o lucro volta a ficar real.',
    metric: 'Confiança nos números que aparecem na sua tela.',
  },
]

export function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 border-y" style={{ borderColor: '#1E2D45', background: '#0A0F1A' }}>
      <div className="container-x">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-4"
            style={{ borderColor: '#1E2D45', color: '#00FF94' }}>
            Diferenciais
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Não vendemos &quot;ERP&quot;.<br />
            <span style={{ color: '#8AA8C8' }}>Vendemos respostas.</span>
          </h2>
          <p className="mt-4 text-base" style={{ color: '#8AA8C8' }}>
            Empresário não quer software — quer saber o que aumenta o lucro.
            Estas são as 4 perguntas que nossos clientes mais fazem, e como a Gestão Inteligente responde:
          </p>
        </div>

        {/* Cards de histórias */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {STORIES.map(s => {
            const Icon = s.icon
            return (
              <article
                key={s.question}
                className="rounded-2xl border p-7 space-y-4"
                style={{ background: '#0D1320', borderColor: '#1E2D45' }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0 border"
                    style={{ background: `${s.color}15`, borderColor: `${s.color}40` }}>
                    <Icon className="h-5 w-5" style={{ color: s.color }} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: s.color }}>
                    {s.label}
                  </span>
                </div>

                <p className="text-xl font-bold leading-snug" style={{ color: '#E8F0FE' }}>
                  {s.question}
                </p>

                <p className="text-sm leading-relaxed" style={{ color: '#8AA8C8' }}>
                  {s.answer}
                </p>

                <div className="pt-3 border-t flex items-center gap-2 text-xs font-semibold" style={{ borderColor: '#1E2D45', color: s.color }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.color }} />
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
