describe('Pruebas rápidas de PinnaCosta', () => {
  it('Debe abrir la página principal y luego ir al catálogo', () => {
    cy.visit('http://localhost:4200/');
    cy.url().should('include', '/');

    cy.visit('http://localhost:4200/catalogo');
    cy.url().should('include', '/catalogo');
  });
});
