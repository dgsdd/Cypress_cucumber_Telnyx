import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import mainPage from "../pages/main.page";
const closeCookiesBtn = "button[aria-label='close and deny']";
const merits = '[class="sc-240cd7eb-4 kkBbuj"]';


Given("I visit telnyx.com", () => {
    cy.visit("/");
    cy.viewport(1024, 768);
});
Then("I accept cookies", () => {
    cy.get(closeCookiesBtn).click();
});

When("I click on Try_for_free Button", () => {
    mainPage.clickEmailBtn();
});
Then("I scroll and see merits of the Telnyx", () => {
    cy.get(merits).scrollIntoView();
    cy.screenshot();
    
    
});


