import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import mainPage from "../pages/main.page";
import signUpPage from "../pages/sign.up.page";
const closeCookiesBtn = "button[aria-label='close and deny']";
const workEmailInput = "#email";
const fullNameInput = "#full_name";
const passwordInput = "#password";
const iAgreeLabel = '[aria-labelledby="terms-label"]';



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
Then("I fill all required fields", () => {
    cy.get(workEmailInput).type("smith445415@gmail.com");
    cy.get(fullNameInput).type("John Smith");
    cy.get(passwordInput).type("21**fhfdgWYHW");
    cy.get(iAgreeLabel).should("not.have.checked").click();
});
Then("I click on Create_Account", () => {
   signUpPage.clickCreateAccount();
});

