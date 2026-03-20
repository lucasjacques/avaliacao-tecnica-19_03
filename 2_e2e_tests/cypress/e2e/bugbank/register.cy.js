describe("Cadastro de usuário", () => {
  it("Deve cadastrar um usuário com sucesso", () => {
    const email = `user_${Date.now()}@test.com`;

    cy.visit("https://bugbank.netlify.app/");

    cy.contains("Registrar").click();

    cy.fillRegister(email, "QA Tester", "123456");

    cy.contains("Cadastrar").click({ force: true });

    cy.contains("sucesso").should("be.visible");
  });
});