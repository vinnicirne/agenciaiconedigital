import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export default async function handler(req: any, res: any) {
  // Configuração de CORS para permitir que o frontend da Vercel chame a própria API
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    if (!resend) {
      throw new Error('RESEND_API_KEY não está configurada no ambiente.');
    }

    const { name, email, whatsapp, company, serviceInterest, projectBudget, briefingChallenge, briefingAudience, briefingTimeline, briefingReferences } = req.body;

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
      <h3>Briefing Executivo:</h3>
      <ul>
        <li><strong>Maior Desafio:</strong> ${briefingChallenge}</li>
        <li><strong>Público-Alvo:</strong> ${briefingAudience || 'Não detalhado'}</li>
        <li><strong>Prazo:</strong> ${briefingTimeline || 'Não definido'}</li>
        <li><strong>Referências/Benchmarks:</strong> ${briefingReferences || 'Nenhuma'}</li>
      </ul>
    `;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['viniciuscirne@gmail.com'],
      subject: `Novo Orçamento: ${name} - ${serviceInterest}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(400).json({ success: false, error });
    }

    return res.status(200).json({ success: true, data });
  } catch (e: any) {
    console.error('Falha interna ao enviar e-mail:', e.message);
    return res.status(500).json({ success: false, error: e.message });
  }
}
