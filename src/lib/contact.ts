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
  appUrl:      'https://app.gestaosmarterp.online',          // sistema (login)
  signupUrl:   'https://app.gestaosmarterp.online/signup',   // signup público
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
      '🎙️ Comando de Voz (vender, estoque, clientes — sem digitar)',
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
      '🎙️ Comando de Voz com NF-e/NFC-e (emite nota só falando)',
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
      'CRM Premium completo (Inbox WhatsApp + Pipeline + Status + Programadas)',
      'Atribuição por canal e CAC',
      'Suporte VIP',
    ],
    notIncluded: [],
    bundleNote: 'CRM Premium incluso (R$ 157 valor à parte)',
  },
}

// ─── CheckSmart — produto isolado pra assistência técnica ─────────────
export const PLANOS_CHECKSMART = {
  basico: {
    name:        'Básico',
    monthly:     47,
    description: 'Pra quem tá começando na assistência técnica',
    features: [
      'OS multi-aparelho com checklist',
      'PDF de entrada com assinatura do cliente',
      'Catálogo de marcas/modelos pronto',
      'Cadastro de clientes',
      'Suporte por WhatsApp',
    ],
    notIncluded: [
      'Controle de peças com custo',
      'Mensageria automática',
    ],
  },
  pro: {
    name:        'Pro',
    monthly:     67,
    description: 'Pra assistência que vende peças e quer controlar custos',
    highlighted: true,
    features: [
      'Tudo do Básico, mais:',
      'Controle de peças com custo + lucro',
      'Escudo jurídico em aparelho apagado',
      'Adendo automático no PDF',
      'Relatórios de OS',
      'Suporte prioritário',
    ],
    notIncluded: [
      'Mensageria automática',
    ],
  },
  premium: {
    name:        'Premium',
    monthly:     97,
    description: 'A operação completa de assistência técnica',
    features: [
      'Tudo do Pro, mais:',
      'Mensageria automática (OS pronta, garantia, win-back)',
      'Aniversário com cupom rastreável',
      'Email transacional',
      'Suporte VIP',
    ],
    notIncluded: [],
  },
}

// ─── CRM — produto isolado (pra quem só quer atendimento WhatsApp) ────
export const PLANOS_CRM = {
  basico: {
    name:        'Básico',
    monthly:     97,
    description: 'Inbox WhatsApp + Pipeline kanban',
    features: [
      'Inbox WhatsApp com seu próprio número',
      'Pipeline kanban (novo → ganho)',
      'Cadastro de leads',
      'Respostas rápidas',
      'Suporte por WhatsApp',
    ],
    notIncluded: [
      'Status WhatsApp pelo CRM',
      'Mensagens programadas',
      'Etiquetas avançadas',
    ],
  },
  pro: {
    name:        'Pro',
    monthly:     137,
    description: 'Pra quem precisa de organização e segmentação',
    highlighted: true,
    features: [
      'Tudo do Básico, mais:',
      'Etiquetas (tags) com cor',
      'Filtros por etiqueta',
      'Welcome message automática',
      'Relatórios do funil',
      'Suporte prioritário',
    ],
    notIncluded: [
      'Status WhatsApp pelo CRM',
      'Mensagens programadas em massa',
    ],
  },
  premium: {
    name:        'Premium',
    monthly:     157,
    description: 'O CRM completo pra escalar atendimento',
    features: [
      'Tudo do Pro, mais:',
      'Status WhatsApp pelo CRM (postar + agendar)',
      'Mensagens programadas (1 lead, etiqueta ou todos)',
      'Mensagens com mídia (imagem, vídeo, áudio)',
      'Comentários nos status no Inbox',
      'Suporte VIP',
    ],
    notIncluded: [],
  },
}

/** Add-on CheckSmart pra qualquer plano do SmartERP. R$ 47 fixo (50% off do isolado R$ 97). */
export const CHECKSMART_ADDON = {
  monthly:     47,      // preço como add-on
  fullPrice:   97,      // CheckSmart Premium isolado (anchoring "50% off")
  level:       'premium', // qual plano do CheckSmart o add-on entrega
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
