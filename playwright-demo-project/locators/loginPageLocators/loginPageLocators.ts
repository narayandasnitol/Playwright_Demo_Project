import { Page, Locator } from "@playwright/test";

export class LoginPageLocators {
  private page: Page;

  public emailInput: Locator;
  public passwordInput: Locator;
  public loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.emailInput = this.page.getByPlaceholder("Email");
    this.passwordInput = this.page.getByPlaceholder("Password");
    this.loginButton = this.page.getByRole("button", { name: "Sign in" });
  }
}
