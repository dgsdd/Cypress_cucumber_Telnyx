Feature: telnyx.com
    Scenario: Type and clean the text in search input on Support page
        Given I visit telnyx.com
        Then I accept cookies
        When I scroll to Footer Block
        Then I click on SupportCenter
        When I type and clean the text
        Then I should see an empty field