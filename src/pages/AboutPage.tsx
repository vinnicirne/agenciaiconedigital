import React from 'react';
import { Sparkles, Terminal, Shield, Eye, Target, Users, Zap, Award, HeartHandshake, Flame } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      title: 'Perfeccionismo Estético',
      description: 'Nenhum pixel é ignorado. Nossas interfaces carregam as tendências visuais das maiores referências de tecnologia mundiais.',
      icon: Eye,
      color: 'text-[#00E0FF]'
    },
    {
      title: 'Obsessão por Carregamento',
      description: 'Nossa engenharia elimina frameworks engessados. Criamos código limpo, rápido e sustentável com velocidade abaixo de 1s.',
      icon: Flame,
      color: 'text-[#8A3FFC]'
    },
    {
      title: 'Transparência Absoluta',
      description: 'Você acompanha toda a evolução técnica do escopo através de reports semanais claros e deploys contínuos e seguros.',
      icon: HeartHandshake,
      color: 'text-emerald-400'
    }
  ];

  const technologies = [
    { name: 'React 19 & Next.js', category: 'Front-end' },
    { name: 'Tailwind CSS v4', category: 'Styling' },
    { name: 'Motion / Framer', category: 'Animations' },
    { name: 'Node.js & Express', category: 'Back-end' },
    { name: 'D3 & Recharts', category: 'Data Visualization' },
    { name: 'Google Cloud Platform', category: 'Infrastructure' }
  ];

  return (
    <div className="pt-28 pb-20 space-y-24">
      {/* Intro/Manifest block */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#00E0FF]" />
          <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">MANIFESTO ÍCONE DIGITAL</span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.95] uppercase">
          Morte aos <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#8A3FFC]">Templates Prontos</span>.
        </h1>

        <p className="text-[#bac9cd] font-light text-base sm:text-xl leading-relaxed max-w-2xl mx-auto">
          A Ícone Digital nasceu da insatisfação com a mediocridade visual e técnica. Acreditamos que a presença web de uma grande empresa deve traduzir a magnitude da sua marca, unindo interfaces hipnotizantes e tecnologia de ponta.
        </p>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full my-8" />
      </section>

      {/* Core values grid */}
      <section className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-3">
          <h2 className="font-display text-[32px] sm:text-[42px] font-black tracking-tighter text-white leading-[0.95] uppercase">
            Pilares <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E0FF] to-[#8A3FFC]">Fundamentais</span>
          </h2>
          <p className="text-gray-400 font-light text-sm max-w-lg mx-auto">
            Mais do que construir belas interfaces, desenvolvemos pontes digitais indestrutíveis entre sua proposta de valor e seu cliente final.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="bg-[#0b0b0b] rounded-2xl border border-white/5 p-8 space-y-4 hover:border-white/15 transition-all">
                <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${val.color} border border-white/10`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-md font-bold text-white">{val.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">{val.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stack/Tech section list */}
      <section className="max-w-7xl mx-auto px-6 bg-[#070707] py-20 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full bg-[#8A3FFC] opacity-[0.03] blur-[150px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5">
            <h2 className="font-display text-[32px] sm:text-[42px] font-black tracking-tighter text-white leading-[0.95] uppercase">
              Stack <span className="text-[#00E0FF]">Tecnológica</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Escolhemos e dominamos as linguagens e bibliotecas que as equipes mais produtivas e escaláveis do planeta utilizam. Garantia de portabilidade de código e robustez total para o futuro do seu negócio.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologies.map((tech, idx) => (
              <div key={idx} className="bg-[#121212]/50 border border-white/5 p-4 rounded-xl flex flex-col gap-1.5 hover:bg-[#121212] transition-colors">
                <span className="text-xs font-mono font-bold text-[#00E0FF] uppercase tracking-widest">{tech.category}</span>
                <span className="text-sm font-semibold text-white">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
