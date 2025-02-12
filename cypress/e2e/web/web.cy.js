const { generateUser } = require("../../support/factories/loginWeb");

describe("Teste de Cadastro de Usuário", () => {
  let user;

  beforeEach(() => {
    // Acessa a página de cadastro
    cy.visit(`${Cypress.env("baseUrlWeb")}/register`);

    // Verifica se o elemento está visível e contém o texto "Cadastro de usuário"
    cy.get(".account_form > h3")
      .should("be.visible")
      .and("contain", "Cadastro de usuário");

    // Gera um novo usuário
    user = generateUser();
  });

  it("Deve acessar a página de cadastro corretamente", () => {
    // Verifica se o título da página contém o texto esperado
    cy.contains("Cadastro").should("be.visible");
  });

  it("Deve preencher e enviar o formulário de cadastro", () => {
    // Preenche os campos do formulário e envia
    cy.registerUser(user);
    cy.get("#swal2-title").should("contain", "Cadastro realizado!");
  });

  it("Deve enviar o formulário de cadastro e realizar login.", () => {
    // Preenche os campos do formulário e envia
    cy.registerUser(user);
    cy.get("#swal2-title").should("contain", "Cadastro realizado!");
    cy.get(".swal2-confirm").click();
    cy.get("#userLogged").should("contain", user.nome);
  });

  it("Deve exibir mensagem de erro ao clicar em cadastar", () => {
    // Não preenche nenhum campo do formulário
    cy.get("#btnRegister").click();
    cy.get("#errorMessageFirstName").should(
      "contain",
      "O campo nome deve ser prenchido"
    );
  });

  it("Deve exibir mensagem de erro ao clicar cadastrar sem preencher o campo e-mail", () => {
    // Preenche somente o campo Nome
    cy.get("#user").type(user.nome);
    cy.get("#btnRegister").click();
    cy.get("#errorMessageFirstName").should(
      "contain",
      "O campo e-mail deve ser prenchido corretamente"
    );
  });

  it("Deve exibir mensagem de erro ao clicar cadastrar sem preencher o campo senha", () => {
    // Preenche os campos Nome e Email
    cy.get("#user").type(user.nome);
    cy.get("#email").type(user.email);
    cy.get("#btnRegister").click();
    cy.get("#errorMessageFirstName").should(
      "contain",
      "O campo senha deve ter pelo menos 6 dígitos"
    );
  });
});
