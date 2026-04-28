import { Users, Clock, Activity, Building2 } from 'lucide-react'

const STATS = [
  {
    icon:    Users,
    value:   '12.000+',
    label:   'Clientes ativos',
    sub:     'na loja-laboratório',
    accent:  'var(--primary)',
  },
  {
    icon:    Building2,
    value:   '1 loja real',
    label:   'Validando o sistema',
    sub:     'todo dia, no balcão',
    accent:  'var(--success)',
  },
  {
    icon:    Activity,
    value:   '24/7',
    label:   'Em produção',
    sub:     'sem downtime planejado',
    accent:  'var(--warning)',
  },
  {
    icon:    Clock,
    value:   'Anos',
    label:   'De operação real',
    sub:     'antes de virar produto',
    accent:  'var(--accent)',
  },
]

export function ProvaSocial() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-4"
            style={{ borderColor: 'var(--border)', color: 'var(--primary)' }}>
            Não é vaporware
          </div>
          <h2 className="display-2" style={{ color: 'var(--text)' }}>
            Construído numa loja de verdade.{' '}
            <span style={{ color: 'var(--muted)' }}>Com 12 mil clientes reais.</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>
            A Gestão Inteligente nasceu na rotina da <strong style={{ color: 'var(--text)' }}>UÉ Cell Imports</strong> —
            uma loja física e online de Aracaju que processa milhares de vendas e ordens de serviço todo mês.
            Cada feature aqui resolve uma dor que vivemos no balcão antes de virar código.
          </p>
        </div>

        {/* Stats grid */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map(s => {
            const Icon = s.icon
            return (
              <div key={s.label} className="rounded-2xl border bg-white p-6 text-center"
                style={{ borderColor: 'var(--border)' }}>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    background: `color-mix(in srgb, ${s.accent} 10%, white)`,
                    border: `1px solid color-mix(in srgb, ${s.accent} 25%, transparent)`,
                  }}>
                  <Icon className="h-6 w-6" style={{ color: s.accent }} />
                </div>
                <p className="text-3xl sm:text-4xl font-bold tabular-nums leading-tight tracking-tight"
                  style={{ color: s.accent }}>
                  {s.value}
                </p>
                <p className="mt-2 text-sm font-semibold" style={{ color: 'var(--text)' }}>
                  {s.label}
                </p>
                <p className="text-[11px] mt-1" style={{ color: 'var(--muted)' }}>
                  {s.sub}
                </p>
              </div>
            )
          })}
        </div>

        {/* Citação institucional */}
        <div className="mt-12 max-w-3xl mx-auto rounded-2xl border bg-white p-8 lg:p-10 relative"
          style={{ borderColor: 'var(--border)' }}>
          <div className="pointer-events-none absolute top-0 left-8 -translate-y-1/2 text-7xl leading-none font-bold opacity-15"
            style={{ color: 'var(--primary)' }}>
            &ldquo;
          </div>
          <blockquote className="relative">
            <p className="text-lg lg:text-xl leading-relaxed" style={{ color: 'var(--text)' }}>
              Construímos cada feature resolvendo uma dor real do balcão.
              Se funciona pra mim atendendo 12 mil clientes na minha loja, funciona pra você.
              Não é teoria — é o que rodamos todo dia.
            </p>
            <footer className="mt-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full text-base font-bold shrink-0"
                style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))', color: 'white' }}>
                FF
              </div>
              <div>
                <p className="text-sm font-bold" style={{ color: 'var(--text)' }}>Felipe Ferreira</p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>
                  Fundador · Gestão Inteligente · UÉ Cell Imports
                </p>
              </div>
            </footer>
          </blockquote>
        </div>

        {/* Placeholder pra depoimentos reais */}
        <div className="mt-10 max-w-3xl mx-auto rounded-xl border border-dashed p-5 text-center"
          style={{ borderColor: 'var(--border-2)' }}>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Em breve: depoimentos dos primeiros clientes do sistema.
            Quer ser o primeiro a aparecer aqui? <a href="#planos" className="underline transition-colors hover:text-slate-900">Conheça os planos →</a>
          </p>
        </div>
      </div>
    </section>
  )
}
