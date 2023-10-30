const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://zitrus.com.br',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/step_definitions/*.feature"
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 10000,
});
