describe('YAML Synchronization', () => {
  it('should synchronize changes between visual designer and YAML editor', () => {
    cy.login();
    cy.createDraftPipeline(); // Custom command for creating a draft pipeline

    cy.visit('/pipeline/edit');
    cy.get('.visual-designer').dragAndDropNode('Start', { x: 100, y: 100 }); // Custom drag-and-drop command
    cy.get('.tab-yaml-editor').click();

    cy.get('.yaml-editor').should('contain', 'Start');
    cy.get('.yaml-editor').type('{selectall}{backspace}Updated YAML content');
    cy.get('.tab-visual-designer').click();

    cy.get('.visual-designer').should('contain', 'Updated YAML content');
    cy.get('.error-message').should('not.exist');
  });
});