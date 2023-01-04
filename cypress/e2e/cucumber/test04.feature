Feature: telnyx.com
    Scenario: Type email adress on the main page
        Given I visit telnyx.com
        Then I accept cookies
        When I type email on home page
        Then I click on Try_for_free Button
        Then I check the pathname
    