Feature: telnyx.com
    Scenario: Visit Products page
        Given I visit telnyx.com
        Then I accept cookies
        When I open menu
        Then I click on Products
        Then I click on See all Products
        Then I check title
     