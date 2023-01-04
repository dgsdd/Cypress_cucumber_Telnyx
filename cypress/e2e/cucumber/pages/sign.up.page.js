class SignUpPage {
    locators = {
        SignUp() {
            return cy.get("main h1");
        },

        CreateAccount() {
            return cy.get('[type="submit"]');
        },
    };

    checkSignUp() {
        this.locators
            .SignUp()
            .should("have.text", "Create a free account", "visible");
    }

    clickCreateAccount() {
        this.locators.CreateAccount().click();

    }
}

module.exports = new SignUpPage();