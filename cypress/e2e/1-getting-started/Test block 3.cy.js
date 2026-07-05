describe("Наш перший блок тестів", () => {
  it("Тест відвідування сайту LMS", () => {
    cy.visit("https://www.edu.goit.global/account/login");

        // Знаходимо інпут з поштою та вводимо email
        cy.get("#user_email").type("user888@gmail.com");
        // Знаходимо інпут з паролем та вводимо пароль
        cy.get("#user_password").type("1234567890");
        // Знаходимо кнопку "Увійти" та клікаємо на неї
        cy.get("[type='submit']").click();
        //знаходимо в правому верхньому кутку кнопку "Профіль" та клікаємо на неї
        cy.get("button").contains("Профіль").click();
        //знаходимо кнопку "Вихід" та клікаємо на неї
        cy.contains("Вихід").click();
  });
});