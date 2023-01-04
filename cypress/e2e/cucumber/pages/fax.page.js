class FaxPage {
    locators = {
        PayAsYouGoBlock() {
            return cy.get('[class="sc-3ef5d51e-28 chpfWq"]');
        },
    };

    scrollPayAsYouGoBlock() {
        this.locators.PayAsYouGoBlock().scrollIntoView();
    }
}

module.exports = new FaxPage();
