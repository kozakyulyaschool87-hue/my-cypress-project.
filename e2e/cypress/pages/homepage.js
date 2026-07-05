class Homepage 
{
    visit() {
        cy.visit("https://www.edu.goit.global/");   
        cy.contains("GoIT").should("be.visible");
    }
    setUsername (username){
        cy.get("#user_email").type("testowyqa@qa.team");
    }
    setPassword (password){
        cy.get("#user_password").type("QA!automation-1");
    }
    clickSubmit(){
        cy.get("[type='submit']").click();
    }
    navigateToProfile(){
        cy.get('#open-navigation-menu-mobile').click(); 
    }
    clickLogout(){
        cy.contains("Log out").click(); 
} 
}