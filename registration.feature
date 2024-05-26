Feature: User Registration
  As a new user
  I want to be able to register on the website

  Scenario: Successful registration
    Given I am on the registration page
    When I fill in the registration form with valid details
    And I submit the registration form
    Then I should see a success message

  Scenario: Failed registration
    Given I am on the registration page
    When I fill in the registration form with invalid details
    And I submit the registration form
    Then I should see an error message
