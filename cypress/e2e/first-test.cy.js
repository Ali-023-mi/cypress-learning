describe('Cypress Radio Button Test', () => {
  it('should select one radio button and verify another is not selected', () => {
    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-radios input[type="radio"]')
      .check('radio1')

    cy.get('.action-radios input[type="radio"][value="radio1"]')
      .should('be.checked')

    cy.get('.action-radios input[type="radio"][value="radio2"]')
      .should('not.be.checked')
  })
})