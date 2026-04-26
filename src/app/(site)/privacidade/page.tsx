import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Privacidade — Gestão Inteligente',
  description: 'Como tratamos seus dados conforme a LGPD.',
}

export default function PrivacidadePage() {
  return (
    <article className="container-x py-12 lg:py-16 max-w-3xl">
      <Link href="/" className="inline-flex items-center gap-1.5 text-xs hover:underline mb-6"
        style={{ color: '#8AA8C8' }}>
        <ArrowLeft className="h-3.5 w-3.5" /> Voltar ao site
      </Link>

      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Política de Privacidade</h1>
      <p className="text-sm mb-10" style={{ color: '#5A7A9A' }}>
        Em conformidade com a LGPD (Lei nº 13.709/2018) · Última atualização: 26 de abril de 2026
      </p>

      <div className="space-y-6 text-sm leading-relaxed" style={{ color: '#E8F0FE' }}>
        <Section title="1. Quem somos">
          A <strong>Gestão Inteligente</strong> é operada pela UÉ Cell Imports
          (CNPJ 35.868.361/0001-39), com sede em Aracaju/SE. Para fins desta política,
          somos o &quot;CONTROLADOR&quot; dos seus dados.
        </Section>

        <Section title="2. Quais dados coletamos">
          <strong className="block mb-2">Dados de cadastro:</strong>
          Nome completo, email, senha (criptografada), nome da empresa.

          <strong className="block mt-3 mb-2">Dados operacionais (que VOCÊ insere):</strong>
          Cadastro de seus clientes, produtos, vendas, ordens de serviço, configurações da loja.
          Esses dados <strong>são seus</strong> — apenas armazenamos com segurança.

          <strong className="block mt-3 mb-2">Dados técnicos (automáticos):</strong>
          IP, navegador, sistema operacional, log de acesso (data/hora). Usamos pra segurança
          e diagnóstico de problemas.

          <strong className="block mt-3 mb-2">Dados de pagamento (futuro):</strong>
          Quando integrarmos com gateway (Asaas), informações de cartão são processadas pelo
          próprio gateway — nunca tocamos no número do cartão.
        </Section>

        <Section title="3. Pra que usamos seus dados">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Permitir o uso da plataforma (login, sincronização entre módulos, RLS).</li>
            <li>Enviar comunicações operacionais (boas-vindas, alertas, fatura).</li>
            <li>Cumprir obrigações legais (notas fiscais, prevenção a fraude).</li>
            <li>Melhorar o produto (analytics agregado e anônimo de uso).</li>
          </ul>
          <p className="mt-3"><strong>Não vendemos seus dados</strong>. Não usamos pra publicidade de terceiros.</p>
        </Section>

        <Section title="4. Com quem compartilhamos">
          Apenas com fornecedores essenciais ao funcionamento da plataforma:
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>Supabase</strong> (PostgreSQL hospedado): armazenamento seguro dos dados.</li>
            <li><strong>Vercel</strong>: hospedagem da aplicação.</li>
            <li><strong>Asaas</strong> (futuro): processamento de pagamentos recorrentes.</li>
            <li><strong>Resend</strong> (futuro): envio de emails transacionais.</li>
            <li><strong>Meta</strong> (caso conecte Meta Ads): apenas dados de campanhas, conforme sua permissão.</li>
          </ul>
          Cada um possui sua própria política de privacidade e cláusulas LGPD.
        </Section>

        <Section title="5. Onde seus dados ficam">
          Os dados são armazenados em servidores Supabase localizados nos EUA (região us-east-1).
          A transferência internacional ocorre conforme o art. 33 da LGPD com cláusulas contratuais
          padrão de proteção de dados.
        </Section>

        <Section title="6. Por quanto tempo guardamos">
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Conta ativa:</strong> enquanto você usa o serviço.</li>
            <li><strong>Após cancelamento:</strong> 30 dias para você poder exportar seus dados.</li>
            <li><strong>Após exclusão definitiva:</strong> dados removidos em até 7 dias dos sistemas.</li>
            <li><strong>Logs de segurança:</strong> 6 meses (obrigação legal de prevenção a fraude).</li>
          </ul>
        </Section>

        <Section title="7. Cookies">
          Usamos cookies essenciais para o funcionamento (sessão de login). Não usamos
          cookies de publicidade ou tracking de terceiros. Detalhes no banner ao entrar no site.
        </Section>

        <Section title="8. Seus direitos (LGPD)">
          A qualquer momento, você pode:
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>Acessar</strong> seus dados (já tem acesso direto via plataforma).</li>
            <li><strong>Corrigir</strong> dados incorretos (faça nas configurações).</li>
            <li><strong>Exportar</strong> seus dados em formato CSV.</li>
            <li><strong>Excluir</strong> sua conta e todos os dados associados.</li>
            <li><strong>Revogar</strong> consentimentos a qualquer momento.</li>
            <li>Solicitar informações sobre uso e compartilhamento dos seus dados.</li>
          </ul>
          Pra exercer qualquer um, fale com nosso encarregado:
          <strong className="block mt-2" style={{ color: '#00E5FF' }}>contato@gestaointeligente.com.br</strong>
          Respondemos em até 15 dias úteis.
        </Section>

        <Section title="9. Segurança">
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Senhas armazenadas com hash bcrypt (nunca em texto puro).</li>
            <li>Conexões via HTTPS/TLS.</li>
            <li>Isolamento de dados entre tenants via RLS (Row-Level Security).</li>
            <li>Backups automáticos diários (Supabase).</li>
            <li>Acesso administrativo restrito a equipe autorizada.</li>
          </ul>
        </Section>

        <Section title="10. Crianças e adolescentes">
          A plataforma é destinada a empresas e profissionais maiores de 18 anos. Não coletamos
          intencionalmente dados de menores.
        </Section>

        <Section title="11. Alterações nesta política">
          Atualizações relevantes serão comunicadas por email com antecedência de 30 dias.
        </Section>

        <Section title="12. Encarregado de Dados (DPO)">
          Para questões sobre proteção de dados, fale com:
          <ul className="list-disc pl-5 space-y-1.5 mt-2">
            <li><strong>Email:</strong> contato@gestaointeligente.com.br</li>
            <li><strong>WhatsApp:</strong> (79) 99999-8876</li>
            <li><strong>Endereço:</strong> Aracaju/SE, Brasil</li>
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
