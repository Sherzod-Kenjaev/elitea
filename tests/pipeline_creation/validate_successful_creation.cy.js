describe('Pipeline Creation', () => {
  it('should successfully create a pipeline with mandatory fields', () => {
    cy.login(); // Custom command to log in
    cy.visit('/pipeline/create'); // Navigate to pipeline creation interface

    // Enter mandatory fields
    cy.get('#pipelineName').type('Test Pipeline');
    cy.get('#pipelineDescription').type('This is a test pipeline.');

    // Save pipeline
    cy.get('#saveButton').click();

    // Assert success
    cy.contains('Pipeline saved successfully').should('be.visible');
  });
});