describe('Todo Application tests', () => {
  it('Visits the Todo application', () => {
    cy.visit('http://localhost:3000')

    // cy.get('input').type('My new todo using cypress {enter}')
    cy.focused().type('My new todo using cypress {enter}')
  });
})