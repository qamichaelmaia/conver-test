const { defineConfig } = require("cypress");
require("cypress-mochawesome-reporter");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://conver-taupe.vercel.app',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: false,
    },
  },
});