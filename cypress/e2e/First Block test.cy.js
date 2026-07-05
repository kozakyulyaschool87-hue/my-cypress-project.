describe("Наш перший блок тестів", () => {
  it("Тест відвідування сайту LMS", () => {
    cy.visit("https://www.edu.goit.global/account/login");

        // Знаходимо інпут з поштою та вводимо email
        cy.get("#user_email").type("user888@gmail.com");
  });
});