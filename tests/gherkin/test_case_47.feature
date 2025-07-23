Feature: Pipeline Creation
  As a user
  I want to create a pipeline with valid inputs
  So that I can save it successfully

  Scenario: Create a pipeline with valid inputs
    Given I am logged in and on the pipeline creation interface
    When I enter a valid name "Test Pipeline"
    And I enter a valid description "Pipeline for testing"
    And I add tags "Test, Demo"
    And I upload a profile image "profile.jpg"
    And I click "Save"
    Then the pipeline should be successfully saved
    And I should see a confirmation message