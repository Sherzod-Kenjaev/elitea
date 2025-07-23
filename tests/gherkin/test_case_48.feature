Feature: Pipeline Creation
  As a user
  I want to be notified when mandatory fields are missing
  So that I can provide the required details

  Scenario: Attempt to save a pipeline without mandatory fields
    Given I am logged in and on the pipeline creation interface
    When I leave the "Name" and "Description" fields empty
    And I click "Save"
    Then I should see an error message indicating that "Name" and "Description" are required