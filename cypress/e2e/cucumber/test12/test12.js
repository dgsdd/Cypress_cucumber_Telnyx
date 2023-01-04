import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import mainPage from "../pages/main.page";
const closeCookiesBtn = "button[aria-label='close and deny']";
const IAgreeLabel = '[aria-labelledby="terms-label"]';
const CreateAccountBtn = '[type="submit"]';
const ErrorMessage = "#full_name_error";

Given("I visit telnyx.com", () => {
    cy.visit("/");
    cy.viewport(1024, 768);
});
Then("I accept cookies", () => {
    cy.get(closeCookiesBtn).click();
});
Then("I click on Sign Up", () => {
    mainPage.clickSignUp();
});
Then("I click on I Agree Label", () => {
    cy.get(IAgreeLabel).should("not.have.checked").click();
});
When("I click on Create Account Btn", () => {
    cy.get(CreateAccountBtn).click();
});

Then("I should see error message", () => {
   cy.get(ErrorMessage).should("be.visible");
});

