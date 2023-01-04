# Cypress_cucumber_Telnyx

15 test cases. Site https://telnyx.com

 <h3>Installing Cypress</h3>

In terminal type:

npm init -y

Run the following command in terminal:

npm install cypress --save-dev

Go to package.json file and add in two different scripts, for cypress run and the other for cypress open:

"scripts": {

    "cypress:run": "cypress run",
    
    "cypress:open": "cypress open"
},

 <h3> Install Cucumber for Cypress</h3>
 
 Run the following command to install the Cucumber for Cypress package: 
 
  npm install –save-dev cypress-cucumber-preprocessor  

 Under cypress.config.js file add the following:
 
 const cucumber = require("cypress-cucumber-preprocessor").default;
 
 module.exports = defineConfig({
     e2e: {
          setupNodeEvents(on, config) {
           on("file:preprocessor", cucumber());
        },
  },
});

 Within the package.json file, add the following configuration:
 
 "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true,
    "stepDefinitions":  "cypress/e2e/cucumber/"
  }
  
 In the cypress.config.js make sure to point to the feature files:
  
 specPattern: "cypress/e2e/**/*.feature",
 
 <h3>How to open and run a project</h3>

Run the following command to open Cypress:

npm run cypress:open (to run in headed mode)
or
npm run cypress:run

The test scripts are located at: cypress\e2e\cucumber\test_\test_.js

The page objects are in: cypress\e2e\cucumber\pages\*.page.js
