describe('Pipeline Creation', () => {
  it('should show an error when mandatory fields are missing', () => {
    cy.login();
    cy.visit('/pipeline/create');

    cy.get('#save-button').click();

    cy.contains('Name is required').should('be.visible');
    cy.contains('Description is required').should('be.visible');
  });
});