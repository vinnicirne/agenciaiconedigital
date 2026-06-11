import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, ArrowLeft, Loader2, Sparkles } from 'lucide-react';

export default function BriefingPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Massive state for 5-step briefing
  const [formData, setFormData] = useState({
    // Step 1: Client & Company
    name: '',
    company: '',
    brandName: '',
    cnpj: '',
    phone: '',
    whatsapp: '',
    email: '',
    cityState: '',
    currentWebsite: '',
    socialMedia: '',
    companyDescription: '',
    mainProduct: '',
    companyAge: '',
    differentiator: '',
    
    // Step 2: Objectives & Audience
    mainObjective: '',
    objectiveOther: '',
    biggestProblem: '',
    expectedResult: '',
    audienceAge: '',
    audienceGender: '',
    audienceCity: '',
    audienceClass: '',
    audienceDescription: '',
    admiredCompetitors: '',
    whatYouLikeInCompetitors: '',

    // Step 3: Visual Identity & Style
    hasLogo: '',
    hasBrandManual: '',
    desiredColors: '',
    undesiredColors: '',
    preferredFonts: '',
    desiredStyle: '',
    brandWords: '',

    // Step 4: Structure & Features
    desiredPages: [] as string[],
    generalFeatures: [] as string[],
    ecommerceFeatures: [] as string[],
    marketplaceFeatures: [] as string[],
    appFeatures: [] as string[],
    whoProvidesText: '',
    whoProvidesImages: '',
    hasImageBank: '',
    integrations: [] as string[],
    otherIntegrations: '',

    // Step 5: SEO, Infra & App Details
    seoKeywords: '',
    hasDomain: '',
    domainName: '',
    hasHosting: '',
    expectedDeadline: '',
    importantDate: '',
    budgetRange: '',
    // App Specifics
    appProblem: '',
    appTargetUser: '',
    appNeedsAccount: '',
    appFlow: '',
    appMonetization: '',
    appNeedsAdminPanel: '',
    appNeedsNotifications: '',
    appSimilarExamples: '',
    generalObservations: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (category: 'desiredPages' | 'generalFeatures' | 'ecommerceFeatures' | 'marketplaceFeatures' | 'appFeatures' | 'integrations', value: string) => {
    setFormData(prev => {
      const currentList = prev[category];
      if (currentList.includes(value)) {
        return { ...prev, [category]: currentList.filter(item => item !== value) };
      } else {
        return { ...prev, [category]: [...currentList, value] };
      }
    });
  };

  const nextStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(prev => prev + 1);
  };
  const prevStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/submit-briefing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar briefing');
      }

      setLoading(false);
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert('Houve um erro de conexão. Tente novamente.');
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6">
        <div className="max-w-xl w-full text-center space-y-6 bg-[#0b0b0b] p-10 rounded-3xl border border-white/5 shadow-2xl">
          <CheckCircle2 className="w-20 h-20 text-[#00E0FF] mx-auto animate-bounce" />
          <h1 className="text-3xl font-display font-black text-white uppercase tracking-tighter">Briefing Recebido!</h1>
          <p className="text-gray-400 leading-relaxed text-sm">
            Obrigado pelas respostas estratégicas, <span className="text-white font-bold">{formData.name}</span>. Nossa equipe de arquitetura digital já recebeu os dados e estamos preparando o seu diagnóstico técnico. Entraremos em contato via WhatsApp em breve.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] py-12 px-4 sm:px-6 relative">
      {/* Background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#00E0FF]/5 via-transparent to-[#8A3FFC]/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-[#00E0FF] text-[10px] font-bold uppercase tracking-[0.2em]">
            <Sparkles className="w-3 h-3" /> Onboarding VIP
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-black text-white uppercase tracking-tighter">
            Arquitetura de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#8A3FFC]">Projeto</span>
          </h1>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Por favor, preencha este formulário detalhado. Suas respostas são o alicerce para construirmos uma solução de alta performance alinhada milimetricamente às suas expectativas comerciais.
          </p>
        </div>

        {/* Stepper Indicator */}
        <div className="flex items-center justify-between mb-8 px-2">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="flex flex-col items-center gap-2 relative w-full">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 z-10 ${step >= i ? 'bg-[#00E0FF] text-black shadow-[0_0_15px_rgba(0,224,255,0.4)]' : 'bg-[#121212] text-gray-600 border border-white/5'}`}>
                {i}
              </div>
              <span className={`text-[9px] font-mono uppercase tracking-wider hidden sm:block ${step >= i ? 'text-[#00E0FF]' : 'text-gray-600'}`}>
                {i === 1 && 'A Empresa'}
                {i === 2 && 'Cenário'}
                {i === 3 && 'Estética'}
                {i === 4 && 'Estrutura'}
                {i === 5 && 'Operacional'}
              </span>
              {i < 5 && (
                <div className={`absolute top-4 left-[50%] w-full h-[1px] -z-0 ${step > i ? 'bg-gradient-to-r from-[#00E0FF] to-[#00E0FF]/20' : 'bg-white/5'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div className="bg-[#0b0b0b] rounded-3xl border border-white/5 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {/* STEP 1 */}
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                  <h2 className="text-xl font-display font-bold text-white border-b border-white/5 pb-4">1. Identidade e Empresa</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="Seu Nome Completo" name="name" value={formData.name} onChange={handleInputChange} required />
                    <Input label="Razão Social / Empresa" name="company" value={formData.company} onChange={handleInputChange} required />
                    <Input label="Nome da Marca" name="brandName" value={formData.brandName} onChange={handleInputChange} />
                    <Input label="CNPJ (opcional)" name="cnpj" value={formData.cnpj} onChange={handleInputChange} />
                    <Input label="WhatsApp Principal" name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} required type="tel" />
                    <Input label="E-mail de Contato" name="email" value={formData.email} onChange={handleInputChange} required type="email" />
                    <Input label="Cidade / Estado" name="cityState" value={formData.cityState} onChange={handleInputChange} />
                    <Input label="Site Atual (se houver)" name="currentWebsite" value={formData.currentWebsite} onChange={handleInputChange} />
                    <Input label="Redes Sociais (Links)" name="socialMedia" value={formData.socialMedia} onChange={handleInputChange} />
                  </div>

                  <div className="space-y-6 pt-4">
                    <TextArea label="Conte um pouco sobre sua empresa" name="companyDescription" value={formData.companyDescription} onChange={handleInputChange} />
                    <Input label="Qual é o principal produto ou serviço?" name="mainProduct" value={formData.mainProduct} onChange={handleInputChange} />
                    
                    <RadioGroup 
                      label="Há quanto tempo a empresa existe?" 
                      name="companyAge" 
                      value={formData.companyAge} 
                      onChange={handleInputChange}
                      options={['Menos de 1 ano', '1 a 3 anos', '3 a 5 anos', 'Mais de 5 anos']} 
                    />
                    
                    <TextArea label="Qual é o principal diferencial da empresa perante o mercado?" name="differentiator" value={formData.differentiator} onChange={handleInputChange} />
                  </div>
                </motion.div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                  <h2 className="text-xl font-display font-bold text-white border-b border-white/5 pb-4">2. Cenário e Mercado</h2>
                  
                  <div className="space-y-6">
                    <RadioGroup 
                      label="Qual é o principal objetivo do projeto?" 
                      name="mainObjective" 
                      value={formData.mainObjective} 
                      onChange={handleInputChange}
                      options={['Vender produtos', 'Captar clientes (Leads)', 'Gerar orçamentos', 'Institucional/Autoridade', 'Lançamento de Infoproduto', 'Aplicativo SaaS', 'Marketplace', 'Outro']} 
                    />
                    {formData.mainObjective === 'Outro' && (
                      <Input label="Especifique o objetivo" name="objectiveOther" value={formData.objectiveOther} onChange={handleInputChange} />
                    )}

                    <TextArea label="Qual o MAIOR problema que você deseja resolver com este projeto?" name="biggestProblem" value={formData.biggestProblem} onChange={handleInputChange} />
                    <TextArea label="Qual resultado tangível você espera obter? (Ex: aumento de X% nas vendas, automatizar setor Y)" name="expectedResult" value={formData.expectedResult} onChange={handleInputChange} />
                    
                    <h3 className="text-sm font-bold text-[#00E0FF] mt-8 mb-2">Seu Público-Alvo</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input label="Idade Média" name="audienceAge" value={formData.audienceAge} onChange={handleInputChange} />
                      <Input label="Gênero (se aplicável)" name="audienceGender" value={formData.audienceGender} onChange={handleInputChange} />
                      <Input label="Localização Principal" name="audienceCity" value={formData.audienceCity} onChange={handleInputChange} />
                      <Input label="Classe Social / Poder Aquisitivo" name="audienceClass" value={formData.audienceClass} onChange={handleInputChange} />
                    </div>
                    <TextArea label="Descreva o seu cliente ideal com suas próprias palavras" name="audienceDescription" value={formData.audienceDescription} onChange={handleInputChange} />

                    <h3 className="text-sm font-bold text-[#8A3FFC] mt-8 mb-2">Concorrência e Referências</h3>
                    <TextArea label="Quais empresas/marcas você admira? (Cole os links de sites que você gosta)" name="admiredCompetitors" value={formData.admiredCompetitors} onChange={handleInputChange} />
                    <TextArea label="O que você MAIS gosta nessas referências que poderíamos aplicar no seu projeto?" name="whatYouLikeInCompetitors" value={formData.whatYouLikeInCompetitors} onChange={handleInputChange} />
                  </div>
                </motion.div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                  <h2 className="text-xl font-display font-bold text-white border-b border-white/5 pb-4">3. Identidade Visual e Estética</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <RadioGroup label="Já possui logotipo profissional?" name="hasLogo" value={formData.hasLogo} onChange={handleInputChange} options={['Sim', 'Não']} />
                      <RadioGroup label="Possui Manual de Identidade Visual?" name="hasBrandManual" value={formData.hasBrandManual} onChange={handleInputChange} options={['Sim', 'Não']} />
                    </div>

                    <Input label="Quais as cores oficiais da marca ou que deseja utilizar?" name="desiredColors" value={formData.desiredColors} onChange={handleInputChange} />
                    <Input label="Existe alguma cor que você NÃO quer que seja utilizada de jeito nenhum?" name="undesiredColors" value={formData.undesiredColors} onChange={handleInputChange} />
                    <Input label="Preferência Tipográfica (Fontes)" placeholder="Ex: Modernas, Clean, Serifadas clássicas..." name="preferredFonts" value={formData.preferredFonts} onChange={handleInputChange} />

                    <RadioGroup 
                      label="Como você deseja que o design do projeto seja percebido?" 
                      name="desiredStyle" 
                      value={formData.desiredStyle} 
                      onChange={handleInputChange}
                      options={['Moderno', 'Minimalista', 'Luxuoso / High-ticket', 'Tecnológico', 'Jovem e Descontraído', 'Corporativo / Sóbrio']} 
                    />

                    <Input label="Cite 3 a 5 palavras que definem a vibe da sua marca" placeholder="Ex: Inovação, Confiança, Rapidez..." name="brandWords" value={formData.brandWords} onChange={handleInputChange} />
                  </div>
                </motion.div>
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                  <h2 className="text-xl font-display font-bold text-white border-b border-white/5 pb-4">4. Arquitetura e Funcionalidades</h2>
                  
                  <div className="space-y-8">
                    <CheckboxGroup label="Estrutura de Páginas Desejadas" category="desiredPages" selected={formData.desiredPages} onChange={handleCheckboxChange} options={['Home', 'Sobre Nós', 'Serviços/Produtos', 'Página de Vendas Exclusiva', 'Blog', 'Contato', 'Área Restrita (Login)', 'Outra']} />
                    
                    <CheckboxGroup label="Funcionalidades Gerais" category="generalFeatures" selected={formData.generalFeatures} onChange={handleCheckboxChange} options={['Formulários de Captura', 'Botão WhatsApp Flutuante', 'Chatbot Online', 'Área de Membros (Logado)', 'Painel Administrativo para editar textos', 'Integração com Google Maps']} />

                    <CheckboxGroup label="Se for E-commerce / Vendas" category="ecommerceFeatures" selected={formData.ecommerceFeatures} onChange={handleCheckboxChange} options={['Carrinho e Checkout', 'Cupom de Desconto', 'Cálculo de Frete Correios/Transportadora', 'Pagamento PIX', 'Pagamento Cartão de Crédito']} />

                    <CheckboxGroup label="Se for Marketplace" category="marketplaceFeatures" selected={formData.marketplaceFeatures} onChange={handleCheckboxChange} options={['Cadastro de múltiplos vendedores', 'Split de Pagamento Automático', 'Painel do Vendedor Dashboard']} />

                    <CheckboxGroup label="Se for Aplicativo (Mobile)" category="appFeatures" selected={formData.appFeatures} onChange={handleCheckboxChange} options={['Disponível para iOS', 'Disponível para Android', 'Geolocalização / GPS', 'Notificações Push', 'Pagamento via App', 'Leitor de QR Code']} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                      <RadioGroup label="Quem fornecerá os textos do site/app?" name="whoProvidesText" value={formData.whoProvidesText} onChange={handleInputChange} options={['Eu enviarei tudo pronto', 'Preciso que a Ícone Digital crie o Copywriting']} />
                      <RadioGroup label="Quem fornecerá fotos/vídeos?" name="whoProvidesImages" value={formData.whoProvidesImages} onChange={handleInputChange} options={['Eu enviarei o material', 'Precisarei de Banco de Imagens profissional']} />
                    </div>

                    <CheckboxGroup label="Integrações Externas" category="integrations" selected={formData.integrations} onChange={handleCheckboxChange} options={['Google Analytics', 'Pixel do Facebook/Meta', 'RD Station / CRM', 'Mailchimp / E-mail Marketing', 'Gateway de Pagamento (Stripe/Pagar.me)', 'API de ERP Próprio']} />
                    
                    <Input label="Outras integrações específicas necessárias:" name="otherIntegrations" value={formData.otherIntegrations} onChange={handleInputChange} />
                  </div>
                </motion.div>
              )}

              {/* STEP 5 */}
              {step === 5 && (
                <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                  <h2 className="text-xl font-display font-bold text-white border-b border-white/5 pb-4">5. Operacional e Execução</h2>
                  
                  <div className="space-y-6">
                    <TextArea label="Palavras-chave SEO (Para quais pesquisas no Google você quer aparecer?)" name="seoKeywords" value={formData.seoKeywords} onChange={handleInputChange} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <RadioGroup label="Já possui um Domínio (ex: suaempresa.com.br) registrado?" name="hasDomain" value={formData.hasDomain} onChange={handleInputChange} options={['Sim', 'Não']} />
                      {formData.hasDomain === 'Sim' && (
                        <Input label="Qual é o domínio atual?" name="domainName" value={formData.domainName} onChange={handleInputChange} />
                      )}
                      <RadioGroup label="Já possui um servidor de Hospedagem?" name="hasHosting" value={formData.hasHosting} onChange={handleInputChange} options={['Sim', 'Não']} />
                      
                      <RadioGroup label="Expectativa de Prazo de Entrega" name="expectedDeadline" value={formData.expectedDeadline} onChange={handleInputChange} options={['Urgente (menos de 15 dias)', 'Normal (30 a 60 dias)', 'Tranquilo (mais de 60 dias)']} />
                    </div>

                    <RadioGroup 
                      label="Para alinhar as tecnologias adequadas, qual a sua faixa atual de investimento separada para o projeto?" 
                      name="budgetRange" 
                      value={formData.budgetRange} 
                      onChange={handleInputChange} 
                      options={['R$ 3k a R$ 5k', 'R$ 5k a R$ 10k', 'R$ 10k a R$ 30k', 'Acima de R$ 30k', 'Ainda estou descobrindo valores de mercado']} 
                    />

                    {/* APP SPECIFIC MODULE */}
                    <div className="p-5 border border-[#8A3FFC]/30 bg-[#8A3FFC]/5 rounded-2xl space-y-4">
                      <p className="text-xs text-[#c099ff] uppercase tracking-widest font-bold">Responda apenas se o projeto for um Aplicativo Customizado</p>
                      <Input label="O usuário precisará criar uma conta / fazer login?" name="appNeedsAccount" value={formData.appNeedsAccount} onChange={handleInputChange} />
                      <TextArea label="Como funcionará o modelo de monetização do App?" placeholder="Ex: Assinatura mensal, grátis com anúncios, venda direta, uso interno de empresa..." name="appMonetization" value={formData.appMonetization} onChange={handleInputChange} />
                      <TextArea label="Descreva o fluxo principal do usuário dentro do App" placeholder="Ex: Ele loga, vê um mapa, escolhe o produto e paga..." name="appFlow" value={formData.appFlow} onChange={handleInputChange} />
                    </div>

                    <TextArea label="Observações Gerais (Mais alguma coisa que precisamos saber?)" name="generalObservations" value={formData.generalObservations} onChange={handleInputChange} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Wizard Controls */}
            <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-6">
              {step > 1 ? (
                <button type="button" onClick={prevStep} className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Voltar
                </button>
              ) : (
                <div />
              )}

              {step < 5 ? (
                <button type="button" onClick={nextStep} className="flex items-center gap-2 px-8 py-3 rounded-full text-xs font-bold text-black bg-[#00E0FF] hover:bg-cyan-300 transition-transform hover:scale-105 shadow-xl shadow-[#00E0FF]/20">
                  Próximo Passo <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button type="submit" disabled={loading} className="flex items-center gap-2 px-8 py-3 rounded-full text-xs font-bold text-black bg-gradient-to-r from-[#00E0FF] to-[#8A3FFC] hover:opacity-90 transition-transform hover:scale-105 shadow-xl shadow-[#8A3FFC]/30 disabled:opacity-50">
                  {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Enviando Briefing...</> : 'Concluir e Enviar Projeto'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Mini-components for clean code
const Input = ({ label, name, value, onChange, placeholder, required = false, type = "text" }: any) => (
  <div>
    <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">{label} {required && '*'}</label>
    <input type={type} required={required} name={name} value={value} onChange={onChange} placeholder={placeholder} className="w-full bg-[#121212] border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#00E0FF] transition-colors" />
  </div>
);

const TextArea = ({ label, name, value, onChange, placeholder, required = false }: any) => (
  <div>
    <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">{label} {required && '*'}</label>
    <textarea required={required} rows={3} name={name} value={value} onChange={onChange} placeholder={placeholder} className="w-full bg-[#121212] border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#00E0FF] transition-colors resize-none" />
  </div>
);

const RadioGroup = ({ label, name, value, onChange, options }: any) => (
  <div>
    <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">{label}</label>
    <div className="flex flex-wrap gap-3">
      {options.map((opt: string) => (
        <label key={opt} className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-medium border transition-all ${value === opt ? 'bg-[#00E0FF]/10 border-[#00E0FF] text-[#00E0FF]' : 'bg-[#121212] border-white/5 text-gray-400 hover:border-white/20'}`}>
          <input type="radio" name={name} value={opt} onChange={onChange} checked={value === opt} className="hidden" />
          {opt}
        </label>
      ))}
    </div>
  </div>
);

const CheckboxGroup = ({ label, category, selected, onChange, options }: any) => (
  <div>
    <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">{label}</label>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {options.map((opt: string) => (
        <label key={opt} className={`cursor-pointer px-4 py-3 rounded-xl text-xs font-medium border transition-all flex items-center gap-3 ${selected.includes(opt) ? 'bg-[#8A3FFC]/10 border-[#8A3FFC] text-white' : 'bg-[#121212] border-white/5 text-gray-400 hover:border-white/20'}`}>
          <input type="checkbox" checked={selected.includes(opt)} onChange={() => onChange(category, opt)} className="hidden" />
          <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selected.includes(opt) ? 'bg-[#8A3FFC] border-[#8A3FFC]' : 'border-gray-600'}`}>
            {selected.includes(opt) && <CheckCircle2 className="w-3 h-3 text-white" />}
          </div>
          {opt}
        </label>
      ))}
    </div>
  </div>
);
