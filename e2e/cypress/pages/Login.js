class Login {
  navigate() {
    cy.visit("https://www.edu.goit.global/account/login");
  }

  validateLoginTitle() {
    cy.contains('Login').should('be.visible');
  }

  validateInputs() {
    cy.get('#user_email').should('be.visible');
    cy.get('#user_password').should('be.visible');
  }

  validateButton() {
    cy.contains('button', 'Log in').should('be.visible');
  }

  validatePasswordLink() {
    cy.contains("I can't remember the password").should('be.visible');
  }

  setUsername(username) {
    cy.get('#user_email').clear().type(username);
  }

  setPassword(password) {
    cy.get('#user_password').clear().type(password);
  }

  clickSubmit() {
    cy.get("[type='submit']").click();
  }

  navigateToProfile() {
    cy.get('#open-navigation-menu-mobile').click();
  }

  clickLogout() {
    cy.contains('Log out').click();
  }
}

export { Login };
export default Login;