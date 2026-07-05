describe('Наш першийблок тестів', () => {
    it('Тест відвідування сайту LMS', () => {
        cy.visit('https://www.edu.goit.global/account/login')
        // Знаходимо інпут з поштою та вводимо email
        cy.get("#user_email").type("testowyqa@qa.team");
        // Знаходимо інпут з паролем та вводимо пароль
        cy.get("#user_password").type("QA!automation-1");
        // Знаходимо кнопку "Увійти" та клікаємо на неї
        cy.get("[type='submit']").click();
        //знаходити в правому верхньому кутку кнопку "Профіль" та клікаємо на неї
        cy.get('#open-navigation-menu-mobile').click();
        //знаходимо кнопку "Log out" та клікаємо на неї
        cy.contains("Log out").click(); 
    });     
});