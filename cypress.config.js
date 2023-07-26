const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin= require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 120000,
  e2e: {

    setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins:[createEsbuildPlugin(config)],
      });

      on("file:preprocessor",bundler);
       addCucumberPreprocessorPlugin(on, config);
      return config;

    },



    specPattern: "cypress/e2e/features/*.feature",
  },
});