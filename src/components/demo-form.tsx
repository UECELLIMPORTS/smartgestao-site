'use client'

import { useState } from 'react'
import { ArrowRight, Loader2 } from 'lucide-react'
import { whatsappLink } from '@/lib/contact'

const SEGMENTOS = [
  'Loja física (varejo)',
  'Assistência técnica de celular',
  'E-commerce / vendas online',
  'Restaurante / food service',
  'Serviços (estética, salão, etc)',
  'Outro',
]

const PORTES = [
  'Estou começando',
  'Até 50 vendas/mês',
  '50–200 vendas/mês',
  '200–1.000 vendas/mês',
  'Mais de 1.000 vendas/mês',
]

const INTERESSES = [
  'Gestão Smart (ERP)',
  'CheckSmart (assistência técnica)',
  'Os 4 sistemas (pacote completo)',
  'Não sei ainda — preciso de ajuda',
]

const inputCls = 'w-full rounded-lg border px-4 py-3 text-sm outline-none focus:border-cyan-400/60 transition-colors'
const inputStyle = { background: '#0F1A2B', borderColor: '#1E2D45', color: '#E8F0FE' }

export function DemoForm() {
  const [name, setName]           = useState('')
  const [whatsapp, setWhatsapp]   = useState('')
  const [segmento, setSegmento]   = useState('')
  const [porte, setPorte]         = useState('')
  const [interesse, setInteresse] = useState('')
  const [submitting, setSubmitting] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    const message =
      `Olá! Quero agendar uma demonstração da Gestão Inteligente.\n\n` +
      `Nome: ${name}\n` +
      `WhatsApp: ${whatsapp}\n` +
      `Segmento: ${segmento || '—'}\n` +
      `Porte: ${porte || '—'}\n` +
      `Interesse principal: ${interesse || '—'}`
    window.open(whatsappLink(message), '_blank')
    setSubmitting(false)
  }

  const ready = name.trim().length >= 3 && whatsapp.trim().length >= 8

  return (
    <form onSubmit={handleSubmit} className="mt-10 rounded-2xl border p-6 sm:p-8 space-y-5"
      style={{ background: '#0D1320', borderColor: '#1E2D45' }}>
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider" style={{ color: '#8AA8C8' }}>
          Seu nome *
        </label>
        <input value={name} onChange={e => setName(e.target.value)}
          placeholder="Ex: João Silva" className={inputCls} style={inputStyle} required />
      </div>

      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider" style={{ color: '#8AA8C8' }}>
          WhatsApp *
        </label>
        <input value={whatsapp} onChange={e => setWhatsapp(e.target.value)}
          placeholder="(00) 00000-0000" type="tel" className={inputCls} style={inputStyle} required />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider" style={{ color: '#8AA8C8' }}>
            Segmento
          </label>
          <select value={segmento} onChange={e => setSegmento(e.target.value)}
            className={inputCls} style={inputStyle}>
            <option value="">— Selecione —</option>
            {SEGMENTOS.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider" style={{ color: '#8AA8C8' }}>
            Porte
          </label>
          <select value={porte} onChange={e => setPorte(e.target.value)}
            className={inputCls} style={inputStyle}>
            <option value="">— Selecione —</option>
            {PORTES.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider" style={{ color: '#8AA8C8' }}>
          Interesse principal
        </label>
        <select value={interesse} onChange={e => setInteresse(e.target.value)}
          className={inputCls} style={inputStyle}>
          <option value="">— Selecione —</option>
          {INTERESSES.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>

      <button type="submit" disabled={!ready || submitting}
        className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold transition-opacity hover:opacity-90 disabled:opacity-40"
        style={{ background: 'linear-gradient(135deg, #00E5FF, #00FF94)', color: '#080C14' }}>
        {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
        {submitting ? 'Abrindo WhatsApp...' : 'Continuar no WhatsApp'}
      </button>

      <p className="text-center text-[11px]" style={{ color: '#5A7A9A' }}>
        Ao clicar, você abre o WhatsApp com a mensagem pré-preenchida. Sem spam.
      </p>
    </form>
  )
}
