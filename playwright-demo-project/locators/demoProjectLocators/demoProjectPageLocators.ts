import { Page, Locator } from "@playwright/test";
import * as data from "../../fixtures/testData";
import { randomInformation } from "../../fixtures/testData";

export class DemoProjectLocators {
  private page: Page;
  randomInfo = randomInformation();

  public newArticleButton: Locator;
  public verifyNewArticleInputPage: Locator;
  public newArticleTitleInput: Locator;
  public newArticleTypeInput: Locator;
  public newArticleDescriptionInput: Locator;
  public newArticleTagInput: Locator;
  public articlePublishButton: Locator;
  public articleDeleteButton: Locator;
  public settingsButton: Locator;
  public verifySettingsPage: Locator;
  public logoutButton: Locator;
  public editArticleButton: Locator;
  public filterTagButton: Locator;
  public filterTagButton2: Locator;
  public verifyFilterTagData: Locator;
  public verifyFilterTagData2: Locator;
  public newPasswordInput: Locator;
  public updateSettingsButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.newArticleButton = this.page.getByRole("link", {
      name: "  New Article",
    });
    this.verifyNewArticleInputPage =
      this.page.getByPlaceholder("Article Title");
    this.newArticleTitleInput = this.page.getByPlaceholder("Article Title");
    this.newArticleTypeInput = this.page.getByPlaceholder(
      "What's this article about?"
    );
    this.newArticleDescriptionInput = this.page.getByPlaceholder(
      "Write your article (in"
    );
    this.newArticleTagInput = this.page.getByPlaceholder("Enter tags");
    this.articlePublishButton = this.page.getByRole("button", {
      name: "Publish Article",
    });
    this.articleDeleteButton = this.page
      .getByRole("button", { name: " Delete Article" })
      .nth(1);
    this.settingsButton = this.page.getByRole("link", { name: "  Settings" });
    this.logoutButton = this.page.getByRole("button", {
      name: "Or click here to logout.",
    });
    this.editArticleButton = this.page
      .getByRole("link", { name: " Edit Article" })
      .nth(1);
    this.filterTagButton = this.page.locator(
      'a:has-text("GitHub")'
    ).last();
    this.filterTagButton2 = this.page.locator(
      'a:has-text("Coding")'
    ).last();
    this.verifyFilterTagData = this.page.getByText("GitHub").first();
    this.verifyFilterTagData2 = this.page.getByText("Coding").first();
    this.verifySettingsPage = this.page.getByRole("heading", {
      name: "Your Settings",
    });
    this.newPasswordInput = this.page.getByPlaceholder("New Password");
    this.updateSettingsButton = this.page.getByRole("button", {
      name: "Update Settings",
    });
  }
}
