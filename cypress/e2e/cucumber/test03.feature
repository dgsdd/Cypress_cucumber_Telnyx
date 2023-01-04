Feature: telnyx.com
    Scenario: Check Sign up button on main page
        Given I visit telnyx.com
        Then I accept cookies
        When I click on Sign Up
        Then I check the text on sign up page, it should be 'Create a free account'
        Then I check the pathname