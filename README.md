
## Linguagens e Frameworks Utilizados

- **Linguagem:** TypeScript
- **Framework de Testes:** [Playwright](https://playwright.dev/)
- **API de Teste:** [Reqres](https://reqres.in)

## Como Executar os Testes

1. **Pré-requisitos:**  
   - Ter o [Node.js](https://nodejs.org/) instalado.

2. **Instalar dependências:**  
   ```sh
   npm install

3. **Executar os testes:**
npx playwright test

4. **Gerar e visualizar relatório HTML:**
npx playwright test --reporter=html
npx playwright show-report

O relatório será aberto automaticamente ou pode ser acessado em index.html.

5. **Onde Rodar**
Execute os comandos acima no terminal, dentro da pasta raiz do projeto.

6. **Onde Ver os Relatórios**
Após rodar os testes com o comando npx playwright test playwright-api-tests.spec.ts --reporter html, o relatório estará disponível em index.html.
