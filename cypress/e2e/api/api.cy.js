describe("API Users Endpoints", () => {
  const baseUrl = "http://localhost:3030/users";

  it("Deve cadastrar um usuário com sucesso", () => {
    cy.api("POST", baseUrl, {
      email: "test@example.com",
      name: "João Silva",
      password: "123456",
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property(
        "message",
        "Usuário cadastrado com sucesso!"
      );
    });
  });

  it("Deve retornar erro 400 ao tentar cadastrar sem campos obrigatórios", () => {
    cy.api({
      method: "POST",
      url: baseUrl,
      failOnStatusCode: false, // Evita falha automática em erros HTTP
      body: {
        email: "test@example.com",
      },
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property(
        "error",
        "Todos os campos (email, nome e senha) são obrigatórios!"
      );
    });
  });

  it("Deve listar todos os usuários cadastrados", () => {
    cy.api("GET", baseUrl).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("users");
      expect(response.body.users).to.be.an("array");
    });
  });

  it("Deve retornar erro 500 ao acessar a rota de erro simulado", () => {
    cy.api({
      method: "GET",
      url: `${baseUrl}/simulate-error`,
      failOnStatusCode: false, // Evita falha automática em erros HTTP
    }).then((response) => {
      expect(response.status).to.eq(500);
      expect(response.body).to.have.property(
        "error",
        "Erro interno no servidor simulado."
      );
    });
  });
});
