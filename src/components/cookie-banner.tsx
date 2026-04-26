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
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-5 sm:bottom-5 sm:max-w-md z-40 rounded-2xl border p-5 shadow-2xl"
      style={{ background: '#0D1320', borderColor: '#1E2D45', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}
      role="dialog"
      aria-label="Aviso de cookies"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg shrink-0 border"
          style={{ background: 'rgba(255,184,0,.1)', borderColor: 'rgba(255,184,0,.3)' }}>
          <Cookie className="h-5 w-5" style={{ color: '#FFB800' }} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold mb-1.5" style={{ color: '#E8F0FE' }}>
            Usamos cookies essenciais
          </p>
          <p className="text-xs mb-3 leading-relaxed" style={{ color: '#8AA8C8' }}>
            Apenas pra manter você logado e o site funcionando. Sem rastreio de publicidade.
            Detalhes na{' '}
            <Link href="/privacidade" className="underline hover:text-white" style={{ color: '#00E5FF' }}>
              Política de Privacidade
            </Link>.
          </p>
          <button
            onClick={accept}
            className="w-full rounded-lg px-3 py-2 text-xs font-bold transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #00E5FF, #00FF94)', color: '#080C14' }}
          >
            Entendi
          </button>
        </div>
        <button
          onClick={accept}
          className="flex h-7 w-7 items-center justify-center rounded-lg hover:bg-white/5 shrink-0"
          style={{ color: '#5A7A9A' }}
          aria-label="Fechar aviso"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
