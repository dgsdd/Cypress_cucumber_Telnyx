Feature: telnyx.com
    Scenario: Create a new account
        Given I visit telnyx.com
        Then I accept cookies
        When I click on Try_for_free Button
        Then I fill all required fields
        Then I click on Create_Account
