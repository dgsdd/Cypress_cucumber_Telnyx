import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import mainPage from "../pages/main.page";
const closeCookiesBtn = "button[aria-label='close and deny']";
const emailInput = '[type="email"]';

Given("I visit telnyx.com", () => {
    cy.visit("/");
    cy.viewport(1024, 768);
});
Then("I accept cookies", () => {
    cy.get(closeCookiesBtn).click();
});
When("I type email on home page", () => {
    cy.get(emailInput).type("ffdfdfdf@gmail.com");
});
Then("I click on Try_for_free Button", () => {
    mainPage.clickEmailBtn();
});

Then("I check the pathname", () => {
    cy.location("pathname").should("eq", "/sign-up");
});


