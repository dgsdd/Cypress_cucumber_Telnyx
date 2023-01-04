import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import mainPage from "../pages/main.page";
import productsPage from "../pages/products.page";
const closeCookiesBtn = "button[aria-label='close and deny']";

Given("I visit telnyx.com", () => {
    cy.visit("/");
});
Then("I accept cookies", () => {
    cy.get(closeCookiesBtn).click();
});
When("I open menu", () => {
    mainPage.clickOpenMenu();
});
Then("I click on Products", () => {
    mainPage.clickBtnProducts();
});
Then("I click on See all Products", () => {
    mainPage.clickSeeAllProducts();
});
Then("I check title", () => {
    productsPage.checkTitle();
});