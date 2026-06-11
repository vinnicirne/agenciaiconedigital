import React, { useState } from 'react';
import { SERVICES } from '../data';
import { Service } from '../types';
import { 
  Laptop, Rocket, Smartphone, Cpu, TrendingUp, Zap, Check, ArrowRight, Sparkles 
} from 'lucide-react';

interface ServicesPageProps {
  onOpenBudget: () => void;
}

const IconMap: { [key: string]: any } = {
  Laptop, Rocket, Smartphone, Cpu, TrendingUp, Zap
};

export default function ServicesPage({ onOpenBudget }: ServicesPageProps) {
  const [selectedService, setSelectedService] = useState<Service>(SERVICES[0]);

  return (
    <div className="pt-28 pb-20 space-y-16 lg:space-y-24 overflow-hidden">
      {/* Services Header */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-[#00E0FF]" />
            <span className="text-[10px] font-mono tracking-widest text-[#00E0FF] font-semibold uppercase">
              Nosso Portfólio de Soluções
            </span>
          </div>

          <h1 className="font-display text-[2.5rem] leading-[1] sm:text-5xl md:text-7xl font-black tracking-tighter text-white uppercase break-words">
            Engenharia <br/>
            de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#8A3FFC] text-glow-blue">Interfaces</span> <br/>
            e Negócios.
          </h1>

          <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
            Desenvolvemos ecossistemas complexos sob os mais rigorosos padrões de arquitetura modernos. Cada aplicação entregue carrega velocidade de ponta, design system consistente, SEO nativo refinado e integridade de segurança inatacável.
          </p>

          <button
            onClick={onOpenBudget}
            className="px-6 py-3 rounded-full text-xs font-bold text-black bg-[#00E0FF] hover:bg-cyan-300 transition-all font-sans inline-flex items-center gap-2"
          >
            Quero Contratar ⚡
          </button>
        </div>

        <div className="lg:col-span-6 relative h-[300px] flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] rounded-full bg-[#00E0FF]/10 blur-[100px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] sm:w-[250px] h-[150px] sm:h-[250px] rounded-full bg-[#8A3FFC]/10 blur-[100px] pointer-events-none" />
          
          <div className="glass-panel p-6 rounded-2xl w-full max-w-md border border-white/10 shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#00E0FF]/20 flex items-center justify-center text-[#00E0FF]">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono font-bold text-gray-300">ESTATÍSTICA DE PERFORMANCE</span>
            </div>
            
            <div className="h-px bg-white/5" />
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">Tempo de Carregamento (Standard)</span>
                <span className="text-emerald-400 font-mono font-semibold">0.6s (Lighthouse)</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[98%] bg-gradient-to-r from-[#00E0FF] to-emerald-400 rounded-full" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">SEO Indexing Quality</span>
                <span className="text-[#00E0FF] font-mono font-semibold">100/100</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-[#00E0FF] to-[#8A3FFC] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Explorer Interactive Section */}
      <section className="max-w-7xl mx-auto px-6 bg-[#070707] py-20 border-y border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Menu Selector Column */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-gray-500 block mb-2 px-3">
              Selecione para Explorar
            </span>
            {SERVICES.map((srv) => {
              const Icon = IconMap[srv.iconName] || Cpu;
              const isSelected = selectedService.id === srv.id;
              return (
                <button
                  key={srv.id}
                  onClick={() => setSelectedService(srv)}
                  className={`w-full text-left py-3.5 px-5 rounded-xl border flex items-center justify-between gap-4 transition-all ${
                    isSelected
                      ? 'bg-[#00E0FF]/15 border-[#00E0FF] text-[#00E0FF]'
                      : 'bg-[#121212]/30 border-white/5 text-gray-400 hover:text-white hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold tracking-wide">{srv.title}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 shrink-0 ${
                    isSelected ? 'translate-x-1 text-[#00E0FF]' : 'opacity-0'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Details Column */}
          <div className="lg:col-span-8 bg-[#0b0b0b] rounded-2xl border border-white/10 p-8 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#8A3FFC]/5 blur-3xl pointer-events-none" />
            
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-[10px] font-mono bg-[#8A3FFC]/20 border border-[#8A3FFC]/30 text-[#c5a3ff] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                {selectedService.category}
              </span>
              <span className="text-xs font-mono text-gray-500">COD: ICON-{selectedService.id.toUpperCase()}</span>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                {selectedService.title}
              </h3>
              <p className="text-[#bac9cd] font-light text-sm sm:text-base leading-relaxed">
                {selectedService.detailedDescription || selectedService.description}
              </p>
            </div>

            <div className="h-px bg-white/5" />

            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase text-gray-400 tracking-wider">
                Entregáveis inclusos no escopo premium:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedService.features.map((feat, idx) => (
                  <div key={idx} className="flex gap-2 items-start text-xs sm:text-sm text-gray-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={onOpenBudget}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold text-black bg-[#00E0FF] hover:bg-cyan-300 transition-all shadow-md shadow-[#00E0FF]/15 inline-flex items-center justify-center gap-2"
              >
                Solicitar Orçamento de {selectedService.title} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
