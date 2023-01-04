Feature: telnyx.com
    Scenario: Follow the link Request_a_demo and check the pathname
        Given I visit telnyx.com
        Then I accept cookies
        When I scroll to Ready To Get Started Block
        Then I click on Request A Demo
        Then I check the pathname
     