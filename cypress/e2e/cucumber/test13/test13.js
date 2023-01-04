import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import mainPage from "../pages/main.page";
const closeCookiesBtn = "button[aria-label='close and deny']";
const searchInput = '[type="text"]';


Given("I visit telnyx.com", () => {
    cy.visit("/");
    cy.viewport(1024, 768);
});
Then("I accept cookies", () => {
    cy.get(closeCookiesBtn).click();
});
When("I scroll to Footer Block", () => {
    mainPage.scrollFooterBlock();
});
Then("I click on SupportCenter", () => {
    mainPage.clickSupportCenter();
});
When("I type and clean the text", () => {
    cy.get(searchInput).type("CUCUMBER").clear();
});

Then("I should see an empty field", () => {
    cy.get(searchInput).should("have.value", "");
});

