Feature: Pipeline Creation Performance
  As a user
  I want the pipeline creation form to load and save quickly
  So that I can efficiently create pipelines

  Scenario: Validate performance of pipeline creation form
    Given I am logged in and on the pipeline creation interface
    When I measure the time taken for the form to load
    Then the form should load within 2 seconds

    When I save a pipeline with valid inputs
    Then the pipeline should be saved within 1 second