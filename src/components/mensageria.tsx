import { MessageCircle, Mail, Cake, Heart, Sparkles, Zap } from 'lucide-react'

const CENARIOS = [
  {
    icon: MessageCircle,
    accent: 'var(--success)',
    titulo: 'Pós-venda',
    quando: '24h depois da compra',
    texto:
      'Agradece, pede feedback e abre o canal pra próxima compra. Sai automático pelo WhatsApp do lojista (não é um número genérico).',
  },
  {
    icon: Heart,
    accent: 'var(--primary)',
    titulo: 'Pós-assistência',
    quando: '7 dias após retirada da OS',
    texto:
      'Confirma se o aparelho continua bem, lembra do prazo de garantia e fortalece o relacionamento — gera recompra e indicação.',
  },
  {
    icon: Cake,
    accent: '#E4405F',
    titulo: 'Aniversariante',
    quando: 'Mês inteiro + dia exato',
    texto:
      'Mensagem no início do mês com cupom de desconto válido até o fim. Reforço no dia do aniversário com parabéns. Templates editáveis na hora.',
  },
  {
    icon: Sparkles,
    accent: 'var(--warning)',
    titulo: 'Win-back de inativos',
    quando: 'Cliente sumiu há X dias',
    texto:
      'Identifica clientes que pararam de comprar, gera cupom rastreável (ex: VOLTA15 com 15% off) e envia mensagem carinhosa. Você define o gatilho.',
  },
]

export function Mensageria() {
  return (
    <section id="mensageria" className="py-20 lg:py-28" style={{ background: 'var(--surface)' }}>
      <div className="container-x">
        {/* Section header */}
        <div className="max-w-2xl">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-4"
            style={{ background: 'var(--success-soft)', borderColor: 'rgba(16, 185, 129, .35)', color: 'var(--success)' }}
          >
            Novidade · Mensageria Automática
          </div>
          <h2 className="display-2" style={{ color: 'var(--text)' }}>
            Seu cliente esquece de você?{' '}
            <span style={{ color: 'var(--muted)' }}>O sistema lembra por você.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>
            WhatsApp e email automáticos pra quem vendeu, quem fez aniversário e
            quem está sumindo. <strong>Sai do seu próprio número de WhatsApp</strong>{' '}
            — sem chip novo, sem API oficial cara. Templates editáveis dentro do sistema.
          </p>
        </div>

        {/* Cards de cenários */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {CENARIOS.map((c) => {
            const Icon = c.icon
            return (
              <article key={c.titulo} className="card space-y-4">
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                    style={{
                      background: `color-mix(in srgb, ${c.accent} 10%, white)`,
                      border: `1px solid color-mix(in srgb, ${c.accent} 25%, transparent)`,
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: c.accent }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold leading-tight" style={{ color: 'var(--text)' }}>
                      {c.titulo}
                    </h3>
                    <p
                      className="text-[11px] font-bold uppercase tracking-widest mt-0.5"
                      style={{ color: c.accent }}
                    >
                      {c.quando}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                  {c.texto}
                </p>
              </article>
            )
          })}
        </div>

        {/* Faixa inferior — canais e garantias */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div
            className="card flex items-start gap-3"
            style={{ background: 'color-mix(in srgb, var(--success) 6%, white)' }}
          >
            <MessageCircle className="h-5 w-5 shrink-0 mt-0.5" style={{ color: 'var(--success)' }} />
            <div>
              <p className="text-sm font-bold" style={{ color: 'var(--text)' }}>
                WhatsApp do lojista
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--text-2)' }}>
                Conecta via QR Code (igual WhatsApp Web). Sai do seu próprio número.
              </p>
            </div>
          </div>

          <div
            className="card flex items-start gap-3"
            style={{ background: 'color-mix(in srgb, var(--primary) 6%, white)' }}
          >
            <Mail className="h-5 w-5 shrink-0 mt-0.5" style={{ color: 'var(--primary)' }} />
            <div>
              <p className="text-sm font-bold" style={{ color: 'var(--text)' }}>
                Email transacional incluso
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--text-2)' }}>
                Quem não tem WhatsApp recebe por email. Domínio próprio, sem custo extra.
              </p>
            </div>
          </div>

          <div
            className="card flex items-start gap-3"
            style={{ background: 'color-mix(in srgb, var(--warning) 6%, white)' }}
          >
            <Zap className="h-5 w-5 shrink-0 mt-0.5" style={{ color: 'var(--warning)' }} />
            <div>
              <p className="text-sm font-bold" style={{ color: 'var(--text)' }}>
                Cupons rastreáveis
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--text-2)' }}>
                Cada cupom enviado é único por cliente. Você vê quem voltou e quanto gerou.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
