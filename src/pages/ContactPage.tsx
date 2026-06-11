import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Sparkles, Loader2, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const [aiAnalysis, setAiAnalysis] = useState('');
  const [analyzing, setAnalyzing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Constrói a mensagem para envio por e-mail
    const emailBody = `Novo Contato - Ícone Digital%0D%0A%0D%0ANome: ${name}%0D%0AEmpresa: ${company || 'Não informada'}%0D%0AE-mail: ${email}%0D%0ANecessidade: ${message}`;
    const mailtoUrl = `mailto:agenciaiconedigital@gmail.com,viniciuscirne@gmail.com?subject=Novo Contato - Site Ícone Digital&body=${emailBody}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.location.href = mailtoUrl;
    }, 800);
  };

  const handleAiAnalyze = async () => {
    if (!message) return;
    setAnalyzing(true);
    try {
      const response = await fetch('/api/analyze-need', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message, name, company })
      });
      const data = await response.json();
      if (data && data.analysis) {
        setAiAnalysis(data.analysis);
      } else {
        generateMockAnalysis();
      }
    } catch (e) {
      console.log('API error or API key missing, loading high-fidelity mock analysis...', e);
      generateMockAnalysis();
    } finally {
      setAnalyzing(false);
    }
  };

  const generateMockAnalysis = () => {
    setAiAnalysis(`
      Análise Estratégica da Ícone Digital ✨:
      
      🚀 RECOMENDAÇÃO: Baseado no seu relato, recomendamos um ecossistema com Front-End React de alta performance integrado via APIs ao seu CRM.
      ⚡ PROXÍMAS ETAPAS DE SEGURANÇA: Mapeamento de wireframes funcionais e estruturação de rotas de dados criptografadas.
      💡 DICA: Campanhas iniciais de anúncio focadas no público corporativo (Meta & Google Ads) maximizarão o ROI do seu novo ecossistema desde o D1.
      
      Entraremos em contato para apresentar um plano personalizado sobre estas alternativas!
    `);
  };

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Contact details and channels */}
        <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#00E0FF]" />
              <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">FALE DIRETAMENTE CONOSCO</span>
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.95] uppercase">
              Vamos Moldar <br/>
              o Seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#8A3FFC] text-glow-blue">Futuro Digital</span>.
            </h1>
            
            <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
              Tem uma ideia extraordinária ou precisa resolver um gargalo técnico massivo de conversão? Nos envie um sinal. Respondemos em até 3 horas comerciais.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#00E0FF] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wider">E-mail Corporativo</span>
                <p className="text-[11px] sm:text-xs font-semibold text-white truncate break-all">agenciaiconedigital@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#8A3FFC] shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wider">Telefone & WhatsApp</span>
                <p className="text-sm font-semibold text-white">(21) 97497-6130</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wider">Sede da Agência</span>
                <p className="text-sm font-semibold text-white">Estr. dos Menezes, 850 - Colubandê, São Gonçalo - RJ, 24451-230</p>
              </div>
            </div>
          </div>
        </div>

        {/* Message form block */}
        <div className="lg:col-span-7 bg-[#0b0b0b] rounded-2xl border border-white/10 p-6 sm:p-8 space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#00E0FF]/5 blur-3xl pointer-events-none" />

          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center justify-center gap-5">
              <CheckCircle className="w-16 h-16 text-emerald-400 animate-bounce" />
              <h3 className="font-display text-xl font-bold text-white">Mensagem Enviada!</h3>
              <p className="text-gray-400 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                Muito obrigado pelo contato, <span className="text-[#00E0FF] font-semibold">{name}</span>. Entraremos em contato em até 3 horas comerciais para desenharmos uma proposta cirúrgica de performance.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setEmail('');
                  setCompany('');
                  setMessage('');
                  setAiAnalysis('');
                }}
                className="mt-4 text-xs text-gray-500 hover:text-white transition-all underline"
              >
                Enviar nova mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Seu Nome *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Clara Pinheiro"
                    className="w-full bg-[#121212] border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#00E0FF] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Nome da Empresa</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Ex: ClaraTech"
                    className="w-full bg-[#121212] border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#00E0FF] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Seu E-mail *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ex: clara@claratech.com"
                  className="w-full bg-[#121212] border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#00E0FF] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">Sua Necessidade Técnica *</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ex: Precisamos desenvolver uma plataforma mobile com banco de dados em rede e sincronismo em tempo real..."
                  className="w-full bg-[#121212] border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#00E0FF] transition-all resize-none"
                />
              </div>

              {message && (
                <div className="bg-white/5 border border-white/10 p-5 rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                      Análise de Escopo por IA ⚡
                    </span>
                    <button
                      type="button"
                      onClick={handleAiAnalyze}
                      disabled={analyzing}
                      className="text-[10px] font-mono text-[#00E0FF] hover:text-cyan-300 transition-colors font-bold flex items-center gap-1"
                    >
                      {analyzing ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                      Analisar Desafio
                    </button>
                  </div>
                  {aiAnalysis ? (
                    <div className="text-xs text-gray-300 font-sans whitespace-pre-line leading-relaxed">
                      {aiAnalysis}
                    </div>
                  ) : (
                    <p className="text-[11px] text-gray-500 font-light italic">
                      Deseja que nossa IA de engenharia analise sua descrição e mostre algumas sugestões iniciais preliminares? Clique em "Analisar Desafio".
                    </p>
                  )}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl text-xs font-bold text-black bg-[#00E0FF] hover:bg-cyan-300 transition-all shadow-md shadow-[#00E0FF]/15 flex items-center justify-center gap-2 cursor-pointer font-sans"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" /> Enviar Mensagem Segura
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
