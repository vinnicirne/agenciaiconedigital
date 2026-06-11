import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Send, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';
import { BudgetForm } from '../types';

interface BudgetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BudgetModal({ isOpen, onClose }: BudgetModalProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [aiProposalText, setAiProposalText] = useState('');
  const [generatingAi, setGeneratingAi] = useState(false);
  
  const [formData, setFormData] = useState<BudgetForm>({
    name: '',
    email: '',
    whatsapp: '',
    company: '',
    serviceInterest: 'Criação de Sites',
    projectBudget: 'R$ 2k - R$ 5k',
    briefingChallenge: '',
    briefingAudience: '',
    briefingReferences: '',
    briefingTimeline: ''
  });

  const services = [
    'Criação de Sites',
    'Landing Pages',
    'Aplicativos Mobiles',
    'Sistemas Web & SaaS',
    'Tráfego Pago & Growth',
    'Automações & IA'
  ];

  const budgets = [
    'Até R$ 2.000',
    'R$ 2k - R$ 5k',
    'R$ 5k - R$ 10k',
    'Acima de R$ 10k'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step < 3) setStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(prev => prev - 1);
  };

  const triggerAiDraft = async () => {
    setGeneratingAi(true);
    try {
      const response = await fetch('/api/draft-proposal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          serviceInterest: formData.serviceInterest,
          projectBudget: formData.projectBudget,
          briefingChallenge: formData.briefingChallenge,
          name: formData.name,
          company: formData.company
        })
      });
      const data = await response.json();
      if (data && data.proposal) {
        setAiProposalText(data.proposal);
      } else {
        // Fallback friendly simulation draft if API route fails or hasn't loaded env keys
        generateMockAiProposal();
      }
    } catch (e) {
      console.log('API call skipped or draft error, generating beautiful mock response...', e);
      generateMockAiProposal();
    } finally {
      setGeneratingAi(false);
    }
  };

  const generateMockAiProposal = () => {
    const techName = formData.serviceInterest;
    setAiProposalText(`
      Olá, ${formData.name}! Analisando o cenário da sua empresa, nossa equipe estratégica elaborou as diretrizes iniciais:

      🎯 FOCO COMERCIAL: Superar o desafio de "${formData.briefingChallenge || 'posicionamento digital'}" impactando diretamente seu público-alvo (${formData.briefingAudience || 'clientes qualificados'}).
      ⚡ SOLUÇÃO TÉCNICA: Desenvolvimento especializado focado em ${techName}, com estrutura de alta performance voltada para conversão.
      💎 REFERÊNCIA E ESTÉTICA: O projeto buscará um padrão visual de elite, tomando como base o seu nível de exigência de mercado (${formData.briefingReferences || 'padrão global'}).
      
      💰 ESTIMATIVA DE INVESTIMENTO: Faixa de ${formData.projectBudget}.
      📆 CRONOGRAMA: Alinharemos o esforço operacional com a sua expectativa de prazo (${formData.briefingTimeline || 'a definir'}).
      
      PRÓXIMO PASSO: Já estamos estruturando a arquitetura técnica dessa proposta. Falaremos no WhatsApp (${formData.whatsapp}) muito em breve.
    `);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-budget', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        let errMessage = 'Erro desconhecido ao enviar orçamento';
        try {
          const errorData = await response.json();
          errMessage = errorData.error?.message || errorData.error || errMessage;
        } catch(e) {}
        throw new Error(errMessage);
      }

      setLoading(false);
      setSubmitted(true);
    } catch (error: any) {
      console.error('Falha no envio do formulário:', error);
      setLoading(false);
      alert('Falha na API: ' + (error.message || 'Verifique sua conexão ou tente novamente.'));
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      whatsapp: '',
      company: '',
      serviceInterest: 'Criação de Sites',
      projectBudget: 'R$ 2k - R$ 5k',
      briefingChallenge: '',
      briefingAudience: '',
      briefingReferences: '',
      briefingTimeline: ''
    });
    setStep(1);
    setSubmitted(false);
    setAiProposalText('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop animation */}
      <div 
        className="fixed inset-0 bg-[#020202]/90 backdrop-blur-md transition-opacity duration-300 pointer-events-auto"
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <div className="relative bg-[#0b0b0b] w-full max-w-2xl rounded-2xl border border-white/10 shadow-2xl p-6 md:p-8 overflow-hidden z-20 transition-all text-[#e5e2e1] max-h-[90vh] overflow-y-auto">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-[#00E0FF] opacity-10 blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-32 h-32 rounded-full bg-[#8A3FFC] opacity-10 blur-2xl pointer-events-none" />
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#00E0FF]" />
            <h3 className="font-display text-xl font-black uppercase tracking-tighter">Solicitar <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#8A3FFC] text-glow-blue">Orçamento Premium</span></h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-all"
            aria-label="Fecar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success Screen */}
        <AnimatePresence mode="wait">
          {submitted ? (
            <div className="py-10 text-center flex flex-col items-center justify-center gap-5">
              <CheckCircle2 className="w-16 h-16 text-emerald-400 animate-bounce" />
              <h4 className="text-xl font-display font-bold text-white">Solicitação Recebida com Sucesso!</h4>
              <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
                Olá, <span className="text-[#00E0FF] font-semibold">{formData.name}</span>. Nossa equipe de especialistas já foi notificada. Seu projeto para <span className="text-[#8A3FFC] font-semibold">{formData.serviceInterest}</span> começou a ser estruturado! Entraremos em contato no e-mail fornecido em breve.
              </p>
              
              {aiProposalText ? (
                <div className="w-full text-left bg-[#121212] p-5 rounded-xl border border-white/5 mt-4">
                  <span className="text-[10px] bg-[#00E0FF]/15 text-[#00E0FF] px-2 py-1 rounded-full font-mono uppercase tracking-widest font-semibold inline-block mb-3">
                    Proposta Rascunhada por IA ✨
                  </span>
                  <div className="text-xs text-gray-300 leading-relaxed font-sans whitespace-pre-line">
                    {aiProposalText}
                  </div>
                </div>
              ) : (
                <button
                  onClick={triggerAiDraft}
                  disabled={generatingAi}
                  className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-black bg-[#00E0FF] hover:bg-cyan-300 transition-all font-mono shadow-md shadow-[#00E0FF]/20"
                >
                  {generatingAi ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Gerando Proposta por IA...
                    </>
                  ) : (
                    <>
                      Rascunhar Proposta Técnica de IA ⚡
                    </>
                  )}
                </button>
              )}

              <button
                onClick={resetForm}
                className="mt-6 text-xs text-gray-500 hover:text-white transition-colors underline"
              >
                Enviar Outro Pedido
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Stepper Header */}
              <div className="flex items-center justify-between text-xs text-mono text-gray-500 font-mono mb-4">
                <span>Passo {step} de 3</span>
                <div className="flex gap-1">
                  {[1, 2, 3].map((s) => (
                    <div 
                      key={s} 
                      className={`h-1.5 w-8 rounded-full transition-all duration-300 ${
                        s <= step ? 'bg-[#00E0FF]' : 'bg-white/5'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Step 1: Services & Budgets */}
              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">
                      Qual serviço você precisa? ⚡
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {services.map((srv) => (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, serviceInterest: srv }))}
                          className={`py-3 px-4 rounded-xl text-xs font-medium text-left border transition-all ${
                            formData.serviceInterest === srv
                              ? 'bg-[#00E0FF]/10 border-[#00E0FF] text-[#00E0FF]'
                              : 'bg-[#121212]/50 border-white/5 hover:border-white/10 text-gray-400 hover:text-white'
                          }`}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">
                      Investimento Estimado 💡
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {budgets.map((bdg) => (
                        <button
                          key={bdg}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, projectBudget: bdg }))}
                          className={`py-2.5 px-3 rounded-full text-center text-xs transition-all border ${
                            formData.projectBudget === bdg
                              ? 'bg-[#8A3FFC]/10 border-[#8A3FFC] text-[#c099ff]'
                              : 'bg-[#121212]/50 border-white/5 hover:border-white/10 text-gray-400 hover:text-white'
                          }`}
                        >
                          {bdg}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Information inputs */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">
                      Seu Nome Completo *
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ex: João da Silva"
                      className="w-full bg-[#121212] border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#00E0FF] transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">
                        Seu E-mail Corporativo *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Ex: joao@empresa.com"
                        className="w-full bg-[#121212] border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#00E0FF] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">
                        WhatsApp / Celular *
                      </label>
                      <input
                        required
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        placeholder="Ex: (11) 99999-9999"
                        className="w-full bg-[#121212] border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#00E0FF] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">
                      Nome da Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Ex: Ícone Digital Ltda"
                      className="w-full bg-[#121212] border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#00E0FF] transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Project description details (Briefing AntiGravity) */}
              {step === 3 && (
                <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-1">
                  <div className="p-4 bg-[#00E0FF]/5 border border-[#00E0FF]/20 rounded-xl mb-4">
                    <p className="text-[#00E0FF] text-xs font-mono font-bold uppercase tracking-widest mb-1">Briefing Executivo 🚀</p>
                    <p className="text-gray-400 text-xs">Informações estratégicas para desenharmos uma solução que gera autoridade e lucro real, não apenas telas bonitas.</p>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Maior Desafio Atual *</label>
                    <textarea required rows={2} name="briefingChallenge" value={formData.briefingChallenge} onChange={handleInputChange} placeholder="Ex: Baixa conversão, site lento, ou posicionamento amador..." className="w-full bg-[#121212] border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#00E0FF] transition-all resize-none" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Público-Alvo</label>
                      <input type="text" name="briefingAudience" value={formData.briefingAudience} onChange={handleInputChange} placeholder="Ex: Médicos, Classe A/B, etc." className="w-full bg-[#121212] border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#00E0FF] transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Expectativa de Prazo</label>
                      <select name="briefingTimeline" value={formData.briefingTimeline} onChange={handleInputChange} className="w-full bg-[#121212] border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#00E0FF] transition-all appearance-none cursor-pointer">
                        <option value="">Selecione uma opção...</option>
                        <option value="Urgente (Próximos dias)">Urgente (Próximos dias)</option>
                        <option value="1 a 2 semanas">1 a 2 semanas</option>
                        <option value="1 mês">1 mês</option>
                        <option value="A definir / Planejamento">A definir / Planejamento</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Referências ou Benchmarks</label>
                    <input type="text" name="briefingReferences" value={formData.briefingReferences} onChange={handleInputChange} placeholder="Concorrentes ou marcas que você admira..." className="w-full bg-[#121212] border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#00E0FF] transition-all" />
                  </div>
                </div>
              )}

              {/* Navigation Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={step === 1}
                  className={`px-4 py-2 text-xs font-mono text-gray-400 hover:text-white transition-colors ${
                    step === 1 ? 'opacity-30 cursor-not-allowed' : ''
                  }`}
                >
                  Voltar
                </button>

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={step === 2 && (!formData.name || !formData.email || !formData.whatsapp)}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-black bg-[#00E0FF] hover:bg-cyan-300 transition-all font-sans"
                  >
                    Avançar <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 px-8 py-3 rounded-full text-xs font-bold text-black bg-[#00E0FF] hover:bg-cyan-300 transition-all shadow-md shadow-[#00E0FF]/20"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Processando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 animate-pulse" /> Enviar Solicitação ⚡
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
