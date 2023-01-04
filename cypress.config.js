const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
    reporter: "cypress-mochawesome-reporter",
    e2e: {
        setupNodeEvents(on, config) {
            require("cypress-mochawesome-reporter/plugin")(on);
            on("file:preprocessor", cucumber());
        },
        baseUrl: "https://telnyx.com/",
        specPattern: "cypress/e2e/**/*.feature",
        defaultCommandTimeout: 40000,
    },
});
