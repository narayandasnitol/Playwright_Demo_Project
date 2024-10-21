import { test } from "@playwright/test";
import { Login } from "../../pages/loginPage/loginPage";
import { Signup } from "../../pages/signupPage/signupPage";
// @ts-ignore
import fs from "fs";

const storageStatePath = "storageState.json";

if (fs.existsSync(storageStatePath)) {
  test.use({ storageState: storageStatePath });
}

test.describe("Playwright Demo Project Login", () => {
  let login: Login;
  let signup: Signup;

  test.beforeEach(async ({ page }) => {
    login = new Login(page);
    signup = new Signup(page);

    await login.navigateToURL();
    if (!fs.existsSync(storageStatePath)) {
      await signup.navigateToSignup();
    }
  });

  test.afterEach(async ({ context }) => {
    await context.storageState({ path: storageStatePath });
  });
});
