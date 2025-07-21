describe('Pipeline Creation', () => {
  it('should display an error message for missing mandatory fields', () => {
    cy.loginAsAuthorizedUser();
    cy.visit('/pipeline/create');
    cy.get('#name').clear();
    cy.get('#description').clear();
    cy.get('#saveButton').click();
    cy.contains('Name and Description are required fields.').should('be.visible');
  });
});