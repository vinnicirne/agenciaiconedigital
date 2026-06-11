import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowUpRight, Github, Linkedin, MessageSquare, Instagram, Send, Check } from 'lucide-react';
import { AnimatePresence } from 'motion/react';

interface FooterProps {
  openBudgetModal: () => void;
}

export default function Footer({ openBudgetModal }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);


  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3500);
    }
  };

  return (
    <footer className="relative bg-[#030303] border-t border-white/5 pt-20 pb-12 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#8A3FFC] opacity-[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Column 1: Info and Socials */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
              <div className="relative w-8 h-8 rounded-lg bg-black flex items-center justify-center overflow-hidden shadow-md shadow-[#00E0FF]/15 border border-white/5 group-hover:border-[#00E0FF]/30 transition-all">
                <img 
                  src="/logo.png" 
                  alt="Ícone Digital Logo" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-115 p-0.5 rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-md font-bold text-white tracking-tight">
                  ÍCONE <span className="text-[#00E0FF]">DIGITAL</span>
                </span>
                <span className="text-[8px] font-mono tracking-widest text-[#8A3FFC] -mt-1 font-semibold">PREMIUM AGENCY</span>
              </div>
            </Link>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Transformação digital com precisão cirúrgica. Desenvolvemos interfaces sofisticadas, sistemas escaláveis e ferramentas de alta conversão para marcas de destaque.
            </p>

            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-[#121212] border border-white/5 hover:border-[#00E0FF]/50 hover:bg-[#161616] text-gray-400 hover:text-white flex items-center justify-center transition-all group duration-300" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#121212] border border-white/5 hover:border-[#8A3FFC]/50 hover:bg-[#161616] text-gray-400 hover:text-white flex items-center justify-center transition-all group duration-300" aria-label="Instagram">
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#121212] border border-white/5 hover:border-emerald-500/50 hover:bg-[#161616] text-gray-400 hover:text-white flex items-center justify-center transition-all group duration-300" aria-label="WhatsApp">
                <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 2: Serviços */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-gray-500">Serviços</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Criação de Sites', path: '/servicos' },
                { label: 'Landing Pages', path: '/servicos' },
                { label: 'Aplicativos Mobiles', path: '/servicos' },
                { label: 'Sistemas Web', path: '/servicos' },
                { label: 'Tráfego Pago', path: '/servicos' },
                { label: 'Automações & IA', path: '/servicos' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path}
                    onClick={() => window.scrollTo(0,0)}
                    className="text-gray-400 hover:text-[#00E0FF] text-sm text-left transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Agência */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-gray-500">Nossa Agência</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Sobre Nós', path: '/sobre' },
                { label: 'Portfólio', path: '/portfolio' },
                { label: 'Como Trabalhamos', path: '/sobre' },
                { label: 'Contato & Orçamentos', path: '/contato' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path}
                    onClick={() => window.scrollTo(0,0)}
                    className="text-gray-400 hover:text-[#8A3FFC] text-sm text-left transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1 group"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button 
                  onClick={openBudgetModal}
                  className="text-gray-400 hover:text-white text-sm text-left transition-colors font-bold"
                >
                  Criar Projeto ⚡
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-gray-500">Newsletter</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Assine e receba sacadas semanais sobre design moderno, performance e inteligência nos negócios.
            </p>
            
            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Insira seu melhor e-mail"
                className="w-full h-11 bg-[#121212] rounded-xl border border-white/5 pl-4 pr-11 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#00E0FF] focus:ring-1 focus:ring-[#00E0FF] transition-all"
              />
              <button
                type="submit"
                className="absolute top-1 right-1 w-9 h-9 rounded-lg bg-[#00E0FF] hover:bg-cyan-300 text-black flex items-center justify-center transition-all cursor-pointer"
                aria-label="Subscribe"
              >
                {subscribed ? <Check className="w-4 h-4 text-black animate-bounce" /> : <Send className="w-3.5 h-3.5" />}
              </button>
            </form>
            
            <AnimatePresence>
              {subscribed && (
                <p className="text-emerald-400 text-[11px] font-mono animate-fade-in mt-1 font-semibold">
                  ✓ Muito obrigado! Inscrição confirmada na Ícone Insights.
                </p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-white/5 w-full my-8" />

        {/* Outer Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-gray-500">
          <p>© 2026 Ícone Digital. Transformação digital com precisão cirúrgica de alta performance.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Acessibilidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
