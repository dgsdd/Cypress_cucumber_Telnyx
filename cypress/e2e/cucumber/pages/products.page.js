class ProductsPage {
    locators = {
        ProductsBlock() {
             return cy.get('[class="sc-ce3c78c4-0 kZYVFt"]');
        },

        ReadyBlock() {
            return cy.get('[class="sc-93eced66-0 jrFJNV"]');
        },
    };

    checkTitle() {
        this.locators.ProductsBlock().should("have.text",
                "ProductsEverything you need to build the next generation of applications.",
                "visible");
    }
    scrollReadyBlock() {
        this.locators.ReadyBlock().scrollIntoView();
    }
}

module.exports = new ProductsPage();
