import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import mainPage from "../pages/main.page";
const closeCookiesBtn = "button[aria-label='close and deny']";
const searchInput = '[class="search__input js__search-input o__ltr"]';

Given("I visit telnyx.com", () => {
    cy.visit("/");
});
Then("I accept cookies", () => {
    cy.get(closeCookiesBtn).click();
});
When("I click on Button Support_Center", () => {
    mainPage.clickBtnSupportCenter();
});
Then("I should see empty form", () => {
    cy.get(searchInput).should("have.value", "");
    cy.screenshot();
});

