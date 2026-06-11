import { Service, Project, Testimonial, ProcessStep, Differential } from './types';

export const SERVICES: Service[] = [
  {
    id: 'creation-sites',
    title: 'Criação de Sites',
    description: 'Websites institucionais premium focados em autoridade e conversão imediata do visitante.',
    iconName: 'Laptop',
    category: 'Design & Code',
    detailedDescription: 'Sites institucionais elegantes combinando layouts exclusivos, animações premium do ecossistema Motion e otimização cirúrgica de performance. Desenhados para grandes marcas que entendem que seu site é a sua vitrine digital.',
    features: ['Código limpo sem templates engessados', 'Design exclusivo sob medida', 'Hospedagem ultra veloz global', 'Suporte pós-lançamento de excelência']
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description: 'Páginas de alta conversão otimizadas para tráfego pago e campanhas de lançamento.',
    iconName: 'Rocket',
    category: 'Marketing Tech',
    detailedDescription: 'Landing pages cirúrgicas voltadas para conversão máxima. Do design do botão aos formulários interativos, estruturamos cada pixel para convencer e transformar cliques em clientes qualificados.',
    features: ['Estrutura focada em neuromarketing', 'A/B testing integrado de fábrica', 'Design responsivo hiperveloz', 'Métricas e Analytics em tempo real']
  },
  {
    id: 'apps',
    title: 'Aplicativos Mobiles',
    description: 'Desenvolvimento nativo e híbrido com UX/UI state-of-the-art para iOS e Android.',
    iconName: 'Smartphone',
    category: 'App Development',
    detailedDescription: 'Aplicativos mobiles robustos e incrivelmente fluidos. Criamos arquiteturas sólidas, integramos sensores, push notifications, assinaturas e offline storage com uma experiência visual inesquecível.',
    features: ['Desenvolvimento nativo ou híbrido de alta performance', 'Interfaces ultra responsivas e fluidas', 'Integração completa com APIs internas e externas', 'Publicação descomplicada nas Stores (App Store e Play Store)']
  },
  {
    id: 'synthesis-sistemas',
    title: 'Sistemas Web',
    description: 'SaaS e dashboards complexos construídos com tecnologias escaláveis e seguras.',
    iconName: 'Cpu',
    category: 'Enterprise Architectures',
    detailedDescription: 'Sistemas integrados de retaguarda, CRMs personalizados e plataformas SaaS em larga escala. Entregamos painéis gerenciais robustos utilizando React, D3/Recharts e integrações de nuvem de ponta.',
    features: ['Dashboards interativos de altíssima performance', 'Bancos de dados estruturados inovadores', 'Níveis de controle e permissão refinados', 'Autenticação de nível bancário']
  },
  {
    id: 'trafego-pago',
    title: 'Tráfego Pago',
    description: 'Gestão estratégica de anúncios no Google e Meta focada em ROI e escala de vendas.',
    iconName: 'TrendingUp',
    category: 'Growth Marketing',
    detailedDescription: 'Gerenciamento profissional de campanhas de anúncios nas principais redes modernas (Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads). Foco inabalável no Custo por Aquisição (CPA) e Retorno de Investimento (ROI).',
    features: ['Estudo aprofundado dos públicos-alvo', 'Criativos dinâmicos focados em conversão', 'Configuração refinada de pixel e tracking de eventos', 'Relatórios transparentes semanais']
  },
  {
    id: 'automatizacoes',
    title: 'Automações & IA',
    description: 'Otimização de processos internos e funis de venda através de automações inteligentes.',
    iconName: 'Zap',
    category: 'Automation Enterprise',
    detailedDescription: 'Conectamos suas ferramentas de vendas ao seu ERP, automatizamos fluxos complexos de atendimento no WhatsApp, CRM, e-mails e integramos inteligências artificiais conversacionais modernas de ponta.',
    features: ['Eliminação completa de tarefas repetitivas', 'Integração robusta de APIs e Webhooks', 'Inteligência Artificial de atendimento integrada', 'Redução drástica de tempo de resposta operacional']
  }
];

export const DIFFERENTIALS: Differential[] = [
  {
    title: 'Alta Performance',
    description: 'Código limpo, otimizado e estritamente polido para carregamentos instantâneos abaixo de 1s.',
    iconName: 'Gauge'
  },
  {
    title: 'SEO Otimizado',
    description: 'Estruturação semântica milimétrica preparada para as primeiras posições de busca orgânica.',
    iconName: 'Search'
  },
  {
    title: 'Segurança Rígida',
    description: 'Protocolos de segurança e proteção de tráfego de ponta de fábrica (HTTPS, CORS configurables).',
    iconName: 'Shield'
  },
  {
    title: 'Design Premium',
    description: 'Elegância minimalista personalizada que eleva consideravelmente o valor percebido da sua marca.',
    iconName: 'Sparkles'
  },
  {
    title: 'Integrações sem Fricção',
    description: 'Sua plataforma conectada com perfeição às melhores soluções financeiras e administrativas via API.',
    iconName: 'Columns4'
  },
  {
    title: 'Escalabilidade Real',
    description: 'Desenho de arquitetura robusto concebido para prosperar independentemente do volume de tráfego.',
    iconName: 'Expand'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Compreendemos detalhadamente suas dores de vendas, necessidades de produto e ambição estratégica.',
    details: ['Mapeamento de objetivos comerciais', 'Análise profunda da concorrência local e global', 'Estudo de audiência digital']
  },
  {
    number: '02',
    title: 'Planejamento',
    description: 'Definimos o escopo, arquitetura técnica refinada, cronogramas seguros e a melhor combinação de stack.',
    details: ['Documentação detalhada de escopo', 'Definição de cronograma e metas de entregas', 'Escolha inteligente de stacks tecnológicas']
  },
  {
    number: '03',
    title: 'Design',
    description: 'Criação de soluções de UI/UX exclusivas em alta fidelidade com micro-interações incríveis.',
    details: ['Criação de wireframes interativos', 'Layouts premium desenhados pixel a pixel', 'Aprovação conjunta contínua']
  },
  {
    number: '04',
    title: 'Desenvolvimento',
    description: 'Codificação limpa, rápida e totalmente semântica utilizando o estado da arte do desenvolvimento web.',
    details: ['Esrita de código limpo e sustentável', 'Integrações ultra seguras de APIs', 'Animações rítmicas robustas e naturais']
  },
  {
    number: '05',
    title: 'Publicação',
    description: 'Deploy seguro em cloud distribuída globalmente após bateria exaustiva de testes de stress.',
    details: ['Checklist completo de SEO e acessibilidade', 'Bateria rigorosa de testes cross-device', 'Monitoramento instantâneo pós-live']
  },
  {
    number: '06',
    title: 'Crescimento',
    description: 'Iniciamos campanhas táticas, otimização contínua de taxas de conversão e escalabilidade progressiva.',
    details: ['Campanhas estruturadas de tráfego pago', 'Análise semanal de funil e calor (Heatmaps)', 'Evolução constante de features de valor']
  }
];

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'feconecta',
    title: 'FéConecta',
    category: 'Aplicativo Mobile',
    description: 'Rede social cristã idealizada para promover conexões profundas e engajamento contínuo na comunidade.',
    longDescription: 'O FéConecta revoluciona a forma como cristãos se relacionam diariamente. Desenvolvemos uma rede social mobile exclusiva unindo feeds em tempo real, mural de orações dinâmicas, agenda unificada de celebrações e um portal nativo de doações recorrentes extremamente seguro.',
    imageUrl: '/feconecta-mockup.png',
    mockupType: 'smartphone',
    scope: ['UI/UX Design', 'React Native App', 'Firebase Realtime DB', 'Firebase Auth', 'Elegantes Micro-interações'],
    client: 'Instituto Conecta América',
    year: '2025',
    result: 'Mais de 15.000 usuários ativos e crescimento orgânico mensal de 47% no engajamento diário.',
    accentColor: 'indigo'
  },
  {
    id: 'appifarma',
    title: 'AppiFarma',
    category: 'Dashboard & Logística',
    description: 'Dashboard analítico complexo completo voltado para gestão integrada de suprimentos e inteligência farmacêutica.',
    longDescription: 'Criamos para a AppiFarma uma solução de controle e monitoramento de lotes farmacêuticos em tempo real de última geração. O dashboard foi construído para lidar com tráfego intenso de dados, provendo visualizações ricas das rotas comerciais através de mapas interativos, estimativa de reposição preditiva baseada em IA e relatórios cirúrgicos de lucratividade.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHhU9OPECRx7fLqj6AW5u9Y77bQEJPdUPdXM35vcu-M7IEjqc1jboBcvOcRSFCGogP_iWRpNU_v1G2Rj-lcf3___r08xXsEDl6Xr1ROLz68amHJbXwFVE-xhjrChQhF6hIbKJVTkeBaGxjRUacKIdu2DyzJenz5U-OhpLFAUsr1dXDMYJ9ork_JSJNcRYiSZgdC3-mbwZvgw39Lm8xjQi-Pn4JwDP6xswYfiSZvYfdkR8-rVWXB-AspqpWXFrUe5wfE_e-70OmmyU',
    mockupType: 'tablet',
    scope: ['Fullstack Next.js', 'Dashboard Analytics D3', 'Real-time WebSocket Integrations', 'PostgreSQL Cloud Storage', 'Complex Layout Architectures'],
    client: 'AppiFarma Logística',
    year: '2025',
    result: 'Redução drástica de 32% no desperdício de refugo por expiração e aumento de 20% na eficiência operacional geral.',
    accentColor: 'cyan'
  },
  {
    id: 'cardapio-whatsapp',
    title: 'Cardápio SaaS',
    category: 'SaaS & Automação',
    description: 'Plataforma multi-tenant para lojistas gerenciarem pedidos via dashboard com notificações integradas no WhatsApp.',
    longDescription: 'Uma plataforma SaaS escalável que reimagina o ecossistema de delivery. O sistema opera em um modelo de assinaturas recorrentes, oferecendo um cardápio digital de alta conversão. Ao finalizar uma compra, o pedido é enviado diretamente para um Dashboard robusto de gestão do lojista e dispara simultaneamente uma notificação via WhatsApp, garantindo controle total, rapidez no aceite e economia com taxas de marketplaces.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe1ibxiyT2oQb792Xi7QWraOW55rLY4m2pVAuxPtnwmyM2_WUxOsnKBDOhNu-diCSpB3VGjaNuJKgRmhRLXA5Y94q7exMelwCAv593O2-U5YNroP7AyZoi6XQbxUR_nPAe2eShN7q5MEIJWuASv3QMZn5QNi37upzJc5RIZ2XAIKxtt7DMEx1s09ZkVRSVuvZAmI2inxfLLSptqT7sKcP0o3OS4ubbZ1U0ygpE8r6pt2IGbzUpXKEbq3npA20mDCa_bOLj2qYvXPU',
    mockupType: 'smartphone',
    scope: ['Front-End React Web', 'Tailwind Fluid Layout', 'WhatsApp API Webhooks', 'Autopay PIX Integration', 'PWA Optimized Performance'],
    client: 'Bistrô São Paulo Group',
    year: '2024',
    result: 'Aumento real de 40% no faturamento bruto direto pela economia de taxas de marketplaces tradicionais de terceiros.',
    accentColor: 'emerald'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'A Ícone Digital não apenas entregou um site, eles construíram uma verdadeira máquina de vendas que elevou nosso posicionamento da noite para o dia. O esquadro técnico de design, a obsessão pela performance e a elegância cirúrgica nas animações mudaram completamente o nosso patamar competitivo.',
    author: 'Ricardo Silveira',
    role: 'CEO & Fundador',
    company: 'TechNext Global',
    projectRelation: 'AppiFarma Core Engine'
  },
  {
    id: 't2',
    quote: 'O profissionalismo, o rigor técnico em cada etapa e a qualidade estética final nos surpreendeu. Desde o primeiro contato estratégico ao onboarding de crescimento, a agência atuou como parceira autêntica de tecnologia.',
    author: 'Mariana Drummond',
    role: 'Diretora de Marketing',
    company: 'Instituto Conecta América',
    projectRelation: 'FéConecta Application Layout'
  },
  {
    id: 't3',
    quote: 'A agilidade de carregamento e o design de alta classe do nosso cardápio geraram um retorno financeiro mensurável logo na primeira semana de operação. Estão de parabéns pelo capricho!',
    author: 'Chef Alessandro Rossi',
    role: 'Sócio-Diretor',
    company: 'Bistrô São Paulo Group',
    projectRelation: 'Cardápio WhatsApp Flow'
  }
];
