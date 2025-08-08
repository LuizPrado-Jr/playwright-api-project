// playwright-api-tests.spec.ts
import { test, expect, request } from '@playwright/test';
import { BASE_URL, endpoints } from '../../src/mappings/enviroment';
import { getRandomInt, getRandomUserData, defaultHeaders } from '../../src/utils/randomUtils';

const TEST_USER_ID = 2;
test.describe('Tarefa 1 - Testes básicos de API', () => {
  test('GET /api/users?page=2 - sucesso', async ({ request }) => {
    const response = await request.get(`${BASE_URL}${endpoints.users()}`);
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');
    const body = await response.json();
    expect(body.data.length).toBeGreaterThan(0);
  });

  test('GET /unknown - rota inválida (negativo)', async ({ request }) => {
    const randomId = getRandomInt(1000, 9999);
    const response = await request.get(`${BASE_URL}${endpoints.unknown(randomId)}`);
    expect(response.status()).toBe(404);
  });
});

test.describe('Tarefa 2 - Testes de métodos HTTP', () => {
  test('POST /api/users - criar usuário', async ({ request }) => {
    const userData = getRandomUserData();
    const response = await request.post(`${BASE_URL}/api/users`, {
      headers: defaultHeaders,
      data: userData,
    });
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.name).toBe(userData.name);
    expect(body.job).toBe(userData.job);
    expect(body.id).toBeTruthy();
  });

  test('PUT /users/:id - atualizar usuário', async ({ request }) => {
    const userData = getRandomUserData();
    const response = await request.put(`${BASE_URL}${endpoints.userById(TEST_USER_ID)}`, {
      headers: defaultHeaders,
      data: userData,
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.name).toBe(userData.name);
    expect(body.job).toBe(userData.job);
  });

  test('DELETE /users/:id - remover usuário', async ({ request }) => {
    const response = await request.delete(`${BASE_URL}${endpoints.userById(TEST_USER_ID)}`, {
      headers: defaultHeaders,
    });
    expect(response.status()).toBe(204);
  });
});