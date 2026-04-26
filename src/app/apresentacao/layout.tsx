/**
 * Layout dedicado pra apresentação — substitui o RootLayout (sem Header/Footer/FAB).
 * O Next.js compõe layouts aninhados; como o RootLayout em /app/layout.tsx
 * já chama Header e Footer, esse layout filho não consegue removê-los —
 * portanto a página /apresentacao usa CSS pra esconder esses elementos
 * via `body[data-page="apresentacao"]`.
 *
 * Mais limpo seria mover Header/Footer pra um (route group) — fica pra refactor depois.
 */

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:       'Apresentação · Gestão Inteligente',
  description: 'Apresentação comercial dos sistemas Gestão Inteligente',
  robots:      { index: false, follow: false },   // não indexa no Google
}

export default function ApresentacaoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
