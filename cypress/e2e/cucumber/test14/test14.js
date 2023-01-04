import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import mainPage from "../pages/main.page";
const closeCookiesBtn = "button[aria-label='close and deny']";
const tryOurNetworkBtn = '[class="sc-5d3a275a-1 sc-5d3a275a-3 sc-5d3a275a-4 sc-5d3a275a-7 cSsJix UYAGn eUnEoi hBNXWZ mchNoDecorate sign-up-link"]';
const title = "main h1";

Given("I visit telnyx.com", () => {
    cy.visit("/");
});
Then("I accept cookies", () => {
    cy.get(closeCookiesBtn).click();
});

When("I open menu", () => {
    mainPage.clickOpenMenu();
});
Then("I click on button NetWork", () => {
    mainPage.clickBtnNetwork();
});
When("I click on Try Our Network", () => {
    cy.get(tryOurNetworkBtn).click();
});
When("I check a title", () => {
    cy.get(title).should("have.text", "Create a free account", "visible");
});
