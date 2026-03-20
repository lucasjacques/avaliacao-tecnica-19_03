describe("Login inválido", () => {
  it("Deve exibir erro ao tentar login com credenciais inválidas", () => {
    cy.visit("https://bugbank.netlify.app/");

    cy.fillLogin("invalido@test.com", "senhaErrada");

    cy.contains("Acessar").click();

    cy.contains("Usuário ou senha inválido").should("be.visible");
  });
});