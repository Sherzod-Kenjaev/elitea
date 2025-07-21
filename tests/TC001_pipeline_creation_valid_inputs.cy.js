describe('Pipeline Creation', () => {
  it('should create a pipeline with valid inputs', () => {
    cy.loginAsAuthorizedUser();
    cy.visit('/pipeline/create');
    cy.get('#name').type('Test Pipeline');
    cy.get('#description').type('Test');
    cy.get('#tags').type('Automation, Workflow');
    cy.get('#profileImage').attachFile('image.jpg');
    cy.get('#saveButton').click();
    cy.contains('Pipeline saved successfully').should('be.visible');
  });
});