import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: "1m", target: 100 }, // Aumenta para 100 usuários em 1 minuto
    { duration: "2m", target: 100 }, // Sustenta 100 usuários por 2 minutos
    { duration: "1m", target: 0 },   // Reduz para 0 usuários em 1 minuto
  ],
};

const baseUrl = "http://localhost:3000/users";

// Lista de endpoints disponíveis
const endpoints = [
  {
    method: "POST",
    url: baseUrl,
    body: () => JSON.stringify({
      email: `user${Math.random()}@example.com`,
      name: `User ${Math.random()}`,
      password: "123456",
    }),
    headers: { "Content-Type": "application/json" },
    description: "Cadastrar usuário",
  },
  {
    method: "GET",
    url: `${baseUrl}/simulate-error`,
    description: "Simular erro 500",
  },
];

export default function () {
  // Escolhe aleatoriamente um endpoint
  const endpoint = endpoints[Math.floor(Math.random() * endpoints.length)];

  // Faz a requisição com base no método e configuração do endpoint
  let res;
  if (endpoint.method === "POST") {
    res = http.post(endpoint.url, endpoint.body(), { headers: endpoint.headers });
  } else if (endpoint.method === "GET") {
    res = http.get(endpoint.url);
  }

  // Validações básicas de resposta
  check(res, {
    [`${endpoint.description}: status válido`]: (r) =>
      r.status === 200 || r.status === 201 || r.status === 404 || r.status === 500,
  });

  // Aguarda 1 segundo entre as requisições
  sleep(1);
}
