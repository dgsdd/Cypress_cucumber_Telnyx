Feature: telnyx.com
    Scenario: Network button
        Given I visit telnyx.com
        Then I accept cookies
        When I open menu
        Then I click on button NetWork
        When I click on Try Our Network
        Then I check a title