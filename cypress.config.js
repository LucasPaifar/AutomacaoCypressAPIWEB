const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      baseUrlWeb: "https://automationpratice.com.br", // URL base do site
    },
    setupNodeEvents(on, config) {
      // Configurações adicionais se necessário
      return config;
    },
  },
});
