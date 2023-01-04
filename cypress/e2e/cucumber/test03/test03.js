import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import mainPage from "../pages/main.page";
import signUpPage from "../pages/sign.up.page";
const closeCookiesBtn = "button[aria-label='close and deny']";

Given("I visit telnyx.com", () => {
    cy.visit("/");
});
Then("I accept cookies", () => {
    cy.get(closeCookiesBtn).click();
});
When("I click on Sign Up", () => {
    mainPage.clickSignUp();
});
Then("I check the text on sign up page, it should be 'Create a free account'", () => {
    signUpPage.checkSignUp();
});
Then("I check the pathname", () => {
    cy.location("pathname").should("eq", "/sign-up");
});
