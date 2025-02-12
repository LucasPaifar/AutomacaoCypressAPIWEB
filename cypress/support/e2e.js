import "cypress-plugin-api";

import "./commands/web";

Cypress.on("uncaught:exception", (err, runnable) => {
  // Retorne false para evitar que o Cypress falhe no teste
  return false;
});
