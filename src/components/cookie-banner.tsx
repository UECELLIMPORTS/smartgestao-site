'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Cookie, X } from 'lucide-react'

const STORAGE_KEY = 'gestaointeligente_cookies_accepted_v1'

export function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Mostra só se ainda não aceitou (evita flash em quem já decidiu)
    if (typeof window === 'undefined') return
    const accepted = localStorage.getItem(STORAGE_KEY)
    if (!accepted) setShow(true)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ at: new Date().toISOString() }))
    setShow(false)
  }

  if (!show) return null

  return (
    <div
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-5 sm:bottom-5 sm:max-w-md z-40 rounded-2xl border bg-white p-5"
      style={{ borderColor: 'var(--border)', boxShadow: '0 10px 40px rgba(15,23,42,.15)' }}
      role="dialog"
      aria-label="Aviso de cookies"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg shrink-0"
          style={{ background: 'var(--warning-light)', border: '1px solid color-mix(in srgb, var(--warning) 25%, transparent)' }}>
          <Cookie className="h-5 w-5" style={{ color: 'var(--warning)' }} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold mb-1.5" style={{ color: 'var(--text)' }}>
            Usamos cookies essenciais
          </p>
          <p className="text-xs mb-3 leading-relaxed" style={{ color: 'var(--text-2)' }}>
            Apenas pra manter você logado e o site funcionando. Sem rastreio de publicidade.
            Detalhes na{' '}
            <Link href="/privacidade" className="underline transition-colors hover:opacity-80" style={{ color: 'var(--primary)' }}>
              Política de Privacidade
            </Link>.
          </p>
          <button
            onClick={accept}
            className="w-full rounded-lg px-3 py-2 text-xs font-bold transition-opacity hover:opacity-90"
            style={{ background: 'var(--primary)', color: 'white' }}
          >
            Entendi
          </button>
        </div>
        <button
          onClick={accept}
          className="flex h-7 w-7 items-center justify-center rounded-lg hover:bg-slate-50 shrink-0"
          style={{ color: 'var(--muted)' }}
          aria-label="Fechar aviso"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
