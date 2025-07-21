describe('Pipeline Creation', () => {
  it('should save optional fields correctly', () => {
    cy.loginAsAuthorizedUser();
    cy.visit('/pipeline/create');
    cy.get('#name').type('Test Pipeline');
    cy.get('#description').type('Test');
    cy.get('#tags').type('Automation, Workflow');
    cy.get('#profileImage').attachFile('image.jpg');
    cy.get('#conversationStarters').type('How can I help?');
    cy.get('#saveButton').click();
    cy.contains('Pipeline saved successfully').should('be.visible');
  });
});