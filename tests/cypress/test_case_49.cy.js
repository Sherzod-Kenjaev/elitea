describe('Pipeline Creation Performance', () => {
  it('should load the form within 2 seconds', () => {
    cy.login();

    const startTime = performance.now();
    cy.visit('/pipeline/create');
    const endTime = performance.now();

    expect(endTime - startTime).to.be.lessThan(2000); // Assert form loads within 2 seconds
  });

  it('should save the pipeline within 1 second', () => {
    cy.login();
    cy.visit('/pipeline/create');

    cy.get('#pipeline-name').type('Performance Test');
    cy.get('#pipeline-description').type('Performance testing pipeline');
    cy.get('#pipeline-tags').type('Performance');

    const startTime = performance.now();
    cy.get('#save-button').click();
    const endTime = performance.now();

    expect(endTime - startTime).to.be.lessThan(1000); // Assert save operation completes within 1 second
  });
});