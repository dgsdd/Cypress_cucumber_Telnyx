class MainPage {
    locators = {
        OpenMenu() {
            return cy.get('[aria-label="Open menu"]');
        },

        FooterBlock() {
            return cy.get(".sc-7b6c9f9b-3");
        },

        SupportCenter() {
            return cy.get('footer a[href="https://support.telnyx.com/en/"]');
        },

        LabelTelnyx() {
            return cy.get('[class="sc-7b6c9f9b-12 cHxUkN"]');
        },

        FollowOnTwitter() {
            return cy.get('[href="https://twitter.com/telnyx"]');
        },

        SocialBlock() {
            return cy.get('div:nth-child(6) [class="sc-7b6c9f9b-6 kZyHWE"]');
        },

        ReadyToGetStartedBlock() {
            return cy.get('[class="sc-6609610a-0 cfjLEn"]');
        },

        RequestADemo() {
            return cy.get('[href="https://telnyx.com/contact-us"]');
        },

        BtnProducts() {
            return cy.get('li:first-child [class="sc-7b3980dc-6 gdETaM"]');
        },

        SeeAllProducts() {
            return cy.get('header div a[href="/products"]');
        },

        ProductsBlock() {
            return cy.get(
                'ul > li:nth-child(1) [class="sc-14c941d7-1 sc-7b3980dc-4 jTyFqK denEOW"]'
            );
        },
        BtnSolutions() {
            return cy.get(
                'ul > li:nth-child(3) [class="sc-7b3980dc-6 gdETaM"]'
            );
        },

        BtnNetwork() {
            return cy.get('div:nth-child(3) [class="sc-6ef4e600-12 hCNcWq"]');
        },

        BtnResources() {
            return cy.get(
                'ul > li:nth-child(6)  [class="sc-7b3980dc-6 gdETaM"]'
            );
        },
        BtnCompany() {
            return cy.get(
                'ul > li:nth-child(8)  [class="sc-7b3980dc-6 gdETaM"]'
            );
        },
        BtnPricing() {
            return cy.get('div:nth-child(6) [class="sc-6ef4e600-12 hCNcWq"]');
        },

        EmailBtn() {
            return cy.get('[class="sc-5d3a275a-2 krPznm"]');
        },

        SignUp() {
            return cy.get('header li a[href="/sign-up"]');
        },

        BtnSupportCenter() {
            return cy.get(
                'a:nth-child(3)[href="https://support.telnyx.com/en/"]'
            );
        },
        BuildTheNextGenerationBlock() {
            return cy.get(
                'div > div:nth-child(2) header[class="sc-31400ea3-2 daakqh"]'
            );
        },

     
    };

    clickOpenMenu() {
        this.locators.OpenMenu().click({ force: true });
    }

    clickBtnProducts() {
        this.locators.BtnProducts().click({ force: true });
    }

    ProductsBlockIsVisible() {
        this.locators.ProductsBlock().should("be.visible");
    }

    scrollFooterBlock() {
        this.locators.FooterBlock().scrollIntoView();
    }

    clickSupportCenter() {
        this.locators.SupportCenter().invoke("removeAttr", "target").click();
    }

    scrollLabelTelnyx() {
        this.locators.LabelTelnyx().scrollIntoView();
    }

    checkLabelTelnyx() {
        this.locators.LabelTelnyx().should("have.text", "© Telnyx LLC 2023");
    }

    clickFollowOnTwitter() {
        this.locators.FollowOnTwitter().invoke("removeAttr", "target").click();
    }

    checkUrlTwitter() {
        cy.url().should("include", "/telnyx");
    }

    scrollReadyToGetStartedBlock() {
        this.locators.ReadyToGetStartedBlock().scrollIntoView();
    }

    clickRequestADemo() {
        this.locators.RequestADemo().invoke("removeAttr", "target").click();
    }

    clickEmailBtn() {
        this.locators.EmailBtn().click({ force: true });
    }

    clickSignUp() {
        this.locators
            .SignUp()
            .invoke("removeAttr", "target")
            .click({ force: true });
    }

    clickBtnSupportCenter() {
        this.locators
            .BtnSupportCenter()
            .invoke("removeAttr", "target")
            .click({ force: true });
    }

    scrollTitleBuildTheNextGeneration() {
        this.locators.BuildTheNextGenerationBlock().scrollIntoView();
    }

    checkTitle() {
        this.locators
            .BuildTheNextGenerationBlock()
            .should(
                "have.text",
                "Build the next generation of applications that connect your customers",
                "visible"
            );
    }
    clickSeeAllProducts() {
        this.locators.SeeAllProducts().click({ force: true });
    }

    clickBtnNetwork() {
        this.locators.BtnNetwork().click({ force: true });
    }
    clickBtnPricing() {
        this.locators.BtnPricing().click({ force: true });
    }

  
}
 
module.exports = new MainPage();
