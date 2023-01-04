Feature: telnyx.com
    Scenario: Try it Free on Products Page
        Given I visit telnyx.com
        Then I accept cookies
        Then I click on button Products
        Then I click on See All Products
        When I scroll to green block
        Then I should click on Try it Free and check a pathname
       
