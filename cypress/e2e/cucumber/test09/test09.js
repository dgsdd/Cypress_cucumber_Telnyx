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
When("I click Support Center button", () => {
    mainPage.clickBtnSupportCenter();
});
Then('I click "Go to Telnyx"', () => {
    cy.contains("Go to Telnyx").invoke("removeAttr", "target").click();        
});

Then('I scroll and I should see a title "Build the next generation of applications that connect your customers"', () => {
   mainPage.scrollTitleBuildTheNextGeneration();
   mainPage.checkTitle();    
});
