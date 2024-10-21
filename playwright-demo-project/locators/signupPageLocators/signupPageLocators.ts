import { Page, Locator } from "@playwright/test";

export class SignupPageLocators {
  private page: Page;

  public signupFormButton: Locator;
  public verifySignupPage: Locator;
  public userNameInput: Locator;
  public emailInput: Locator;
  public passwordInput: Locator;
  public signupButton: Locator;
  public verifySignupSuccess: Locator;
  public signInFormButton: Locator;
  public verifySignInPage: Locator;
  public signInButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.signupFormButton = this.page.getByRole("link", { name: "Sign up" });
    this.verifySignupPage = this.page.getByRole("heading", { name: "Sign up" });
    this.userNameInput = this.page.getByPlaceholder("Username");
    this.emailInput = this.page.getByPlaceholder("Email");
    this.passwordInput = this.page.getByPlaceholder("Password");
    this.signupButton = this.page.getByRole("button", { name: "Sign up" });
    this.verifySignupSuccess = this.page.getByText("Home New Article Settings");
    this.signInFormButton = this.page.getByRole("link", { name: "Sign in" });
    this.verifySignInPage = this.page.getByRole("heading", { name: "Sign in" });
    this.signInButton = this.page.getByRole("button", { name: "Sign in" });
  }
}
