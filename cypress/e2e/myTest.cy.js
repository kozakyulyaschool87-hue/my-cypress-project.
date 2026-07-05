describe('Наш перший блок тестів', () => {
  it('Тест відвідування сайту LMS', () => {
    cy.visit('https://www.edu.goit.global/account/login')
  });
});