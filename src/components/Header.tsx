import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  openBudgetModal: () => void;
}

export default function Header({ openBudgetModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: 'home', label: 'Início', path: '/' },
    { id: 'services', label: 'Serviços', path: '/servicos' },
    { id: 'portfolio', label: 'Portfólio', path: '/portfolio' },
    { id: 'about', label: 'Sobre Nós', path: '/sobre' },
    { id: 'contact', label: 'Contato', path: '/contato' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050505]/75 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo and Brand */}
        <Link 
          to="/"
          className="flex items-center gap-2 cursor-pointer group"
          id="brand-logo-container"
        >
          <div className="relative w-9 h-9 rounded-lg bg-black flex items-center justify-center overflow-hidden shadow-lg shadow-[#00E0FF]/15 group-hover:shadow-[#00E0FF]/30 border border-white/10 group-hover:border-[#00E0FF]/40 transition-all duration-300">
            <img 
              src="/logo.png" 
              alt="Logo Ícone Digital" 
              className="w-full h-full object-cover relative z-10 p-0.5 rounded-xl"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-black tracking-tighter text-white group-hover:text-[#00E0FF] transition-colors uppercase">
              ÍCONE <span className="text-[#00E0FF] group-hover:text-white">DIGITAL</span>
            </span>
            <span className="text-[8px] font-mono tracking-[0.25em] text-[#8A3FFC] -mt-0.5 font-bold uppercase">PREMIUM AGENCY</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#121212]/50 p-1 rounded-full border border-white/5">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`relative px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  isActive 
                    ? 'text-black' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-[#00E0FF] rounded-full -z-10 shadow-md shadow-[#00E0FF]/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            id="header-cta-budget"
            onClick={openBudgetModal}
            className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-medium tracking-wide text-black bg-[#00E0FF] hover:bg-[#a6f3ff] transition-all duration-300 hover:scale-103 shadow-md shadow-[#00E0FF]/15 hover:shadow-[#00E0FF]/30 font-display font-semibold"
          >
            Solicitar Orçamento
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={openBudgetModal}
            className="px-3.5 py-1.5 rounded-full text-[10px] font-semibold text-black bg-[#00E0FF] hover:bg-[#a6f3ff] transition-all"
          >
            Orçamento
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#121212] border border-white/10 text-gray-400 hover:text-white transition-all"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden w-full bg-[#050505]/95 border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-3">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`w-full text-left py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#121212] text-[#00E0FF] border-l-2 border-[#00E0FF] font-semibold'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="h-px bg-white/5 my-2" />
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBudgetModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-black bg-[#00E0FF] hover:bg-cyan-300 transition-all shadow-md shadow-[#00E0FF]/15"
              >
                <Rocket className="w-4 h-4" /> Solicitar Orçamento
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
