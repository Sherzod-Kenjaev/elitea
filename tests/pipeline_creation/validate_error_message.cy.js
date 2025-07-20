describe('Pipeline Creation', () => {
  it('should display error messages for missing mandatory fields', () => {
    cy.login(); // Custom command to log in
    cy.visit('/pipeline/create'); // Navigate to pipeline creation interface

    // Leave mandatory fields empty and attempt to save
    cy.get('#saveButton').click();

    // Assert error messages
    cy.contains('Pipeline Name is required').should('be.visible');
    cy.contains('Pipeline Description is required').should('be.visible');
  });
});