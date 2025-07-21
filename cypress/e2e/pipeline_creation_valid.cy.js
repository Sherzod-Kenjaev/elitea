describe('Pipeline Creation', () => {
  it('should create a pipeline with valid details', () => {
    cy.login(); // Custom command for login
    cy.selectProjectContext(); // Custom command for selecting project context

    cy.visit('/pipeline/create');
    cy.get('#name').type('Test Pipeline');
    cy.get('#description').type('Sample workflow');
    cy.get('#tags').type('test, example');
    cy.get('#profileImage').attachFile('default.jpg'); // Requires file upload plugin
    cy.get('#saveButton').click();

    cy.get('.success-message').should('contain', 'Pipeline saved successfully');
    cy.get('.error-message').should('not.exist');
  });
});