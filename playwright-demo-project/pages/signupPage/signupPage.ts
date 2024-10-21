import { Page, expect } from "@playwright/test";
import { LoginPageLocators } from "../../locators/loginPageLocators/loginPageLocators";
import { SignupPageLocators } from "../../locators/signupPageLocators/signupPageLocators";
import { DemoProjectLocators } from "../../locators/demoProjectLocators/demoProjectPageLocators";
import { Login } from "../loginPage/loginPage";
import { getRandomEmail, getRandomPassword } from "../../fixtures/credentials";
import { envConfig } from "../../utils/envConfig";
import * as data from "../../fixtures/testData";

export class Signup {
  private page: Page;
  private locators: LoginPageLocators;
  private signupPageLocators: SignupPageLocators;
  private demoProjectLocators: DemoProjectLocators;
  private login: Login;

  private static email: string = getRandomEmail();
  private static password: string = getRandomPassword();

  constructor(page: Page) {
    this.page = page;
    this.locators = new LoginPageLocators(page);
    this.signupPageLocators = new SignupPageLocators(page);
    this.demoProjectLocators = new DemoProjectLocators(page);
    this.login = new Login(page);
  }

  async navigateToSignup() {
    await this.signupPageLocators.signupFormButton.click();
    await expect(this.signupPageLocators.verifySignupPage).toBeVisible();
    await this.signupPageLocators.userNameInput.fill(data.getRandomUsername());
    await this.signupPageLocators.emailInput.fill(Signup.email);
    await this.signupPageLocators.passwordInput.fill(Signup.password);
    await this.signupPageLocators.signupButton.click();
    await expect(this.signupPageLocators.verifySignupSuccess).toBeVisible();
  }

  async navigateToSignIn() {
    await this.signupPageLocators.signInFormButton.click();
    await expect(this.signupPageLocators.verifySignInPage).toBeVisible();
    await this.locators.emailInput.fill(envConfig.userEmail);
    await this.locators.passwordInput.fill(envConfig.userPassword);
    await this.locators.loginButton.click();
  }

  async signOut() {
    await this.demoProjectLocators.settingsButton.click();
    await this.demoProjectLocators.logoutButton.click();
  }
}
