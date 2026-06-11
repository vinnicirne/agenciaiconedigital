import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export default async function handler(req: any, res: any) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    if (!resend) {
      throw new Error('RESEND_API_KEY não está configurada no ambiente.');
    }

    const d = req.body; // Data from the massive Briefing form

    // Formatting arrays for HTML
    const listToHtml = (arr: string[]) => arr && arr.length > 0 ? `<ul>${arr.map(i => `<li>${i}</li>`).join('')}</ul>` : '<p><i>Nenhum selecionado</i></p>';

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; color: #333; max-w-xl; margin: 0 auto;">
        <h1 style="background: #00E0FF; color: #000; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">Novo Briefing Profundo Recebido!</h1>
        <p style="padding: 0 20px;">Você recebeu um briefing completo preenchido por <strong>${d.name}</strong> (${d.company}).</p>

        <div style="padding: 20px; border: 1px solid #eee; border-top: none;">
          <h2 style="color: #8A3FFC; border-bottom: 2px solid #eee; padding-bottom: 5px;">1. Dados do Lead</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 5px 0;"><strong>Nome:</strong> ${d.name}</td></tr>
            <tr><td style="padding: 5px 0;"><strong>Empresa:</strong> ${d.company}</td></tr>
            <tr><td style="padding: 5px 0;"><strong>Marca:</strong> ${d.brandName}</td></tr>
            <tr><td style="padding: 5px 0;"><strong>CNPJ:</strong> ${d.cnpj || '-'}</td></tr>
            <tr><td style="padding: 5px 0;"><strong>WhatsApp:</strong> ${d.whatsapp}</td></tr>
            <tr><td style="padding: 5px 0;"><strong>E-mail:</strong> ${d.email}</td></tr>
            <tr><td style="padding: 5px 0;"><strong>Local:</strong> ${d.cityState}</td></tr>
            <tr><td style="padding: 5px 0;"><strong>Site Atual:</strong> ${d.currentWebsite || '-'}</td></tr>
            <tr><td style="padding: 5px 0;"><strong>Redes:</strong> ${d.socialMedia || '-'}</td></tr>
            <tr><td style="padding: 5px 0;"><strong>Tempo de Empresa:</strong> ${d.companyAge}</td></tr>
            <tr><td style="padding: 5px 0;"><strong>Produto Principal:</strong> ${d.mainProduct}</td></tr>
          </table>
          <p><strong>Descrição da Empresa:</strong><br/>${d.companyDescription}</p>
          <p><strong>Diferencial:</strong><br/>${d.differentiator}</p>

          <h2 style="color: #8A3FFC; border-bottom: 2px solid #eee; padding-bottom: 5px; mt-5">2. Cenário e Objetivos</h2>
          <p><strong>Objetivo Primário:</strong> ${d.mainObjective} ${d.objectiveOther ? `(${d.objectiveOther})` : ''}</p>
          <p><strong>Maior Dor a Resolver:</strong><br/>${d.biggestProblem}</p>
          <p><strong>Resultado Esperado:</strong><br/>${d.expectedResult}</p>
          <br/>
          <p><strong>Público:</strong> Idade ${d.audienceAge || '-'} | Gênero ${d.audienceGender || '-'} | Local ${d.audienceCity || '-'} | Classe ${d.audienceClass || '-'}</p>
          <p><strong>Descrição do Público:</strong><br/>${d.audienceDescription}</p>
          <br/>
          <p><strong>Referências Admiradas:</strong><br/>${d.admiredCompetitors}</p>
          <p><strong>O que gosta nas refs:</strong><br/>${d.whatYouLikeInCompetitors}</p>

          <h2 style="color: #8A3FFC; border-bottom: 2px solid #eee; padding-bottom: 5px; mt-5">3. Estética</h2>
          <p><strong>Tem Logo?</strong> ${d.hasLogo} | <strong>Tem Manual?</strong> ${d.hasBrandManual}</p>
          <p><strong>Cores Desejadas:</strong> ${d.desiredColors}</p>
          <p><strong>Cores Indesejadas:</strong> ${d.undesiredColors}</p>
          <p><strong>Estilo:</strong> ${d.desiredStyle}</p>
          <p><strong>Palavras de Marca:</strong> ${d.brandWords}</p>

          <h2 style="color: #8A3FFC; border-bottom: 2px solid #eee; padding-bottom: 5px; mt-5">4. Estrutura e Funcionalidades</h2>
          <p><strong>Páginas:</strong></p>
          ${listToHtml(d.desiredPages)}
          <p><strong>Recursos Gerais:</strong></p>
          ${listToHtml(d.generalFeatures)}
          <p><strong>E-commerce/Marketplace:</strong></p>
          ${listToHtml([...(d.ecommerceFeatures||[]), ...(d.marketplaceFeatures||[])])}
          <p><strong>Recursos App:</strong></p>
          ${listToHtml(d.appFeatures)}
          <br/>
          <p><strong>Fornece Textos?</strong> ${d.whoProvidesText}</p>
          <p><strong>Fornece Imagens?</strong> ${d.whoProvidesImages}</p>
          <p><strong>Integrações:</strong></p>
          ${listToHtml(d.integrations)}
          <p><strong>Outras Integrações:</strong> ${d.otherIntegrations}</p>

          <h2 style="color: #8A3FFC; border-bottom: 2px solid #eee; padding-bottom: 5px; mt-5">5. Operacional</h2>
          <p><strong>Domínio:</strong> ${d.hasDomain} (${d.domainName}) | <strong>Hospedagem:</strong> ${d.hasHosting}</p>
          <p><strong>Palavras-chave SEO:</strong> ${d.seoKeywords}</p>
          <p><strong>Prazo Expectativa:</strong> ${d.expectedDeadline}</p>
          <p><strong>Investimento Base:</strong> ${d.budgetRange}</p>

          <h2 style="color: #8A3FFC; border-bottom: 2px solid #eee; padding-bottom: 5px; mt-5">6. Especificações de App (se aplicável)</h2>
          <p><strong>Login Necessário?</strong> ${d.appNeedsAccount}</p>
          <p><strong>Monetização:</strong> ${d.appMonetization}</p>
          <p><strong>Fluxo Principal:</strong><br/>${d.appFlow}</p>

          <h2 style="color: #8A3FFC; border-bottom: 2px solid #eee; padding-bottom: 5px; mt-5">Observações Finais</h2>
          <p>${d.generalObservations || 'Nenhuma'}</p>

        </div>
        <div style="background: #111; color: #666; text-align: center; padding: 20px; font-size: 12px; border-radius: 0 0 8px 8px;">
          Formulário enviado através do Briefing VIP da Ícone Digital. <br/>
          Você pode copiar os dados acima e colar no ChatGPT para gerar seu PRD.
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['viniciuscirne@gmail.com'], // using the correct authorized email
      subject: `🚨 BRIEFING COMPLETO: ${d.company} (${d.name})`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(400).json({ success: false, error });
    }

    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error('API Error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
