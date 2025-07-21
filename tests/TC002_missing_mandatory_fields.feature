Feature: Pipeline Creation
  Scenario: Verify error message for missing mandatory fields
    Given the user is logged in and authorized
    When the user opens the pipeline creation interface
    And leaves the name and description fields empty
    And clicks "Save"
    Then an error message "Name and Description are required fields." is displayed