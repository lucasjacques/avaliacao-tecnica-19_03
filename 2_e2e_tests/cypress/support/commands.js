Cypress.Commands.add("fillLogin", (email, password) => {
  cy.get('input[name="email"]').filter(':visible').type(email);
  cy.get('input[name="password"]').filter(':visible').type(password);
});

Cypress.Commands.add("fillRegister", (email, name, password) => {
  cy.get('form[class*="ContainerFormRegister"]').within(() => {
  cy.get('input[name="email"]').type(email, { force: true });
  cy.get('input[name="name"]').type(name, { force: true });
  cy.get('input[name="password"]').type(password, { force: true });
  cy.get('input[name="passwordConfirmation"]').type(password, { force: true });
});});