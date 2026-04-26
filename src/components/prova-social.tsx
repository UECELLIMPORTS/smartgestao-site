import { Users, Clock, Activity, Building2 } from 'lucide-react'

const STATS = [
  {
    icon:    Users,
    value:   '12.000+',
    label:   'Clientes ativos',
    sub:     'na loja-laboratório',
    color:   '#00E5FF',
  },
  {
    icon:    Building2,
    value:   '1 loja real',
    label:   'Validando o sistema',
    sub:     'todo dia, no balcão',
    color:   '#00FF94',
  },
  {
    icon:    Activity,
    value:   '24/7',
    label:   'Em produção',
    sub:     'sem downtime planejado',
    color:   '#FFB800',
  },
  {
    icon:    Clock,
    value:   'Anos',
    label:   'De operação real',
    sub:     'antes de virar produto',
    color:   '#9B6DFF',
  },
]

export function ProvaSocial() {
  return (
    <section className="py-20 lg:py-28 border-t" style={{ borderColor: '#1E2D45' }}>
      <div className="container-x">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-4"
            style={{ borderColor: '#1E2D45', color: '#00E5FF' }}>
            Não é vaporware
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Construído numa loja de verdade.<br />
            <span style={{ color: '#8AA8C8' }}>Com 12 mil clientes reais.</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-base" style={{ color: '#8AA8C8' }}>
            A Gestão Inteligente nasceu na rotina da <strong style={{ color: '#E8F0FE' }}>UÉ Cell Imports</strong> —
            uma loja física e online de Aracaju que processa milhares de vendas e ordens de serviço todo mês.
            Cada feature aqui resolve uma dor que vivemos no balcão antes de virar código.
          </p>
        </div>

        {/* Stats grid */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map(s => {
            const Icon = s.icon
            return (
              <div key={s.label} className="rounded-2xl border p-6 text-center"
                style={{ background: '#0D1320', borderColor: '#1E2D45' }}>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border"
                  style={{ background: `${s.color}15`, borderColor: `${s.color}40` }}>
                  <Icon className="h-6 w-6" style={{ color: s.color }} />
                </div>
                <p className="text-3xl sm:text-4xl font-bold tabular-nums leading-tight"
                  style={{ color: s.color }}>
                  {s.value}
                </p>
                <p className="mt-2 text-sm font-semibold" style={{ color: '#E8F0FE' }}>
                  {s.label}
                </p>
                <p className="text-[11px] mt-1" style={{ color: '#5A7A9A' }}>
                  {s.sub}
                </p>
              </div>
            )
          })}
        </div>

        {/* Citação institucional */}
        <div className="mt-12 max-w-3xl mx-auto rounded-2xl border p-8 lg:p-10 relative"
          style={{ background: 'linear-gradient(135deg, #0D1320, #0A0F1A)', borderColor: '#00E5FF40' }}>
          <div className="pointer-events-none absolute top-0 left-8 -translate-y-1/2 text-7xl leading-none font-bold opacity-20"
            style={{ color: '#00E5FF' }}>
            &ldquo;
          </div>
          <blockquote className="relative">
            <p className="text-lg lg:text-xl leading-relaxed" style={{ color: '#E8F0FE' }}>
              Construímos cada feature resolvendo uma dor real do balcão.
              Se funciona pra mim atendendo 12 mil clientes na minha loja, funciona pra você.
              Não é teoria — é o que rodamos todo dia.
            </p>
            <footer className="mt-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full text-base font-bold shrink-0"
                style={{ background: 'linear-gradient(135deg, #00E5FF, #00FF94)', color: '#080C14' }}>
                FF
              </div>
              <div>
                <p className="text-sm font-bold" style={{ color: '#E8F0FE' }}>Felipe Ferreira</p>
                <p className="text-xs" style={{ color: '#8AA8C8' }}>
                  Fundador · Gestão Inteligente · UÉ Cell Imports
                </p>
              </div>
            </footer>
          </blockquote>
        </div>

        {/* Caixa "vazia" honesta — espaço pra futuros depoimentos reais */}
        <div className="mt-10 max-w-3xl mx-auto rounded-xl border border-dashed p-5 text-center"
          style={{ borderColor: '#1E2D45' }}>
          <p className="text-xs" style={{ color: '#5A7A9A' }}>
            Em breve: depoimentos dos primeiros clientes do sistema.
            Quer ser o primeiro a aparecer aqui? <a href="#planos" className="underline hover:text-white transition-colors">Conheça os planos →</a>
          </p>
        </div>
      </div>
    </section>
  )
}
