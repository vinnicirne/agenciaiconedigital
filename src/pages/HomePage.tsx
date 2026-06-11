import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICES, DIFFERENTIALS, PROCESS_STEPS, PORTFOLIO_PROJECTS, TESTIMONIALS } from '../data';
import { Project } from '../types';
import { 
  ArrowRight, Sparkles, Laptop, Rocket, Smartphone, Cpu, TrendingUp, Zap, 
  Gauge, Search, Shield, Columns4, Expand, ArrowUpRight, MessageSquare, Quote
} from 'lucide-react';
import { motion } from 'motion/react';

interface HomePageProps {
  onOpenBudget: () => void;
}

// Map string icon names to Lucide icon components
const IconMap: { [key: string]: any } = {
  Laptop, Rocket, Smartphone, Cpu, TrendingUp, Zap, Gauge, Search, Shield, Columns4, Expand, Sparkles
};

export default function HomePage({ onOpenBudget }: HomePageProps) {
  const navigate = useNavigate();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  const getAccentGlow = (accent: string) => {
    switch (accent) {
      case 'indigo': return 'shadow-[0_0_50px_rgba(99,102,241,0.15)] hover:shadow-[0_0_60px_rgba(99,102,241,0.3)] hover:border-indigo-500/50';
      case 'cyan': return 'shadow-[0_0_50px_rgba(6,182,212,0.15)] hover:shadow-[0_0_60px_rgba(6,182,212,0.3)] hover:border-cyan-500/50';
      case 'emerald': return 'shadow-[0_0_50px_rgba(16,185,129,0.15)] hover:shadow-[0_0_60px_rgba(16,185,129,0.3)] hover:border-emerald-500/50';
      default: return 'shadow-[0_0_50px_rgba(0,224,255,0.15)] hover:shadow-[0_0_60px_rgba(0,224,255,0.3)] hover:border-[#00E0FF]/50';
    }
  };

  return (
    <div className="space-y-20 md:space-y-32 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        {/* Luminous interactive backgrounds */}
        <div className="absolute top-[10%] left-[-10%] w-[35%] h-[35%] rounded-full bg-[#8A3FFC] opacity-10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-10%] w-[35%] h-[35%] rounded-full bg-[#00E0FF] opacity-[0.12] blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 w-full py-12">
          {/* Hero text content */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6 text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-[#00E0FF] text-[10px] font-bold uppercase tracking-[0.2em] mb-2 w-fit shadow-md shadow-[#00E0FF]/5">
              <img 
                src="/logo.png" 
                alt="Logo Ícone Digital" 
                className="w-4.5 h-4.5 rounded-md object-cover border border-cyan-400/20 shadow-sm"
              />
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E0FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00E0FF]"></span>
              </span>
              Agência de Soluções Digitais
            </div>
            
            <h1 className="font-display text-[2.5rem] leading-[1] sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter text-white uppercase break-words">
              Criamos <br className="hidden sm:block" />
              experiências <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#8A3FFC] text-glow-blue">digitais</span> <br/>
              que vendem.
            </h1>
            
            <p className="text-[#bac9cd] text-base lg:text-lg max-w-lg leading-relaxed font-sans font-light">
              Transformamos ideias ousadas em interfaces premium integradas, aplicativos de alta performance e ecossistemas escaláveis que geram autoridade e resultados milionários para o seu negócio.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <button
                onClick={onOpenBudget}
                id="hero-cta-budget-primary"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold text-black bg-[#00E0FF] hover:bg-cyan-300 pointer-events-auto transition-all shadow-lg shadow-[#00E0FF]/25 hover:shadow-[#00E0FF]/40 hover:scale-[1.02] font-display"
              >
                Solicitar Orçamento
              </button>
              <button
                onClick={() => navigate('/portfolio')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-semibold text-white bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 pointer-events-auto transition-all inline-flex items-center justify-center gap-2"
              >
                Ver Portfólio <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Graphical Premium Mockups with real preloaded images */}
          <div className="lg:col-span-6 relative w-full h-[380px] sm:h-[480px] flex items-center justify-center">
            {/* Ambient glows inside card wrapper */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00E0FF]/5 to-[#8A3FFC]/5 rounded-2xl border border-white/5 shadow-2xl p-4">
              <div className="absolute top-4 left-4 w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="absolute top-4 left-8 w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="absolute top-4 left-12 w-2.5 h-2.5 rounded-full bg-green-500/60" />

              <div className="absolute bottom-[5%] left-[5%] right-[5%] top-[15%] rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-black group hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHhU9OPECRx7fLqj6AW5u9Y77bQEJPdUPdXM35vcu-M7IEjqc1jboBcvOcRSFCGogP_iWRpNU_v1G2Rj-lcf3___r08xXsEDl6Xr1ROLz68amHJbXwFVE-xhjrChQhF6hIbKJVTkeBaGxjRUacKIdu2DyzJenz5U-OhpLFAUsr1dXDMYJ9ork_JSJNcRYiSZgdC3-mbwZvgw39Lm8xjQi-Pn4JwDP6xswYfiSZvYfdkR8-rVWXB-AspqpWXFrUe5wfE_e-70OmmyU" 
                  alt="Ícone Digital Premium Dashboard Mockup" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Small Smartphone overlay representing multi-device capability */}
              <div className="absolute -bottom-8 -right-6 w-[150px] sm:w-[190px] drop-shadow-2xl group hover:scale-[1.05] transition-all duration-500 z-20">
                <img 
                  src="/feconecta.png" 
                  alt="FéConecta Mobile Application" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>

              {/* Little tablet card indicator */}
              <div className="absolute top-[20%] -left-4 bg-[#121212]/90 border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg shadow-black/80 animate-bounce">
                <Laptop className="w-3.5 h-3.5 text-[#00E0FF]" />
                <span className="text-[9px] font-mono text-gray-300 font-semibold uppercase">RESPONSIVO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES PREVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-[#8A3FFC] font-mono text-xs font-bold uppercase tracking-wider">
            NOSSAS ESPECIALIDADES
          </span>
          <h2 className="font-display text-3xl sm:text-[42px] md:text-[52px] font-black tracking-tighter text-white leading-[0.95] uppercase">
            Serviços <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#8A3FFC]">Especializados</span>
          </h2>
          <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
            Soluções digitais concebidas e estruturadas sob medida para marcas exigentes que não aceitam intermediários em performance e estética técnica refinada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv, idx) => {
            const Icon = IconMap[srv.iconName] || Cpu;
            return (
              <div 
                key={srv.id}
                className="group relative bg-[#0b0b0b] rounded-2xl border border-white/5 p-6 hover:border-[#00E0FF]/30 transition-all duration-300 hover:scale-[1.01] flex flex-col gap-5 overflow-hidden"
              >
                {/* Micro accent gradient hover effect */}
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#00E0FF]/5 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00E0FF] group-hover:bg-[#00E0FF] group-hover:text-black transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-md font-bold text-white group-hover:text-[#00E0FF] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <button 
                  onClick={() => navigate('/servicos')}
                  className="mt-auto pt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#8A3FFC] group-hover:text-white transition-colors duration-200"
                >
                  Saiba mais <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. DIFFERENTIALS SECTION */}
      <section className="bg-[#070707] py-20 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#00E0FF] opacity-[0.02] blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <span className="text-[#00E0FF] font-mono text-xs font-bold uppercase tracking-wider">
              DIFERENCIAIS CIRÚRGICOS
            </span>
            <h2 className="font-display text-3xl sm:text-[42px] md:text-[52px] font-black tracking-tighter text-white leading-[0.95] uppercase">
              Por que a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#8A3FFC]">Ícone Digital</span>?
            </h2>
            <p className="text-[#bac9cd] font-light text-sm sm:text-base leading-relaxed">
              Aliamos rigor tecnológico, obsessão por estética de elite e ferramentas estruturadas com foco inabalável em conversão de clientes qualificados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DIFFERENTIALS.map((dif, idx) => {
              const IconComp = IconMap[dif.iconName] || Sparkles;
              return (
                <div key={idx} className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/5 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-[#121212] border border-white/5 flex items-center justify-center text-[#00E0FF] shrink-0">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-display text-xs sm:text-sm font-bold text-white tracking-wide">
                      {dif.title}
                    </h3>
                    <p className="text-[#bac9cd] text-xs leading-relaxed font-light">
                      {dif.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. METHODOLOGY PROCESS TIMELINE */}
      <section className="max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-20">
          <span className="text-[#8A3FFC] font-mono text-xs font-bold uppercase tracking-wider">
            NOSSOS RITOS DE CRIAÇÃO
          </span>
          <h2 className="font-display text-[42px] sm:text-[52px] md:text-[62px] font-black tracking-tighter text-white leading-[0.95] uppercase">
            Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#8A3FFC]">Metodologia</span>
          </h2>
          <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
            Um processo linear altamente transparente e ágil, focado em entregas rítmicas e resultados mensuráveis.
          </p>
        </div>

        {/* Process Steps List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {/* Faint connecting line for visual guides */}
          <div className="hidden lg:block absolute top-[44px] left-8 right-8 h-[1px] bg-gradient-to-r from-[#8A3FFC]/30 via-[#00E0FF]/30 to-[#8A3FFC]/30 -z-10" />

          {PROCESS_STEPS.map((step, idx) => {
            return (
              <div key={idx} className="group relative bg-[#0b0b0b]/50 border border-white/5 hover:border-white/10 rounded-xl p-5 hover:bg-[#121212]/30 transition-all">
                <div className="flex items-center justify-between lg:flex-col lg:items-start lg:gap-4 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center text-[10px] font-mono text-[#00E0FF] font-bold shadow-inner group-hover:bg-[#00E0FF] group-hover:text-black transition-all">
                    {step.number}
                  </div>
                  <span className="text-[10px] text-gray-500 font-mono font-bold uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded">
                    Fase {idx + 1}
                  </span>
                </div>
                
                <h3 className="font-display text-xs sm:text-sm font-bold text-white mb-2 group-hover:text-[#00E0FF] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. FEATURED PORTFOLIO */}
      <section className="bg-[#060606] py-24 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-[#00E0FF] font-mono text-xs font-bold uppercase tracking-wider">
                CASES SOBRE ELEVAÇÃO COMERCIAL
              </span>
              <h2 className="font-display text-[42px] sm:text-[52px] md:text-[62px] font-black tracking-tighter text-[#00E0FF] leading-[0.95] uppercase">
                Portfólio <span className="text-white">em Destaque</span>
              </h2>
              <p className="text-[#bac9cd] font-light text-sm sm:text-base leading-relaxed max-w-xl">
                Espie soluções de marcas que decidiram abandonar o amadorismo e abraçar a elegância digital conosco.
              </p>
            </div>
            <button 
              onClick={() => navigate('/portfolio')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-white/20 text-xs font-mono font-bold text-white hover:bg-white/5 transition-all shrink-0"
            >
              Explorar Projetos <ArrowUpRight className="w-4 h-4 text-[#00E0FF]" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PORTFOLIO_PROJECTS.map((proj) => {
              const borderAccentGlow = getAccentGlow(proj.accentColor);
              return (
                <div 
                  key={proj.id}
                  onClick={() => navigate('/portfolio', { state: { selectedProject: proj } })}
                  className={`bg-[#0b0b0b] rounded-2xl border border-white/5 overflow-hidden cursor-pointer group transition-all duration-300 ${borderAccentGlow}`}
                >
                  {/* Presentation Frame mockup image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#121212] border-b border-white/5">
                    <img 
                      src={proj.imageUrl} 
                      alt={proj.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    
                    <span className="absolute bottom-4 left-4 text-[9px] font-mono font-bold uppercase tracking-wider bg-[#121212]/95 border border-white/10 text-[#00E0FF] px-2.5 py-1 rounded-full">
                      {proj.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-[#00E0FF] transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {proj.description}
                    </p>
                    
                    <div className="h-px bg-white/5 w-full my-2" />
                    
                    <div className="flex flex-col text-[11px] font-mono pt-2 gap-1">
                      <span className="text-gray-400 uppercase tracking-widest font-bold">Resultado:</span>
                      <span className="text-[#00E0FF] font-semibold leading-relaxed">{proj.result}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-16 space-y-2">
          <Quote className="w-12 h-12 text-[#8A3FFC] mx-auto opacity-30 animate-pulse" />
          <h2 className="font-display text-[32px] sm:text-[42px] font-black tracking-tighter text-white leading-[0.95] uppercase text-center">
            Depoimentos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#8A3FFC]">de Sucesso</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((test) => (
            <div 
              key={test.id}
              className="bg-[#0b0b0b] border border-white/5 p-6 rounded-2xl flex flex-col justify-between gap-5 shadow-2xl relative"
            >
              <div className="font-sans text-xs sm:text-sm text-[#bac9cd] leading-relaxed italic font-light">
                "{test.quote}"
              </div>
              <div>
                <div className="h-px bg-white/5 w-full my-3" />
                <h4 className="font-display text-xs font-bold text-white">{test.author}</h4>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  {test.role}, {test.company}
                </p>
                <p className="text-[9px] text-[#00E0FF] font-mono mt-1 font-semibold">{test.projectRelation}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. IMMERSIVE CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-6 relative py-12">
        <div className="relative rounded-[32px] bg-gradient-to-tr from-[#121212] via-[#0b0b0b] to-[#121212] border border-white/10 p-10 sm:p-16 text-center overflow-hidden shadow-2xl shadow-black">
          {/* Luminous dynamic orbs */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[#00E0FF]/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#8A3FFC]/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <span className="text-[#00E0FF] font-mono text-xs font-bold uppercase tracking-widest bg-[#00E0FF]/10 px-3 py-1.5 rounded-full inline-block">
              INICIE SUA REVOLUÇÃO COMERCIAL ⚡
            </span>
            <h3 className="font-display text-4xl sm:text-[64px] md:text-[76px] font-black tracking-tighter text-white leading-[0.95] uppercase">
              Pronto para o <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#8A3FFC] text-glow-blue">próximo nível</span>?
            </h3>
            <p className="text-[#bac9cd] font-light text-sm sm:text-base leading-relaxed">
              Sua presença digital merece o rigor e a precisão técnica de quem respira performance e design premium. Converse diretamente conosco hoje mesmo.
            </p>
            
            <button
              id="cta-home-bottom-budget"
              onClick={onOpenBudget}
              className="mt-4 px-10 py-5 rounded-full text-sm font-extrabold text-black bg-[#00E0FF] hover:bg-cyan-300 pointer-events-auto transition-all hover:scale-105 shadow-xl shadow-[#00E0FF]/25 font-display"
            >
              Começar Meu Projeto Agora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
