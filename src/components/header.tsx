'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { whatsappLink, BRAND } from '@/lib/contact'

const NAV = [
  { href: '/#sistemas',     label: 'Sistemas' },
  { href: '/#diferenciais', label: 'Diferenciais' },
  { href: '/#planos',       label: 'Planos' },
  { href: '/checksmart',    label: 'CheckSmart' },
  { href: '/#faq',          label: 'FAQ' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b backdrop-blur-md"
      style={{ background: 'rgba(8,12,20,.8)', borderColor: '#1E2D45' }}>
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-base">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/30"
            style={{ background: 'linear-gradient(135deg, rgba(0,229,255,.15), rgba(0,255,148,.15))' }}>
            <Zap className="h-5 w-5" style={{ color: '#00E5FF' }} />
          </div>
          <span className="hidden sm:inline">
            Gestão <span style={{ color: '#00E5FF' }}>Inteligente</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV.map(n => (
            <Link key={n.href} href={n.href}
              className="text-sm font-medium hover:text-white transition-colors"
              style={{ color: '#8AA8C8' }}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Link pro sistema — pra clientes que já têm conta. Mesma aba: cliente
              não vai voltar pra landing. */}
          <a href={BRAND.appUrl}
            className="hidden md:inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-white"
            style={{ color: '#8AA8C8' }}>
            Acessar minha conta
          </a>
          <a href={whatsappLink(`Oi! Vim do site da ${BRAND.name}, gostaria de conhecer melhor o sistema.`)}
            target="_blank" rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition-opacity hover:opacity-90"
            style={{ background: '#00E5FF', color: '#080C14' }}>
            Falar no WhatsApp
          </a>
          <button onClick={() => setOpen(true)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border"
            style={{ borderColor: '#1E2D45', color: '#E8F0FE' }}
            aria-label="Abrir menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div onClick={() => setOpen(false)}
            className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.7)' }} />
          <aside className="absolute inset-y-0 right-0 w-72 max-w-[85vw] flex flex-col border-l"
            style={{ background: '#0D1320', borderColor: '#1E2D45' }}>
            <div className="flex h-16 items-center justify-between border-b px-5" style={{ borderColor: '#1E2D45' }}>
              <span className="text-base font-bold">
                Gestão <span style={{ color: '#00E5FF' }}>Inteligente</span>
              </span>
              <button onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border"
                style={{ borderColor: '#1E2D45', color: '#8AA8C8' }}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
              {NAV.map(n => (
                <Link key={n.href} href={n.href} onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-white/5"
                  style={{ color: '#E8F0FE' }}>
                  {n.label}
                </Link>
              ))}
              <a href={whatsappLink('Oi! Vim do site, gostaria de conhecer o sistema.')}
                target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold"
                style={{ background: '#00E5FF', color: '#080C14' }}>
                Falar no WhatsApp
              </a>
              <a href={BRAND.appUrl} onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium"
                style={{ borderColor: '#1E2D45', color: '#8AA8C8' }}>
                Acessar minha conta
              </a>
            </nav>
          </aside>
        </div>
      )}
    </header>
  )
}
