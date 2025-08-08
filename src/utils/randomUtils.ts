export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomUserData() {
  const names = ['Luiz', 'Ana', 'Carlos', 'Maria', 'João'];
  const jobs = ['QA Engineer', 'Developer', 'Product Owner', 'Tester', 'Senior QA'];
  return {
    name: names[getRandomInt(0, names.length - 1)],
    job: jobs[getRandomInt(0, jobs.length - 1)],
  };
}

export const defaultHeaders = {
  'x-api-key': 'reqres-free-v1',
};