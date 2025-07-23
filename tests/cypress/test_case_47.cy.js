describe('Pipeline Creation', () => {
  it('should create a pipeline with valid inputs', () => {
    cy.login(); // Custom command for logging in
    cy.visit('/pipeline/create'); // Navigate to pipeline creation interface

    cy.get('#pipeline-name').type('Test Pipeline');
    cy.get('#pipeline-description').type('Pipeline for testing');
    cy.get('#pipeline-tags').type('Test, Demo');
    cy.get('#profile-image-upload').attachFile('profile.jpg'); // Assuming file upload plugin
    cy.get('#save-button').click();

    cy.contains('Pipeline successfully saved').should('be.visible');
  });
});