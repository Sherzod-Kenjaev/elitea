describe('Pipeline Creation Validation', () => {
  it('should not save a pipeline without mandatory fields', () => {
    cy.login();
    cy.selectProjectContext();

    cy.visit('/pipeline/create');
    cy.get('#name').clear();
    cy.get('#description').clear();
    cy.get('#saveButton').click();

    cy.get('.error-message').should('contain', 'Name and Description are required fields.');
    cy.get('.success-message').should('not.exist');
  });
});