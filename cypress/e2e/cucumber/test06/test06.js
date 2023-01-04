import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import supportPage from "../pages/support.page";
import mainPage from "../pages/main.page";
const closeCookiesBtn = "button[aria-label='close and deny']";

Given("I visit telnyx.com", () => {
    cy.visit("/");
});
Then("I accept cookies", () => {
    cy.get(closeCookiesBtn).click();
});
When("I scroll to footer block", () => {
    mainPage.scrollFooterBlock();
});
Then("I click Support Center button", () => {
    mainPage.clickSupportCenter();
    supportPage.checkSupportPageTitle();
});
