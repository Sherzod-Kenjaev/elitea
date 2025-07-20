describe('Pipeline Creation', () => {
  it('should save pipeline with optional fields (tags and profile image)', () => {
    cy.login(); // Custom command to log in
    cy.visit('/pipeline/create'); // Navigate to pipeline creation interface

    // Enter mandatory fields
    cy.get('#pipelineName').type('Advanced Pipeline');
    cy.get('#pipelineDescription').type('Pipeline with optional fields.');

    // Add optional fields
    cy.get('#tagsInput').type('Tag1{enter}Tag2{enter}');
    cy.get('#profileImageUpload').attachFile('sample_image.jpg'); // Requires cypress-file-upload plugin

    // Save pipeline
    cy.get('#saveButton').click();

    // Assert success
    cy.contains('Pipeline saved successfully').should('be.visible');
  });
});