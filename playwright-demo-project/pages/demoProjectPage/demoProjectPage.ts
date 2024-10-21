import { DemoProjectLocators } from "./../../locators/demoProjectLocators/demoProjectPageLocators";
import { Locator, Page, expect } from "@playwright/test";
import { SignupPageLocators } from "../../locators/signupPageLocators/signupPageLocators";
import { LoginPageLocators } from "../../locators/loginPageLocators/loginPageLocators";
import * as data from "../../fixtures/testData";
import { randomInformation } from "../../fixtures/testData";
import { getRandomEmail, getRandomPassword } from "../../fixtures/credentials";
import { envConfig } from "../../utils/envConfig";

let articleTitle: string = "";
let articleCategory: string = "";
let articleDescription: string = "";
let articleTag: string = "";
let articleTitle1: string = "";
let articleCategory1: string = "";
let articleDescription1: string = "";
let articleTag1: string = "";
let newUserPassword: string = "TestNitol123@";

export class DemoProject {
  randomInfo = randomInformation();

  private page: Page;
  private locators: DemoProjectLocators;
  private signupPageLocators: SignupPageLocators;
  private login: LoginPageLocators;

  private static email: string = getRandomEmail();

  constructor(page: Page) {
    this.page = page;
    this.locators = new DemoProjectLocators(page);
    this.signupPageLocators = new SignupPageLocators(page);
    this.login = new LoginPageLocators(page);

    articleTitle = data.getRandomArticleTitle();
    articleCategory = data.getRandomArticleCategory();
    articleDescription = data.getRandomArticleBody();
    articleTag = data.getRandomArticleTag();
  }

  /*------------------------------------- Functionality STARTS ---------------------------------------- */

  async newArticleButtonClick() {
    await this.locators.newArticleButton.click();
  }

  async newArticleTitleInput() {
    await this.locators.newArticleTitleInput.clear();
    await this.locators.newArticleTitleInput.fill(articleTitle);
  }

  async newArticleTypeInput() {
    await this.locators.newArticleTypeInput.clear();
    await this.locators.newArticleTypeInput.fill(articleCategory);
  }

  async newArticleDescriptionInput() {
    await this.locators.newArticleDescriptionInput.clear();
    await this.locators.newArticleDescriptionInput.fill(articleDescription);
  }

  async newArticleTagInput() {
    await this.locators.newArticleTagInput.clear();
    await this.locators.newArticleTagInput.fill(articleTag);
  }

  async editArticleTitleInput() {
    articleTitle1 = data.getRandomArticleTitle();
    await this.locators.newArticleTitleInput.clear();
    await this.locators.newArticleTitleInput.fill(articleTitle1);
  }

  async editArticleTypeInput() {
    articleCategory1 = data.getRandomArticleCategory();
    await this.locators.newArticleTypeInput.clear();
    await this.locators.newArticleTypeInput.fill(articleCategory1);
  }

  async editArticleDescriptionInput() {
    articleDescription1 = data.getRandomArticleBody();
    await this.locators.newArticleDescriptionInput.clear();
    await this.locators.newArticleDescriptionInput.fill(articleDescription1);
  }

  async editArticleTagInput() {
    articleTag1 = data.getRandomArticleTag();
    await this.locators.newArticleTagInput.clear();
    await this.locators.newArticleTagInput.fill(articleTag1);
  }

  async articlePublishButton() {
    await this.locators.articlePublishButton.click();
  }

  async articleDeleteButton() {
    await this.locators.articleDeleteButton.click();
  }

  async editArticleButton() {
    await this.locators.editArticleButton.click();
  }

  async filterTagButton() {
    await this.locators.filterTagButton.click();
  }

  async filterTagButton2() {
    await this.locators.filterTagButton2.click();
  }

  async settingsButtonClick() {
    await this.locators.settingsButton.click();
  }

  async newPasswordInput() {
    await this.locators.newPasswordInput.fill(newUserPassword);
  }
  async defaultPasswordInput() {
    await this.locators.newPasswordInput.fill(envConfig.userPassword);
  }

  async updateSettingsButtonClick() {
    await this.locators.updateSettingsButton.click();
  }

  /*------------------------------------- Functionality ENDS ---------------------------------------- */

  /*------------------------------------- Assertion STARTS ------------------------------------------ */

  async verifyNewArticleInputPage() {
    await expect(this.locators.verifyNewArticleInputPage).toBeVisible();
  }

  async verifyNewArticleTitle() {
    await expect(
      this.page.getByRole("heading", { name: articleTitle })
    ).toBeVisible();
  }

  async verifyEditArticleTitle() {
    await expect(
      this.page.getByRole("heading", { name: articleTitle1 })
    ).toBeVisible();
  }

  async verifyFilterTagData() {
    await expect(this.locators.verifyFilterTagData).toBeVisible();
  }

  async verifyFilterTagData2() {
    await expect(this.locators.verifyFilterTagData2).toBeVisible();
  }

  async verifySettingsPage() {
    await expect(this.locators.verifySettingsPage).toBeVisible();
  }

  async verifyNewPassword() {
    await this.locators.settingsButton.click();
    await this.locators.logoutButton.click();
    await this.signupPageLocators.signInFormButton.click();
    await expect(this.signupPageLocators.verifySignInPage).toBeVisible();
    await this.login.emailInput.fill(envConfig.userEmail);
    await this.login.passwordInput.fill(newUserPassword);
    await this.login.loginButton.click();
    await expect(this.signupPageLocators.verifySignupSuccess).toBeVisible();
  }

  /*------------------------------------- Assertion ENDS ------------------------------------------ */
}
