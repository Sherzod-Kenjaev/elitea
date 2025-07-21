Feature: Pipeline Creation
  Scenario: Verify pipeline creation with valid inputs
    Given the user is logged in and authorized
    When the user opens the pipeline creation interface
    And enters a valid name "Test Pipeline" and description "Test"
    And adds optional tags "Automation, Workflow" and profile image "image.jpg"
    And clicks "Save"
    Then the pipeline is successfully saved with all provided details