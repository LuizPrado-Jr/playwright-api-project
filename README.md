# playwright-api-project
Testes automatizados em uma api para estudos (https://reqres.in) que verificar os responses (status  codes, headers e corpo)

## Como utilizar:

# Baixar e extrair o arquivo .zip e descompactar em um diretorio local ou clonar o projeto.

-Instalar as dependencias com **npm install""

# Executar os testes e relatórios:

-Npx playwright test
-npx playwright show-report

**Para executar e gerar relatorio**
-npx playwright test playwright-api-tests.spec.ts --reporter html

Lembrando que é imprensidivel ter o node.js instalado.
