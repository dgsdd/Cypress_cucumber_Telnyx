Feature: telnyx.com
    Scenario: Check the label on the main page
        Given I visit telnyx.com
        Then I accept cookies
        When I scroll to label ©TelnyxLLC2023
        Then I check the text
      