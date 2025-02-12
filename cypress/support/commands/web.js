Cypress.Commands.add("registerUser", (user) => {
  cy.get("#user").type(user.nome);
  cy.get("#email").type(user.email);
  cy.get("#password").type(user.senha);
  cy.get("#btnRegister").click();
});
