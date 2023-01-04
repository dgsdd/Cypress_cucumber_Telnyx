Feature: telnyx.com
    Scenario: Check the label and error message
        Given I visit telnyx.com
        Then I accept cookies
        Then I click on Sign Up
        Then I click on I Agree Label
        When I click on Create Account Btn
        Then I should see error message