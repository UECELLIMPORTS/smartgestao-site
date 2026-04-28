import Link from 'next/link'
import { Zap, Mail, MapPin } from 'lucide-react'
import { whatsappLink, BRAND } from '@/lib/contact'

export function Footer() {
  return (
    <footer className="border-t mt-20" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
      <div className="container-x py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1 — Marca */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 font-bold text-lg">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg"
                style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}>
                <Zap className="h-5 w-5" style={{ color: 'white' }} />
              </div>
              <span style={{ color: 'var(--text)' }}>
                Gestão <span style={{ color: 'var(--primary)' }}>Inteligente</span>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>
              Plataforma 4-em-1 que une gestão, atendimento, marketing e relacionamento num só lugar.
              Pra empresários que querem decidir com dados, não com achismo.
            </p>
          </div>

          {/* Coluna 2 — Sistemas */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--muted)' }}>Sistemas</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#sistemas" className="transition-colors hover:text-slate-900" style={{ color: 'var(--text-2)' }}>Gestão Smart</Link></li>
              <li><Link href="/#sistemas" className="transition-colors hover:text-slate-900" style={{ color: 'var(--text-2)' }}>CRM</Link></li>
              <li><Link href="/#sistemas" className="transition-colors hover:text-slate-900" style={{ color: 'var(--text-2)' }}>Meta Ads</Link></li>
              <li><Link href="/checksmart" className="transition-colors hover:text-slate-900" style={{ color: 'var(--text-2)' }}>CheckSmart</Link></li>
            </ul>
          </div>

          {/* Coluna 3 — Contato */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--muted)' }}>Contato</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={whatsappLink('Oi! Vim do site, gostaria de saber mais.')}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-slate-900"
                  style={{ color: 'var(--text-2)' }}>
                  <span className="text-base">📲</span> WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-slate-900"
                  style={{ color: 'var(--text-2)' }}>
                  <Mail className="h-4 w-4" /> {BRAND.email}
                </a>
              </li>
              <li className="flex items-center gap-2" style={{ color: 'var(--text-2)' }}>
                <MapPin className="h-4 w-4" /> {BRAND.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}>
          <p>© {new Date().getFullYear()} {BRAND.name}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <Link href="/demo" className="transition-colors hover:text-slate-900">Demo</Link>
            <span>·</span>
            <Link href="/termos" className="transition-colors hover:text-slate-900">Termos</Link>
            <span>·</span>
            <Link href="/privacidade" className="transition-colors hover:text-slate-900">Privacidade</Link>
            <span>·</span>
            <a href={`mailto:${BRAND.email}`} className="transition-colors hover:text-slate-900">Suporte</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
