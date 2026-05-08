import { Mic, ShoppingCart, Package, UserPlus, FileText, Zap, Clock, Check } from 'lucide-react'

const ACOES = [
  {
    icon: ShoppingCart,
    titulo: 'Frente de caixa',
    exemplo: '"Vender capa transparente do iPhone 15 por 80 reais no Pix"',
    nota: 'Lança a venda, baixa do estoque e fecha o pedido.',
  },
  {
    icon: Package,
    titulo: 'Estoque',
    exemplo: '"Entrou 10 películas de vidro com custo de 15 reais cada"',
    nota: 'Atualiza saldo, registra custo médio e gera o histórico.',
  },
  {
    icon: UserPlus,
    titulo: 'Cadastro de cliente',
    exemplo: '"Cadastra a Maria Silva, telefone 31 99999-9999"',
    nota: 'Pronto. Cliente novo já aparece no PDV pra próxima venda.',
  },
  {
    icon: FileText,
    titulo: 'Nota fiscal',
    exemplo: '"Emite NFC-e da última venda"',
    nota: 'Consulta a SEFAZ, gera o XML e devolve o link da nota.',
  },
]

export function VoiceEntry() {
  return (
    <section id="voz" className="py-20 lg:py-28 relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      {/* Glow no fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, rgba(168,85,247,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="container-x relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4"
            style={{ background: 'rgba(168,85,247,0.15)', color: '#C4B5FD', border: '1px solid rgba(168,85,247,0.4)' }}>
            <Sparkle /> NOVO · COMANDO DE VOZ
          </div>

          <h2 className="display-2" style={{ color: 'var(--text)' }}>
            Vendeu, deu baixa, cadastrou cliente e emitiu nota{' '}
            <span style={{
              background: 'linear-gradient(135deg, #A855F7 0%, #22D3EE 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              só falando.
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed" style={{ color: 'var(--text-2)' }}>
            Enquanto o cliente está na sua frente, você não tem mão livre pra digitar.{' '}
            <strong style={{ color: 'var(--text)' }}>
              No Gestão Smart, você fala — o sistema executa.
            </strong>{' '}
            Frente de caixa, estoque, cadastro de cliente e até NF-e/NFC-e: tudo por voz, em
            português, no seu próprio celular.
          </p>
        </div>

        {/* Estatísticas curtas */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
          <div className="rounded-xl p-4 text-center"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <Clock className="h-5 w-5 mx-auto mb-1" style={{ color: '#A855F7' }} />
            <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
              Tempo médio por venda
            </p>
            <p className="mt-1 text-xl font-bold" style={{ color: 'var(--text)' }}>3× mais rápido</p>
          </div>
          <div className="rounded-xl p-4 text-center"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <Zap className="h-5 w-5 mx-auto mb-1" style={{ color: '#22D3EE' }} />
            <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
              Funciona em
            </p>
            <p className="mt-1 text-xl font-bold" style={{ color: 'var(--text)' }}>Celular ou PC</p>
          </div>
          <div className="rounded-xl p-4 text-center"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <Mic className="h-5 w-5 mx-auto mb-1" style={{ color: '#10B981' }} />
            <p className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
              Pra ativar
            </p>
            <p className="mt-1 text-xl font-bold" style={{ color: 'var(--text)' }}>1 toque ou voz</p>
          </div>
        </div>

        {/* 4 cards de uso */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ACOES.map(a => {
            const Icon = a.icon
            return (
              <article key={a.titulo} className="rounded-2xl p-5 flex flex-col"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg mb-3"
                  style={{ background: 'rgba(168,85,247,0.15)' }}>
                  <Icon className="h-5 w-5" style={{ color: '#C4B5FD' }} />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: 'var(--text)' }}>{a.titulo}</h3>
                <p className="rounded-lg px-3 py-2 text-xs italic mb-2"
                  style={{ background: 'rgba(168,85,247,0.06)', border: '1px solid rgba(168,85,247,0.2)', color: '#C4B5FD' }}>
                  🎙️ {a.exemplo}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-2)' }}>
                  {a.nota}
                </p>
              </article>
            )
          })}
        </div>

        {/* Bullets de objeção */}
        <div className="mt-12 max-w-3xl mx-auto rounded-2xl p-6"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <h3 className="text-base font-bold mb-4" style={{ color: 'var(--text)' }}>
            Por que isso muda o seu dia:
          </h3>
          <ul className="space-y-2.5 text-sm" style={{ color: 'var(--text-2)' }}>
            {[
              <>Atende e <strong style={{ color: 'var(--text)' }}>vende ao mesmo tempo</strong> — sem dar as costas pro cliente pra digitar no PC.</>,
              <>Mãos sujas no balcão de assistência? <strong style={{ color: 'var(--text)' }}>Fala e pronto.</strong></>,
              <>Reposição de estoque enquanto fecha caixa: <strong style={{ color: 'var(--text)' }}>"entrou 20 fones"</strong> e tá lançado.</>,
              <>Cadastra cliente novo no caixa em <strong style={{ color: 'var(--text)' }}>3 segundos</strong>, sem teclado virtual lento.</>,
              <>Emite NFC-e <strong style={{ color: 'var(--text)' }}>sem abrir 4 telas</strong> — fala e a nota cai no e-mail do cliente.</>,
              <><strong style={{ color: 'var(--text)' }}>Reconhece português brasileiro</strong> bem (inclusive sotaque, gírias regionais e valores em real).</>,
            ].map((txt, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="h-4 w-4 mt-0.5 shrink-0" style={{ color: 'var(--success)' }} />
                <span>{txt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a href="/signup?plan=basico" className="btn-primary inline-flex">
            Testar 7 dias grátis →
          </a>
          <p className="mt-3 text-xs" style={{ color: 'var(--muted)' }}>
            Comando de Voz disponível desde o plano <strong>Básico</strong>. NF-e/NFC-e por voz no <strong>Pro+</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}

function Sparkle() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z"/>
    </svg>
  )
}
