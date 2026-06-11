import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Helper to safely initialize GoogleGenAI client on demand
let aiClient: GoogleGenAI | null = null;
function getAi(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error('GEMINI_API_KEY environment variable is not defined.');
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parser limit configuration
  app.use(express.json());

  // API Route: AI Technical Draft Proposal
  app.post('/api/draft-proposal', async (req, res) => {
    try {
      const { serviceInterest, projectBudget, projectDescription, name, company } = req.body;
      
      const ai = getAi();
      const prompt = `
        Você é o arquiteto técnico sênior da agência premium Ícone Digital.
        Crie um rascunho de proposta técnica altamente sofisticado, encorajador e profissional em português para o cliente ${name || 'Lead'} da empresa ${company || 'sua organização'}.
        
        Parâmetros do Projeto:
        - Serviço de Interesse: ${serviceInterest}
        - Limite/Faixa de Orçamento Selecionada: ${projectBudget}
        - Desafios/Escopo Descrito pelo Cliente: ${projectDescription || 'Modernização e otimização de presença digital de marca de alto valor.'}
        
        Sua resposta de rascunho deve ser objetiva, limpa e conter:
        1. Resumo do Desafio (1-2 frases demonstrando maestria sobre o que foi descrito).
        2. Solução Recomendada (Recomende tecnologias modernas do nosso ecossistema como React, Tailwind v4, Node, etc.).
        3. Foco de Engenharia (Enfatize performance cirúrgica abaixo de 1s, SEO 100/100, design premium estético inspirado em Vercel e Stripe).
        4. Estimativa de Ciclo (Fase de Design System e Desenvolvimento Inicial em até 30 dias úteis).
        5. Chamamento amigável para a reunião de alinhamento com nosso consultor.
        
        Mantenha o tom sofisticado, minimalista, cortês e confiante. Use formatação limpa. Evite enrolações comerciais genéricas ou spam promocional.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: prompt
      });

      res.json({ proposal: response.text });
    } catch (e: any) {
      console.warn('Draft proposal failed or API key missing:', e.message);
      res.status(200).json({ 
        proposal: null, 
        error: 'Chave do Gemini não configurada ou erro temporário.' 
      });
    }
  });

  // API Route: AI Scope Technical Analyzer
  app.post('/api/analyze-need', async (req, res) => {
    try {
      const { message, name, company } = req.body;
      
      const ai = getAi();
      const prompt = `
        Você é o engenheiro especialista sênior de infraestrutura e performance da agência premium Ícone Digital.
        Ofereça uma análise diagnóstica preliminar extremamente inteligente, curta e técnica sobre a seguinte necessidade descrita pelo cliente:
        
        "${message}"
        
        Nome: ${name || 'Investidor'}
        Empresa: ${company || 'Empreendedor'}
        
        Sua resposta deve conter no máximo 3 pequenos parágrafos técnicos contendo:
        1. RECOMENDAÇÃO: Indique se o projeto exige um PWA, Single Page Application (SPA), server-side rendering ou banco de dados relacional distribuído.
        2. SEGURANÇA & ESCALA: Aponte soluções de segurança importantes para esse tipo de fluxo de dados (ex: criptografia, CORS, OAuth, gateways robustos).
        3. DICA DE AQUISIÇÃO: Dica rápida de canais de growth / tráfego pago (Meta Ads, Google Ads) ideais para testar esse produto.
        
        Mantenha um linguajar altamente refinado, enxuto e estritamente encorajador em português.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: prompt
      });

      res.json({ analysis: response.text });
    } catch (e: any) {
      console.warn('Analyze need failing or API key missing:', e.message);
      res.status(200).json({ 
        analysis: null, 
        error: 'Chave do Gemini não configurada ou erro temporário.' 
      });
    }
  });

  // API Route: Send Budget Email via Resend
  app.post('/api/send-budget', async (req, res) => {
    try {
      if (!resend) {
        throw new Error('RESEND_API_KEY não está configurada no ambiente.');
      }

      const { name, email, whatsapp, company, serviceInterest, projectBudget, briefingName, briefingIdea, briefingColors, briefingTypography, briefingLogo } = req.body;

      const emailHtml = `
        <h2>Novo Pedido de Orçamento - Ícone Digital</h2>
        <h3>Dados do Lead:</h3>
        <ul>
          <li><strong>Nome:</strong> ${name}</li>
          <li><strong>E-mail:</strong> ${email}</li>
          <li><strong>WhatsApp:</strong> ${whatsapp}</li>
          <li><strong>Empresa:</strong> ${company || 'Não informada'}</li>
        </ul>
        <h3>Especificações:</h3>
        <ul>
          <li><strong>Serviço:</strong> ${serviceInterest}</li>
          <li><strong>Orçamento:</strong> ${projectBudget}</li>
        </ul>
        <h3>Briefing:</h3>
        <ul>
          <li><strong>Nome do Projeto:</strong> ${briefingName}</li>
          <li><strong>Ideia Central:</strong> ${briefingIdea}</li>
          <li><strong>Cores:</strong> ${briefingColors || 'Não informadas'}</li>
          <li><strong>Tipografia:</strong> ${briefingTypography || 'Não informada'}</li>
          <li><strong>Referências/Logo:</strong> ${briefingLogo || 'Nenhuma'}</li>
        </ul>
      `;

      const data = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ['agenciaiconedigital@gmail.com', 'viniciuscirne@gmail.com'],
        subject: \`Novo Orçamento: \${name} - \${serviceInterest}\`,
        html: emailHtml,
      });

      res.json({ success: true, data });
    } catch (e: any) {
      console.error('Falha ao enviar e-mail via Resend:', e.message);
      res.status(500).json({ success: false, error: e.message });
    }
  });

  // Health route
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date() });
  });

  // Hot Reload and Dev Server middleware for Vite
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    // Production serving static files
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Ícone Digital] Servidor ativo em http://0.0.0.0:${PORT}`);
  });
}

startServer();
