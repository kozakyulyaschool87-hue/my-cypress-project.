import { login } from "../../pages/Login";

describe("Page object example", () => {
  it("login page test", () => {
    login.navigate();
    login.validateLoginTitle();
    login.validateInputs();
    login.validateButton();
    login.validatePasswordLink();
  });
});