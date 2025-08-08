export const BASE_URL = 'https://reqres.in';

export const endpoints = {
  users: (page = 2) => `/api/users?page=${page}`,
  userById: (id: number) => `/api/users/${id}`,
  unknown: (id: number) => `/unknown/${id}`,
};
