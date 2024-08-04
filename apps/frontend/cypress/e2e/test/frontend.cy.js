describe('Testing app', () => {
    beforeEach(() => {
      cy.visit('https://payzen.devprojects.world')
    })
  
    it('is able to log in', () => {
      cy.contains('Get Started').should('exist')
      cy.contains('Get Started').click()
      cy.contains('Sign in').should('exist', { timeout: 10000 })
      })
  
  })
  