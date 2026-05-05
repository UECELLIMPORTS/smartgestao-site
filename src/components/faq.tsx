'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    q: 'Preciso assinar contrato de fidelidade?',
    a: 'Não. Todos os planos são mensais e sem fidelidade. Você cancela quando quiser, com aviso de 7 dias.',
  },
  {
    q: 'Em quanto tempo o sistema fica pronto pra usar?',
    a: 'Setup é feito em até 24 horas após a assinatura. Importamos seus produtos, clientes e configuramos o tenant. Você ganha um treinamento por videoconferência incluso.',
  },
  {
    q: 'Posso testar antes de assinar?',
    a: 'Sim. Agende uma demonstração ao vivo com nosso especialista — vamos mostrar o sistema com dados reais do seu segmento e tirar todas as dúvidas. Depois disso, oferecemos 7 dias de garantia: se não gostar, devolvemos 100% do valor pago.',
  },
  {
    q: 'O CheckSmart está incluso no plano Premium?',
    a: 'Não. O CheckSmart é vendido em plano específico porque atende um nicho diferente (assistência técnica de celulares). Os 3 planos do Gestão Smart cobrem ERP, CRM e Meta Ads. Quem precisa de OS de assistência adiciona o CheckSmart à parte.',
  },
  {
    q: 'Os 4 sistemas conversam entre si?',
    a: 'Sim. Compartilham o mesmo banco de dados. Uma OS finalizada no CheckSmart aparece automaticamente no Financeiro do Gestão Smart, com canal de venda e cliente. Vendas no POS alimentam o CRM. Tudo integrado, em tempo real.',
  },
  {
    q: 'Funciona pelo celular?',
    a: 'Funciona. A interface é responsiva e otimizada — sidebar vira drawer, tabelas viram cards, POS tem barra fixa de finalizar venda. Você gerencia seu negócio do balcão, do estoque ou de casa, sem perder nada.',
  },
  {
    q: 'Como é o suporte?',
    a: 'Suporte por WhatsApp em todos os planos. Plano Básico em horário comercial. Pro com prioridade. Premium com atendimento VIP e onboarding individual.',
  },
  {
    q: 'Posso pagar anual e ter desconto?',
    a: 'Sim. Pagamento anual tem 10% de desconto e pode ser parcelado em até 12x sem juros no cartão.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 lg:py-28" style={{ background: 'var(--bg)' }}>
      <div className="container-x max-w-3xl">
        <div className="text-center">
          <div className="chip mb-4">
            FAQ
          </div>
          <h2 className="display-2" style={{ color: 'var(--text)' }}>
            Perguntas que todo{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              empresário faz.
            </span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} className="rounded-xl border overflow-hidden transition-all"
                style={{
                  background: isOpen ? 'var(--surface-2)' : 'var(--surface)',
                  borderColor: isOpen ? 'rgba(34, 211, 238, .4)' : 'var(--border)',
                  boxShadow: isOpen ? '0 0 0 1px rgba(34, 211, 238, .15), 0 8px 24px rgba(0, 0, 0, .25)' : undefined,
                }}>
                <button onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors"
                  aria-expanded={isOpen}>
                  <span className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{item.q}</span>
                  {isOpen
                    ? <Minus className="h-4 w-4 shrink-0" style={{ color: 'var(--accent)' }} />
                    : <Plus  className="h-4 w-4 shrink-0" style={{ color: 'var(--muted)' }} />
                  }
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
                    {item.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
