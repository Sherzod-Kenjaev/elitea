describe('YAML Editor Sync', () => {
  it('should sync YAML editor with visual designer', () => {
    cy.loginAsAuthorizedUser();
    cy.visit('/pipeline/designer');
    cy.dragAndDrop('#startNode', '#canvas');
    cy.dragAndDrop('#conditionNode', '#canvas');
    cy.configureNode('#conditionNode', { key: 'value' });
    cy.switchToYAMLEditor();
    cy.contains('startNode').should('exist');
    cy.contains('conditionNode').should('exist');
    cy.editYAML({ key: 'newValue' });
    cy.switchToVisualDesigner();
    cy.contains('newValue').should('exist');
  });
});