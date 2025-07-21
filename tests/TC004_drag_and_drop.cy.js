describe('Visual Flow Designer', () => {
  it('should allow drag-and-drop functionality and save the pipeline', () => {
    cy.loginAsAuthorizedUser();
    cy.visit('/pipeline/designer');
    cy.dragAndDrop('#startNode', '#canvas');
    cy.dragAndDrop('#conditionNode', '#canvas');
    cy.connectNodes('#startNode', '#conditionNode');
    cy.configureNode('#conditionNode', { key: 'value' });
    cy.get('#saveButton').click();
    cy.contains('Pipeline saved successfully').should('be.visible');
  });
});