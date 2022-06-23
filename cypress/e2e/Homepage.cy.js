describe('Hydrate Homepage', () => {
  it('visits the Homepage', () => {
    cy.request('http://localhost:3001')

    cy.contains('type')

  })
})