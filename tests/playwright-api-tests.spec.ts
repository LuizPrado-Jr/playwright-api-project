// playwright-api-tests.spec.ts
import { test, expect, request } from '@playwright/test';

const BASE_URL = 'https://reqres.in';

test.describe('Tarefa 1 - Testes básicos de API', () => {
  test('GET /api/users?page=2 - sucesso', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/api/users?page=2`);
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');
    const body = await response.json();
    expect(body.data.length).toBeGreaterThan(0);
  });

  test('GET /unknown - rota inválida (negativo)', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/unknown/1234`);
    expect(response.status()).toBe(404);
  });
});

test.describe('Tarefa 2 - Testes de métodos HTTP', () => {
  test('POST /api/users - criar usuário', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/api/users`, {
      headers: {'x-api-key': 'reqres-free-v1'},
      data: { name: 'Luiz', job: 'QA Engineer' }
    });
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.name).toBe('Luiz');
    expect(body.job).toBe('QA Engineer');
    expect(body.id).toBeTruthy();
  });

  test('PUT /users/:id - atualizar usuário', async ({ request }) => {
    const response = await request.put(`${BASE_URL}/api/users/2`, {
      headers: {'x-api-key': 'reqres-free-v1'},
      data: { name: 'Luiz', job: 'Senior QA' }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.name).toBe('Luiz');
    expect(body.job).toBe('Senior QA');
  });

  test('DELETE /users/:id - remover usuário', async ({ request }) => {
      const response = await request.delete(`${BASE_URL}/api/users/2`,{
        headers: {'x-api-key': 'reqres-free-v1'},
      });
    expect(response.status()).toBe(204);
  });
});