import type { Metadata } from 'next'
import { DemoForm } from '@/components/demo-form'

export const metadata: Metadata = {
  title: 'Agendar Demonstração — Gestão Inteligente',
  description: 'Conversa de 15 minutos com um especialista pra entender se a Gestão Inteligente é pro seu negócio.',
}

export default function DemoPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-x max-w-xl">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Agendar demonstração
          </h1>
          <p className="mt-4 text-base" style={{ color: '#8AA8C8' }}>
            Preenche os dados abaixo. Vamos te chamar no WhatsApp em até 1 hora útil
            pra confirmar o melhor horário pra demo.
          </p>
        </div>
        <DemoForm />
      </div>
    </section>
  )
}
