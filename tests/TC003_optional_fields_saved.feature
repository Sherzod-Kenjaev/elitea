Feature: Pipeline Creation
  Scenario: Verify optional fields are saved correctly
    Given the user is logged in and authorized
    When the user opens the pipeline creation interface
    And enters a valid name "Test Pipeline" and description "Test"
    And adds optional fields such as tags "Automation, Workflow", profile image "image.jpg", and conversation starters "How can I help?"
    And clicks "Save"
    Then the pipeline is saved with all optional fields correctly stored