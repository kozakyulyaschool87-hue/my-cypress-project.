import { Login } from "../../pages/Login";

describe("Page object example", () => {
  it("login page test", () => {
    const loginPage = new Login();

    loginPage.navigate();
    loginPage.validateLoginTitle();
    loginPage.validateInputs();
    loginPage.validateButton();
    loginPage.validatePasswordLink();
  });


  it.only("login page interaction test", () => {
    const loginPage = new Login();

    loginPage.navigate();
    loginPage.setUsername("testtestowyqa@qa.team");
    loginPage.setPassword("QA!automation-1");
    loginPage.clickSubmit();
    loginPage.navigateToProfile();
    loginPage.clickLogout();
  });
});
