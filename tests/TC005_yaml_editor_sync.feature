Feature: YAML Editor Sync
  Scenario: Verify YAML editor syncs with visual designer
    Given the user is logged in and authorized
    When the user opens the visual flow designer
    And adds nodes "Start" and "Condition" using drag-and-drop
    And configures the "Condition" node
    And switches to the YAML editor
    Then the YAML editor reflects the added nodes and their configuration
    And changes made in the YAML editor are reflected back in the visual designer