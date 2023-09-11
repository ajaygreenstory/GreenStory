const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    // cypress.json

  "reporter": "mochawesome",
  "reporterOptions": {
    "reportDir": "cypress/reports",
    

  }


  },
  defaultCommandTimeout:30000,
  pageLoadTimeout:60000,
  responseTimeout:30000,
  requestTimeout:30000,
});
