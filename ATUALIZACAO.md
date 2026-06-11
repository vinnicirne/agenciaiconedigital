# Log de Atualização do Projeto

## v0.1.1 - Integração de Disparo de E-mails (Resend)
- **Otimizações de Performance e Correções Críticas**:
  - Substituição da função `mailto:` no modal de orçamentos por disparo automático em background.
  - Instalação do SDK do `resend` e criação da rota `/api/send-budget` no `server.ts`.
  - Refatoração do `BudgetModal.tsx` para consumir a nova API internamente.

## v0.1.0 - Inicialização do Sistema
- Mudanças Estruturais e de Memória de Sistema:
  - Institucionalização do Gabarito Operacional Adapta.
  - Criação de `GABARITO.md`, `GATILHO.md` e `ATUALIZACAO.md`.
