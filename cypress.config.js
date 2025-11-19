const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'f8pnfi',
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2/",
    //retries: 2,
    viewportWidth: 1440,
    viewportHeight: 900,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
