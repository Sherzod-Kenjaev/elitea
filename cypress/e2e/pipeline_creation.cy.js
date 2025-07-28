describe('Pipeline Creation', () => {
  beforeEach(() => {
    // Precondition: User is logged in and authorized
    cy.login(); // Custom command to log in
  });

  it('Validates Pipeline Creation with Mandatory Fields', () => {
    // Step 1: Navigate to the pipeline creation interface
    cy.visit('/pipeline/create');

    // Step 2: Verify that the "Name" and "Description" fields are displayed
    cy.get('[data-testid="name-field"]').should('be.visible');
    cy.get('[data-testid="description-field"]').should('be.visible');

    // Step 3: Enter a valid name in the "Name" field
    cy.get('[data-testid="name-field"]').type('Test Pipeline');

    // Step 4: Enter a valid description in the "Description" field
    cy.get('[data-testid="description-field"]').type('This is a test pipeline.');

    // Step 5: Verify that the "Save" button is enabled
    cy.get('[data-testid="save-button"]').should('be.enabled');

    // Step 6: Click the "Save" button
    cy.get('[data-testid="save-button"]').click();

    // Step 7: Verify that a confirmation message is displayed
    cy.get('[data-testid="confirmation-message"]').should('contain', 'Pipeline created successfully');

    // Step 8: Navigate to the pipeline list view
    cy.visit('/pipeline/list');

    // Step 9: Verify that the newly created pipeline is listed with the correct name and description
    cy.get('[data-testid="pipeline-list"]').contains('Test Pipeline').should('be.visible');
    cy.get('[data-testid="pipeline-list"]').contains('This is a test pipeline.').should('be.visible');
  });
});