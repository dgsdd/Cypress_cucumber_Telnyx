Feature: telnyx.com
    Scenario: Pricing button
        Given I visit telnyx.com
        Then I accept cookies
        When I open menu
        Then I click on button Pricing
        When I click on Fax
        Then I scroll to Pay-as-you-go
        Then I click the link Elastic_SIP_Trunking_usage
        When I click on listbox
        Then I choose Ukraine