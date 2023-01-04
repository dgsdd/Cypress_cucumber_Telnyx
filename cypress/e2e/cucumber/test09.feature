Feature: telnyx.com
    Scenario: Click on Go to Telnyx on Support page and have a title on main page
        Given I visit telnyx.com
        Then I accept cookies
        When I click Support Center button
        Then I click "Go to Telnyx"
        Then I scroll and I should see a title "Build the next generation of applications that connect your customers"
       