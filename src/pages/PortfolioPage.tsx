import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PORTFOLIO_PROJECTS } from '../data';
import { Project } from '../types';
import { 
  Sparkles, CheckCircle, ArrowLeft, ArrowUpRight, Laptop, Smartphone, Calendar, User, Layout, Eye 
} from 'lucide-react';

interface PortfolioPageProps {
  selectedProject: Project | null;
  setSelectedProject: (proj: Project | null) => void;
  onOpenBudget: () => void;
}

export default function PortfolioPage({ selectedProject, setSelectedProject, onOpenBudget }: PortfolioPageProps) {
  const [filter, setFilter] = useState<string>('todos');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(PORTFOLIO_PROJECTS);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.selectedProject) {
      setSelectedProject(location.state.selectedProject);
    }
  }, [location, setSelectedProject]);

  useEffect(() => {
    if (filter === 'todos') {
      setFilteredProjects(PORTFOLIO_PROJECTS);
    } else {
      setFilteredProjects(PORTFOLIO_PROJECTS.filter(p => p.category.toLowerCase().includes(filter)));
    }
  }, [filter]);

  const handleBack = () => {
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getAccentGlow = (accent: string) => {
    switch (accent) {
      case 'indigo': return 'shadow-[0_0_50px_rgba(99,102,241,0.15)] hover:shadow-[0_0_60px_rgba(99,102,241,0.3)] hover:border-indigo-500/50';
      case 'cyan': return 'shadow-[0_0_50px_rgba(6,182,212,0.15)] hover:shadow-[0_0_60px_rgba(6,182,212,0.3)] hover:border-cyan-500/50';
      case 'emerald': return 'shadow-[0_0_50px_rgba(16,185,129,0.15)] hover:shadow-[0_0_60px_rgba(16,185,129,0.3)] hover:border-emerald-500/50';
      default: return 'shadow-[0_0_50px_rgba(0,224,255,0.15)] hover:shadow-[0_0_60px_rgba(0,224,255,0.3)] hover:border-[#00E0FF]/50';
    }
  };

  const getAccentText = (accent: string) => {
    switch (accent) {
      case 'indigo': return 'text-indigo-400';
      case 'cyan': return 'text-cyan-400';
      case 'emerald': return 'text-emerald-400';
      default: return 'text-[#00E0FF]';
    }
  };

  return (
    <div className="pt-28 pb-20">
      {selectedProject ? (
        /* Case study detail view */
        <div className="max-w-4xl mx-auto px-6 space-y-12 animate-fade-in">
          {/* Back button */}
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-gray-400 hover:text-white transition-all uppercase"
          >
            <ArrowLeft className="w-4 h-4 text-[#00E0FF]" /> Voltar ao Portfólio
          </button>

          {/* Title and Summary */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#00E0FF]" />
              <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">{selectedProject.category}</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white leading-[0.95] uppercase">
              {selectedProject.title}
            </h1>
            
            <p className="text-gray-400 font-light text-base sm:text-lg leading-relaxed">
              {selectedProject.description}
            </p>
          </div>

          {/* Hero high-fidelity asset mockup */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#070707] shadow-xl aspect-video max-h-[480px]">
            <img
              src={selectedProject.imageUrl}
              alt={selectedProject.title}
              className="w-full h-full object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-mono text-gray-300">
              <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-[#00E0FF]" /> Cliente: {selectedProject.client}</span>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#8A3FFC]" /> Ano: {selectedProject.year}</span>
            </div>
          </div>

          {/* Two-Column case study details */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Context and Results */}
            <div className="md:col-span-8 space-y-6">
            <h2 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-tighter border-b border-white/5 pb-2">
              Concepção & Solução
            </h2>
              <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line font-light">
                {selectedProject.longDescription}
              </p>

              <div className="p-6 bg-white/5 rounded-xl border border-white/10 space-y-3">
                <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
                  Métricas de Resultado Real:
                </h4>
                <p className="text-[#00E0FF] font-sans text-md sm:text-lg font-bold leading-relaxed">
                  {selectedProject.result}
                </p>
              </div>
            </div>

            {/* Scope & Details */}
            <div className="md:col-span-4 space-y-6">
              <h2 className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-tighter border-b border-white/5 pb-2">
                Foco Técnico
              </h2>
              
              <ul className="space-y-3">
                {selectedProject.scope.map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-center text-xs text-gray-300 bg-[#121212] border border-white/5 rounded-lg py-2 px-3">
                    <CheckCircle className={`w-3.5 h-3.5 shrink-0 ${getAccentText(selectedProject.accentColor)}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onOpenBudget}
                className="w-full py-3.5 rounded-full text-xs font-bold text-black bg-[#00E0FF] hover:bg-cyan-300 transition-all font-sans inline-flex items-center justify-center gap-2"
              >
                Solicitar Integrações Similares ⚡
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Normal portfólio grid view */
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-[#8A3FFC] font-mono text-xs font-bold uppercase tracking-wider">
              REVOLUÇÃO DIGITAL EM DETALHES
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.95] uppercase">
              Nosso Portfólio <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#8A3FFC] text-glow-blue">de Elite</span>
            </h1>
            <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
              Mergulhe em cases de sucesso de plataformas mobiles, e-commerces automatizados e ferramentas analíticas inovadoras concebidas com perfeição.
            </p>
          </div>

          {/* Cases category filter toggles */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-lg mx-auto">
            {[
              { id: 'todos', label: 'Destaques' },
              { id: 'mobile', label: 'Aplicativos' },
              { id: 'dashboard', label: 'Dashboards' },
              { id: 'saas', label: 'SaaS' }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                  filter === btn.id
                    ? 'bg-[#00E0FF] text-black font-bold'
                    : 'bg-white/5 border border-white/5 text-gray-400 hover:text-white'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Cases grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj) => {
              const borderAccentGlow = getAccentGlow(proj.accentColor);
              return (
                <div
                  key={proj.id}
                  onClick={() => setSelectedProject(proj)}
                  className={`bg-[#0b0b0b] rounded-2xl border border-white/5 overflow-hidden cursor-pointer group transition-all duration-300 ${borderAccentGlow}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#121212] border-b border-white/5">
                    <img
                      src={proj.imageUrl}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    
                    <span className="absolute bottom-4 left-4 text-[9px] font-mono font-bold uppercase tracking-wider bg-[#121212]/95 border border-white/10 text-[#00E0FF] px-2.5 py-1 rounded-full">
                      {proj.category}
                    </span>
                    
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#00E0FF]/90 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all shadow-lg shadow-[#00E0FF]/30 scale-75 group-hover:scale-100 duration-300">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-[#00E0FF] transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {proj.description}
                    </p>
                    
                    <div className="h-px bg-white/5 w-full my-2" />
                    
                    <div className="flex flex-col text-[11px] font-mono text-gray-400 pt-2 gap-1">
                      <span className="font-bold">Resultado:</span>
                      <span className="text-[#00E0FF] font-semibold">{proj.result}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
