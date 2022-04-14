Feature: End to end Login Validation Application

  @Regression
  Scenario:  As a user, I can log into the secure area
    Given I am on the login page
    When I login with correct username and password
    Then I should see a flash message saying message