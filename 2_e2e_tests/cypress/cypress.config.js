const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://bugbank.netlify.app",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/commands.js",
  },
});