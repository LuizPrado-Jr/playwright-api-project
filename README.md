# Playwright API Project

Automação de testes de API utilizando Playwright e TypeScript, com foco em cenários básicos e métodos HTTP na API pública [Reqres](https://reqres.in).

---

## Estrutura de Pastas

```
playwright-api-project/
├── node_modules/                # Dependências instaladas
├── tests/                       # Testes automatizados
│   └── playwright-api-tests.spec.ts
├── playwright-report/           # Relatórios HTML dos testes
├── test-results/                # Resultados dos testes em JSON
├── package.json                 # Configuração de dependências e scripts
├── playwright.config.ts         # Configuração do Playwright
└── README.md                    # Documentação do projeto
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

