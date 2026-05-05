'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
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
  const pathname = usePathname()

  // Fecha quando navega
  useEffect(() => { setOpen(false) }, [pathname])

  // Trava scroll do body quando drawer aberto
  useEffect(() => {
    if (!open) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = original }
  }, [open])

  // ESC pra fechar
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-40 border-b backdrop-blur-md"
        style={{ background: 'rgba(5, 11, 23, .85)', borderColor: 'var(--border)' }}>
        <div className="container-x flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 font-bold text-base">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg glow-blue"
              style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}>
              <Zap className="h-5 w-5" style={{ color: 'white' }} />
            </div>
            <span className="hidden sm:inline" style={{ color: 'var(--text)' }}>
              Gestão <span style={{ color: 'var(--accent)' }}>Smart</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map(n => (
              <Link key={n.href} href={n.href}
                className="text-sm font-medium transition-colors hover:text-white"
                style={{ color: 'var(--text-2)' }}>
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={BRAND.appUrl}
              className="hidden md:inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-white"
              style={{ color: 'var(--muted)' }}>
              Acessar minha conta
            </a>
            <a href={`${BRAND.appUrl}/signup`} className="hidden sm:inline-flex btn-primary !py-2">
              Começar grátis
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border transition-colors hover:bg-slate-800"
              style={{ borderColor: 'var(--border-2)', color: 'var(--text)' }}
              aria-label="Abrir menu"
              aria-expanded={open}>
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer — RENDERIZADO FORA do header pra evitar bug fixed-inside-sticky */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div onClick={() => setOpen(false)}
            className="absolute inset-0 transition-opacity"
            style={{ background: 'rgba(0,0,0,.6)' }}
            aria-hidden="true" />
          <aside className="absolute inset-y-0 right-0 w-72 max-w-[85vw] flex flex-col border-l shadow-2xl"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação">
            <div className="flex h-16 items-center justify-between border-b px-5"
              style={{ borderColor: 'var(--border)' }}>
              <span className="text-base font-bold" style={{ color: 'var(--text)' }}>
                Gestão <span style={{ color: 'var(--accent)' }}>Smart</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border transition-colors hover:bg-slate-800"
                style={{ borderColor: 'var(--border-2)', color: 'var(--muted)' }}
                aria-label="Fechar menu">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
              {NAV.map(n => (
                <Link key={n.href} href={n.href} onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-slate-800"
                  style={{ color: 'var(--text)' }}>
                  {n.label}
                </Link>
              ))}
              <a href={`${BRAND.appUrl}/signup`} onClick={() => setOpen(false)}
                className="mt-4 btn-primary justify-center w-full">
                Começar grátis
              </a>
              <a href={BRAND.appUrl} onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium transition-colors hover:bg-slate-800"
                style={{ borderColor: 'var(--border-2)', color: 'var(--muted)' }}>
                Acessar minha conta
              </a>
              <a href={whatsappLink('Oi! Vim do site, gostaria de saber mais.')}
                target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium border transition-colors hover:bg-slate-800"
                style={{ borderColor: 'var(--border-2)', color: '#25D366' }}>
                Falar no WhatsApp
              </a>
            </nav>
          </aside>
        </div>
      )}
    </>
  )
}
