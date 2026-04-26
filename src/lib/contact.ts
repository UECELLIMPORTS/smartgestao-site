/**
 * Configuração central de contato/marca.
 * Mude aqui pra atualizar tudo o site.
 */

export const BRAND = {
  name:        'Gestão Inteligente',
  tagline:     'Sistemas que fazem seu negócio crescer',
  whatsapp:    '5579999998876',          // só dígitos, formato internacional (55 + DDD + número)
  email:       'contato@gestaointeligente.com.br',
  city:        'Aracaju · SE',
  appUrl:      'https://smarterp-theta.vercel.app',          // sistema (login)
  signupUrl:   'https://smarterp-theta.vercel.app/signup',   // signup público
}

/** Gera link wa.me com mensagem pré-preenchida. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`
}

export const PLANOS = {
  basico: {
    name:        'Básico',
    monthly:     97,
    description: 'Pra quem está começando e precisa do essencial',
    features: [
      'Frente de Caixa (POS)',
      'Controle de Estoque',
      'Financeiro básico',
      'Cadastro de Clientes',
      'Suporte por WhatsApp',
    ],
    notIncluded: [
      'Relatórios avançados e Dashboard',
      'Integração Meta Ads',
      'CRM completo',
    ],
  },
  pro: {
    name:        'Pro',
    monthly:     147,
    description: 'Pra quem quer entender os números do negócio',
    highlighted: true,
    features: [
      'Tudo do Básico, mais:',
      'Dashboards completos',
      'Relatórios avançados (Break-even, Origem×Canal, etc.)',
      'Análise de Canais de Venda',
      'Diagnóstico de Lucro',
      'Suporte prioritário',
    ],
    notIncluded: [
      'Integração Meta Ads',
      'CRM completo',
    ],
  },
  premium: {
    name:        'Premium',
    monthly:     197,
    description: 'O sistema completo pra escalar com inteligência',
    features: [
      'Tudo do Pro, mais:',
      'Integração Meta Ads (campanhas, ROAS, alertas)',
      'CRM completo',
      'Atribuição por canal e CAC',
      'Suporte VIP',
    ],
    notIncluded: [],
  },
}

/** Desconto aplicado quando o cliente paga 12 meses de uma vez. */
export const ANNUAL_DISCOUNT = 0.10

/** Calcula valor anual com desconto + parcelas. */
export function annualPricing(monthly: number) {
  const annualFull = monthly * 12
  const annual     = annualFull * (1 - ANNUAL_DISCOUNT)
  const monthlyEq  = annual / 12   // valor mensal equivalente após desconto
  const installment = annual / 12  // se parcelado em 12x sem juros
  return { annualFull, annual, monthlyEq, installment, savings: annualFull - annual }
}
