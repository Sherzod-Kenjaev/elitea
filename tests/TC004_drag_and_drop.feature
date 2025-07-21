Feature: Visual Flow Designer
  Scenario: Verify drag-and-drop functionality in visual designer
    Given the user is logged in and authorized
    When the user opens the visual flow designer
    And drags a "Start" node onto the canvas
    And drags a "Condition" node and connects it to the "Start" node
    And configures the "Condition" node
    And clicks "Save"
    Then the nodes are added, connected, and configured successfully
    And the pipeline is saved with the visual flow intact