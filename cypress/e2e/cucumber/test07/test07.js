import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import mainPage from "../pages/main.page";
const closeCookiesBtn = "button[aria-label='close and deny']";

Given("I visit telnyx.com", () => {
    cy.visit("/");
});

Then("I accept cookies", () => {
    cy.get(closeCookiesBtn).click();
});

When("I scroll to label ©TelnyxLLC2023", () => {
        mainPage.scrollLabelTelnyx();      
});
Then("I check the text", () => {
     mainPage.checkLabelTelnyx();
});
 



