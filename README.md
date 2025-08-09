# Playwright API Project

Automação de testes de API utilizando Playwright e TypeScript, com foco em cenários básicos e métodos HTTP na API pública [Reqres](https://reqres.in).

---

## Estrutura de Pastas

```
playwright-api-project/
├── node_modules/                  # Dependências instaladas
├── src/mappings                   # Código de apoio e utilitários
│       ├── apiEndpoints.ts        # Mapeamento de URLs e endpoints da API
│   └──utils   
       └── testUtils.ts            # Funções utilitárias e geração de dados
├── tests/                         # Testes automatizados
│   ├── requests/                  # Testes de requisições HTTP
│   │   └── playwright-api-tests.spec.ts
├── playwright-report/             # Relatórios HTML dos testes
├── test-results/                  # Resultados dos testes em JSON
├── package.json                   # Configuração de dependências e scripts
├── playwright.config.ts           # Configuração do Playwright
└── README.md                      # Documentação do projeto
```

---

## Versões Utilizadas

- **Node.js:** 20.x ou superior
- **Playwright:** 1.44.x ou superior
- **TypeScript:** 5.x ou superior

---

## Dependências

- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)

### Instalação

No terminal, execute na raiz do projeto:

```sh
npm install
```

---

## Como Executar os Testes

1. **Rodar todos os testes:**
   ```sh
   npx playwright test
   ```

2. **Gerar relatório HTML:**
   ```sh
   npx playwright test --reporter=html
   npx playwright show-report
   ```

O relatório será aberto automaticamente ou pode ser acessado em `playwright-report/index.html`.

---

## Observações

- Execute todos os comandos no terminal, dentro da pasta raiz do projeto.
- Para adicionar novos testes, utilize a pasta `tests/`.

- **Melhorias Solicitadas**

- URLs e endpoints centralizados em src/mapping/enviroments.ts
- Dados e funções em src/utils/randomUtils.ts e testes para dentro do diretorio requests
- Testes utilizando os dados randomicos criados e reaproveitando as functions e const 
- Código organizado conforme solicitado e de fato fica mais organizado e fácil de manter.
- Inclusão da integração dos test com o github Actions a cada push e pull request na main. Para verificar basta realizar um pull request ou um push para main e no github na aba de Actions, verificar se ficou verde a execução do workflow: Playwright API Tests

