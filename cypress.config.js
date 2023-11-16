module.exports = {
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,

  e2e: {
    baseUrl: 'https://www.google.com',
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
  },
};
