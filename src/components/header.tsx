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
      style={{ background: 'rgba(255,255,255,.8)', borderColor: 'var(--border)' }}>
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-base">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg"
            style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}>
            <Zap className="h-5 w-5" style={{ color: 'white' }} />
          </div>
          <span className="hidden sm:inline" style={{ color: 'var(--text)' }}>
            Gestão <span style={{ color: 'var(--primary)' }}>Inteligente</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV.map(n => (
            <Link key={n.href} href={n.href}
              className="text-sm font-medium transition-colors"
              style={{ color: 'var(--text-2)' }}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={BRAND.appUrl}
            className="hidden md:inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
            style={{ color: 'var(--muted)' }}>
            Acessar minha conta
          </a>
          <a href={`${BRAND.appUrl}/signup`}
            className="hidden sm:inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition-all hover:opacity-90"
            style={{ background: 'var(--primary)', color: 'white' }}>
            Começar grátis
          </a>
          <button onClick={() => setOpen(true)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border"
            style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
            aria-label="Abrir menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div onClick={() => setOpen(false)}
            className="absolute inset-0" style={{ background: 'rgba(15,23,42,0.5)' }} />
          <aside className="absolute inset-y-0 right-0 w-72 max-w-[85vw] flex flex-col border-l"
            style={{ background: 'white', borderColor: 'var(--border)' }}>
            <div className="flex h-16 items-center justify-between border-b px-5"
              style={{ borderColor: 'var(--border)' }}>
              <span className="text-base font-bold" style={{ color: 'var(--text)' }}>
                Gestão <span style={{ color: 'var(--primary)' }}>Inteligente</span>
              </span>
              <button onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border"
                style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
              {NAV.map(n => (
                <Link key={n.href} href={n.href} onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium transition-colors"
                  style={{ color: 'var(--text)' }}>
                  {n.label}
                </Link>
              ))}
              <a href={`${BRAND.appUrl}/signup`} onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold"
                style={{ background: 'var(--primary)', color: 'white' }}>
                Começar grátis
              </a>
              <a href={BRAND.appUrl} onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium"
                style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}>
                Acessar minha conta
              </a>
            </nav>
          </aside>
        </div>
      )}
    </header>
  )
}
