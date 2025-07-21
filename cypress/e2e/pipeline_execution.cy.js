describe('Pipeline Execution', () => {
  it('should execute a pipeline with valid parameters', () => {
    cy.login();
    cy.publishPipeline(); // Custom command for publishing a pipeline

    cy.visit('/pipeline/view');
    cy.get('.run-button').click();
    cy.get('.runtime-parameters').type('Valid Parameters');
    cy.get('.execute-button').click();

    cy.get('.logs').should('contain', 'Execution started');
    cy.get('.error-message').should('not.exist');
  });
});