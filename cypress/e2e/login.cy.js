
describe('SauceDemo Login Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('should log in successfully with valid credentials', () => {
    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()

    cy.url().should('include', '/inventory.html')

    cy.get('.inventory_list')
      .should('be.visible')
  })

  it('should show an error for an incorrect password', () => {
    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('wrong_password')

    cy.get('[data-test="login-button"]')
      .click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match')
  })

  it('should show an error when the username is empty', () => {
    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username is required')
  })

  it('should log out successfully', () => {
    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()

    cy.get('#react-burger-menu-btn')
      .click()

    cy.get('#logout_sidebar_link')
      .click()

    cy.url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test="login-button"]')
      .should('be.visible')
  })

})
