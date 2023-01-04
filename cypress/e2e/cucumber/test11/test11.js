import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import mainPage from "../pages/main.page";
import productPage from "../pages/products.page";
const closeCookiesBtn = "button[aria-label='close and deny']";


Given("I visit telnyx.com", () => {
    cy.visit("/");
});
Then("I accept cookies", () => {
    cy.get(closeCookiesBtn).click();
});
Then("I click on button Products", () => {
   mainPage.clickBtnProducts();
});
Then("I click on See All Products", () => {
    mainPage.clickSeeAllProducts();
});
When("I scroll to green block", () => {
   productPage.scrollReadyBlock();
});
Then("I should click on Try it Free and check a pathname", () => {
    cy.contains("Try it Free").invoke("removeAttr", "target").click();
    cy.location("pathname").should("eq", "/sign-up");
});

