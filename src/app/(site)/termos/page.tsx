import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Termos de Uso — Gestão Inteligente',
  description: 'Termos e condições de uso da plataforma Gestão Inteligente.',
}

export default function TermosPage() {
  return (
    <article className="container-x py-12 lg:py-16 max-w-3xl">
      <Link href="/" className="inline-flex items-center gap-1.5 text-xs hover:underline mb-6"
        style={{ color: '#8AA8C8' }}>
        <ArrowLeft className="h-3.5 w-3.5" /> Voltar ao site
      </Link>

      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Termos de Uso</h1>
      <p className="text-sm mb-10" style={{ color: '#5A7A9A' }}>
        Última atualização: 26 de abril de 2026 · Versão 1.0
      </p>

      <div className="prose prose-invert max-w-none space-y-6 text-sm leading-relaxed" style={{ color: '#E8F0FE' }}>
        <Section title="1. Aceitação dos termos">
          Ao criar uma conta na plataforma <strong>Gestão Inteligente</strong> (operada pela
          UÉ Cell Imports, CNPJ 35.868.361/0001-39, doravante denominada CONTRATADA), você
          concorda integralmente com estes Termos de Uso. Se não concordar, não utilize o serviço.
        </Section>

        <Section title="2. Descrição do serviço">
          A Gestão Inteligente é uma plataforma SaaS que oferece sistemas integrados de gestão
          empresarial: Gestão Smart (ERP), CheckSmart (assistência técnica), CRM e Meta Ads.
          Cada produto pode ser contratado de forma independente.
        </Section>

        <Section title="3. Conta de usuário">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Você é responsável pela veracidade das informações fornecidas no cadastro.</li>
            <li>Você é responsável por manter sua senha em sigilo.</li>
            <li>Cada conta corresponde a uma empresa (tenant). É proibido compartilhar credenciais entre empresas distintas.</li>
            <li>Em caso de uso indevido suspeito, podemos suspender a conta enquanto investigamos.</li>
          </ul>
        </Section>

        <Section title="4. Período de teste (trial)">
          Novas contas têm 7 dias de uso gratuito com todos os recursos do plano Premium liberados.
          Após esse período, é necessário escolher um plano pago para continuar acessando.
          Dados criados durante o trial permanecem disponíveis pelo prazo de 30 dias após o fim do trial.
        </Section>

        <Section title="5. Planos e pagamento">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Os valores e características de cada plano estão descritos em <Link href="/#planos" className="underline" style={{ color: '#00E5FF' }}>nossa página de planos</Link>.</li>
            <li>A cobrança é mensal (ou anual com 10% de desconto, parcelável em até 12x sem juros).</li>
            <li>Pagamentos em atraso superior a 7 dias resultam em suspensão temporária do acesso.</li>
            <li>Não há fidelidade. Você pode cancelar a qualquer momento — o acesso continua até o fim do período já pago.</li>
          </ul>
        </Section>

        <Section title="6. Garantia de satisfação">
          Oferecemos garantia de 7 dias após a primeira cobrança. Caso não esteja satisfeito,
          devolvemos 100% do valor pago, sem questionamentos.
        </Section>

        <Section title="7. Disponibilidade">
          Empenhamos esforços razoáveis para manter o serviço disponível 24/7, mas não garantimos
          disponibilidade ininterrupta. Manutenções programadas serão comunicadas com antecedência
          mínima de 24h por email.
        </Section>

        <Section title="8. Propriedade intelectual e dados">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>O código, design e marca da plataforma pertencem à CONTRATADA.</li>
            <li>Os dados que você insere (clientes, vendas, produtos, etc) <strong>são seus</strong>.
              Em caso de cancelamento, você pode exportá-los em até 30 dias.</li>
            <li>Não compartilhamos seus dados comerciais com terceiros, salvo por obrigação legal.</li>
          </ul>
        </Section>

        <Section title="9. Limitação de responsabilidade">
          A CONTRATADA não se responsabiliza por:
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>Perda de dados decorrente de mau uso ou ações do próprio usuário.</li>
            <li>Decisões comerciais tomadas com base em relatórios da plataforma.</li>
            <li>Indisponibilidades causadas por terceiros (Supabase, Vercel, Meta, etc).</li>
          </ul>
        </Section>

        <Section title="10. Cancelamento e exclusão de conta">
          Você pode cancelar sua assinatura ou solicitar a exclusão completa da sua conta a
          qualquer momento via WhatsApp ou pelo módulo Configurações. Após exclusão, todos os
          dados são removidos definitivamente em até 30 dias (irrecuperáveis).
        </Section>

        <Section title="11. Alterações destes termos">
          Podemos atualizar estes termos a qualquer momento. Mudanças relevantes serão comunicadas
          por email com antecedência mínima de 30 dias. O uso continuado após a notificação
          configura aceitação dos novos termos.
        </Section>

        <Section title="12. Foro">
          Fica eleito o foro da Comarca de Aracaju/SE para dirimir quaisquer questões relativas
          a estes termos, com renúncia a qualquer outro, por mais privilegiado que seja.
        </Section>

        <Section title="13. Contato">
          Dúvidas sobre estes termos? Fale com a gente:
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li>WhatsApp: (79) 99999-8876</li>
            <li>Email: contato@gestaointeligente.com.br</li>
          </ul>
        </Section>
      </div>
    </article>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-bold mb-3" style={{ color: '#00E5FF' }}>{title}</h2>
      <div style={{ color: '#E8F0FE' }}>{children}</div>
    </section>
  )
}
