const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://conver-taupe.vercel.app', // Substitua com o link desejado
    setupNodeEvents(on, config) {
      // Configurações e eventos adicionais podem ser adicionados aqui
    },
  },
});

