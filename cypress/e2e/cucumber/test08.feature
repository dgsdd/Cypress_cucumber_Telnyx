Feature: telnyx.com
    Scenario: Visit a Support Center and see an empty form
        Given I visit telnyx.com
        Then I accept cookies
        When I click on Button Support_Center
        Then I should see empty form
        