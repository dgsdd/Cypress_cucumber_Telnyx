import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import mainPage from "../pages/main.page";
const closeCookiesBtn = "button[aria-label='close and deny']";

Given("I visit telnyx.com", () => {
    cy.visit("/");
});
Then("I accept cookies", () => {
    cy.get(closeCookiesBtn).click();
});
When("I scroll to Ready To Get Started Block", () => {
    mainPage.scrollReadyToGetStartedBlock();
});
Then("I click on Request A Demo", () => {
    mainPage.clickRequestADemo();
});
Then("I check the pathname", () => {
    cy.location("pathname").should("eq", "/contact-us");
});

