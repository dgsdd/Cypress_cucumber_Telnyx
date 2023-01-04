Feature: telnyx.com
  Scenario: Visit page "Support Center" from footer of main page
    Given I visit telnyx.com
    Then I accept cookies
    When I scroll to footer block
    Then I click Support Center button
  