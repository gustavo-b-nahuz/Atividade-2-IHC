describe('template spec', () => {
  it('acessar o boca', () => {
    cy.visit('https://inf15979.disciplinas.rlaiola.inf.ufes.br/boca/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > :nth-child(2) > input').clear('i');
    cy.get(':nth-child(1) > :nth-child(2) > input').type('ihc');
    cy.get(':nth-child(2) > :nth-child(2) > input').clear('i');
    cy.get(':nth-child(2) > :nth-child(2) > input').type('ihc');
    cy.get('[type="submit"]').click();
    cy.get(':nth-child(1) > .menu').click();
    /* ==== End Cypress Studio ==== */
    cy.title().should('include', 'Team');
  })
})
