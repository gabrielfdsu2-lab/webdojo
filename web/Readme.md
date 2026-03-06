🥋 WebDojo - Testes Automatizados (Cypress)
Este repositório contém a suíte de testes de ponta a ponta (E2E) para a aplicação WebDojo, desenvolvida utilizando o framework Cypress.

📋 Sobre o Projeto
O objetivo deste projeto é garantir a qualidade e a estabilidade das principais funcionalidades da plataforma WebDojo, validando fluxos críticos desde a interface do usuário até a integração com dados reais e mocks.

🛠️ Estrutura do Projeto
Abaixo, a explicação da organização de pastas conforme a estrutura do VS Code:

cypress/e2e/: Contém os arquivos de especificação de testes (.cy.js).

cypress/fixtures/: Armazena dados estáticos (arquivos JSON como cep.json, consultancy.json e o PDF document.pdf).

cypress/support/:

actions/: Pasta para organizar a lógica de ações repetitivas (ex: consuntancy.actions.js).

commands.js: Local para criar Comandos Customizados do Cypress.

e2e.js: Arquivo de configuração que é executado antes de cada teste.

utils.js: Funções utilitárias compartilhadas entre os testes.

🚀 Pré-requisitos
Antes de começar, certifique-se de ter instalado:

Node.js (versão LTS recomendada)

NPM (instalado nativamente com o Node)

🏃 Como Executar
1. Preparando o Ambiente
Instale as dependências do projeto:
npm install

2. Iniciar a Aplicação WebDojo
A aplicação deve estar rodando localmente para que os testes funcionem. Use o script abaixo:
npm run dev

O servidor será iniciado em: http://localhost:3000

3. Executando os Testes
Com o servidor rodando em um terminal, abra outro terminal e escolha o comando desejado:

Modo Headless (Execução rápida no terminal):
npm run test

Modo UI (Interface interativa para desenvolvimento):
npm run test:ui

🧪 Scripts Disponíveis
npm run dev: Inicia o servidor da aplicação na porta 3000.

npm run test: Executa todos os testes em background (Cypress Run).

npm run test:ui: Abre a interface gráfica do Cypress (Cypress Open).

📝 Observações Técnicas
Fixtures: O projeto utiliza arquivos em fixtures/ para gerenciar dados de entrada, facilitando a manutenção.

Actions Pattern: A lógica de interação está separada em arquivos de actions/ para garantir o reaproveitamento e organização.