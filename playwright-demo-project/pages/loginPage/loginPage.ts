import { Page, expect } from "@playwright/test";
import { LoginPageLocators } from "../../locators/loginPageLocators/loginPageLocators";
import { envConfig } from "../../utils/envConfig";

export class Login {
  private page: Page;
  private locators: LoginPageLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new LoginPageLocators(page);
  }

  async navigateToURL() {
    await this.page.goto(envConfig.baseUrl);
  }

  async verifyDashboardUrl() {
    await expect(this.page).toHaveURL(envConfig.baseUrl);
  }
}
