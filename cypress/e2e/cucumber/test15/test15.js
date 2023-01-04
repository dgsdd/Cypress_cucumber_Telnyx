import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import mainPage from "../pages/main.page";
import faxPage from "../pages/fax.page";
const closeCookiesBtn = "button[aria-label='close and deny']";
const faxBtn = 'div:nth-child(4) [class="sc-6ef4e600-12 hCNcWq"]';
const listbox = 'main [aria-haspopup="listbox"]';
const btnUkraine = '[class="sc-3ccaa17d-0 jGFDkY"]';

Given("I visit telnyx.com", () => {
    cy.visit("/");
});
Then("I accept cookies", () => {
    cy.get(closeCookiesBtn).click();
});

When("I open menu", () => {
    mainPage.clickOpenMenu();
});
Then("I click on button Pricing", () => {
    mainPage.clickBtnPricing();
});
When("I click on Fax", () => {
    cy.get(faxBtn).click();
});
Then("I scroll to Pay-as-you-go", () => {
    faxPage.scrollPayAsYouGoBlock();
});
Then("I click the link Elastic_SIP_Trunking_usage", () => {
   cy.contains("Elastic SIP Trunking usage").invoke("removeAttr", "target").click();  
});

When("I click on listbox", () => {
     cy.get(listbox).click();
});

Then("I choose Ukraine", () => {
    cy.contains("Ukraine").invoke("removeAttr", "target").click();  
    cy.get(btnUkraine).should("have.text", "Ukraine");
});