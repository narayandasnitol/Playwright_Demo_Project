import { test, expect } from "@playwright/test";
import { DemoProject } from "../../pages/demoProjectPage/demoProjectPage";
import { Login } from "../../pages/loginPage/loginPage";
import { Signup } from "../../pages/signupPage/signupPage";
// @ts-ignore
import fs from "fs";
import { Author, Module } from "../../fixtures/tags";
import * as data from "../../fixtures/testData";

const storageStatePath = "storageState.json";

if (fs.existsSync(storageStatePath)) {
  test.use({ storageState: storageStatePath });
}

test.describe("Playwright Demo Project Test Suite", () => {
  let demoProject: DemoProject;
  let login: Login;
  let signup: Signup;

  test.beforeEach(async ({ page }) => {
    demoProject = new DemoProject(page);
    login = new Login(page);
    signup = new Signup(page);

    await login.navigateToURL();
    await login.verifyDashboardUrl();
    await signup.navigateToSignIn();
  });

  // test(
  //   "Test-001: Signup New User",
  //   {
  //     tag: [Author.NITOL, Module.SIGNUP],
  //   },
  //   async () => {
  //     await test.step("Sign Up New User To System", async () => {
  //       await signup.navigateToSignup();
  //     });
  //   }
  // );
  // /* --------------------------------------- END TEST -----------------------------------------------   */

  test(
    "Test-001: Create New Article",
    {
      tag: [Author.NITOL, Module.CREATE],
    },
    async () => {
      await test.step("Click New Article Button", async () => {
        await demoProject.newArticleButtonClick();
      });
      await test.step("Verify New Article Page", async () => {
        await demoProject.verifyNewArticleInputPage();
      });
      await test.step("New Article Title Input", async () => {
        await demoProject.newArticleTitleInput();
      });
      await test.step("New Article Category Input", async () => {
        await demoProject.newArticleTypeInput();
      });
      await test.step("New Article Description Input", async () => {
        await demoProject.newArticleDescriptionInput();
      });
      await test.step("New Article Tag Input", async () => {
        await demoProject.newArticleTagInput();
      });
      await test.step("Click Publish Article Button", async () => {
        await demoProject.articlePublishButton();
      });
      await test.step("Verify New Article", async () => {
        await demoProject.verifyNewArticleTitle();
      });
    }
  );
  /* --------------------------------------- END TEST -----------------------------------------------   */

  test(
    "Test-002: Delete Article",
    {
      tag: [Author.NITOL, Module.DELETE],
    },
    async () => {
      await test.step("Click New Article Button", async () => {
        await demoProject.newArticleButtonClick();
      });
      await test.step("Verify New Article Page", async () => {
        await demoProject.verifyNewArticleInputPage();
      });
      await test.step("New Article Title Input", async () => {
        await demoProject.newArticleTitleInput();
      });
      await test.step("New Article Category Input", async () => {
        await demoProject.newArticleTypeInput();
      });
      await test.step("New Article Description Input", async () => {
        await demoProject.newArticleDescriptionInput();
      });
      await test.step("New Article Tag Input", async () => {
        await demoProject.newArticleTagInput();
      });
      await test.step("Click Publish Article Button", async () => {
        await demoProject.articlePublishButton();
      });
      await test.step("Verify New Article", async () => {
        await demoProject.verifyNewArticleTitle();
      });
      await test.step("Click Delete Article Button", async () => {
        await demoProject.articleDeleteButton();
      });
    }
  );
  /* --------------------------------------- END TEST -----------------------------------------------   */

  test(
    "Test-003: Edit Article",
    {
      tag: [Author.NITOL, Module.EDIT],
    },
    async () => {
      await test.step("Click New Article Button", async () => {
        await demoProject.newArticleButtonClick();
      });
      await test.step("Verify New Article Page", async () => {
        await demoProject.verifyNewArticleInputPage();
      });
      await test.step("New Article Title Input", async () => {
        await demoProject.newArticleTitleInput();
      });
      await test.step("New Article Category Input", async () => {
        await demoProject.newArticleTypeInput();
      });
      await test.step("New Article Description Input", async () => {
        await demoProject.newArticleDescriptionInput();
      });
      await test.step("New Article Tag Input", async () => {
        await demoProject.newArticleTagInput();
      });
      await test.step("Click Publish Article Button", async () => {
        await demoProject.articlePublishButton();
      });
      await test.step("Verify New Article", async () => {
        await demoProject.verifyNewArticleTitle();
      });
      await test.step("Click Edit Article Button", async () => {
        await demoProject.editArticleButton();
      });
      await test.step("Edit Article Title Input", async () => {
        await demoProject.editArticleTitleInput();
      });
      await test.step("Edit Article Category Input", async () => {
        await demoProject.editArticleTypeInput();
      });
      await test.step("Edit Article Description Input", async () => {
        await demoProject.editArticleDescriptionInput();
      });
      await test.step("Edit Article Tag Input", async () => {
        await demoProject.editArticleTagInput();
      });
      await test.step("Click Publish Article Button", async () => {
        await demoProject.articlePublishButton();
      });
      await test.step("Verify New Article", async () => {
        await demoProject.verifyEditArticleTitle();
      });
    }
  );
  /* --------------------------------------- END TEST -----------------------------------------------   */

  test(
    "Test-004: Filter Articles by Tag",
    {
      tag: [Author.NITOL, Module.FILTER],
    },
    async () => {
      await test.step("Click Filter - GitHub", async () => {
        await demoProject.filterTagButton();
      });
      await test.step("Verify Filter Tag Data", async () => {
        await demoProject.verifyFilterTagData();
      });
      await test.step("Click Filter - Coding", async () => {
        await demoProject.filterTagButton2();
      });
      await test.step("Verify Filter Tag Data", async () => {
        await demoProject.verifyFilterTagData2();
      });
    }
  );
  /* --------------------------------------- END TEST -----------------------------------------------   */

  test(
    "Test-005: Update User Settings",
    {
      tag: [Author.NITOL, Module.SETTINGSUPDATE],
    },
    async () => {
      await test.step("Click Settings Button", async () => {
        await demoProject.settingsButtonClick();
      });
      await test.step("Verify Settings Page", async () => {
        await demoProject.verifySettingsPage();
      });
      await test.step("New Password Input", async () => {
        await demoProject.newPasswordInput();
      });
      await test.step("Update Settings Button Click", async () => {
        await demoProject.updateSettingsButtonClick();
      });
      await test.step("Verify New Password Working", async () => {
        await demoProject.verifyNewPassword();
      });
      await test.step("Click Settings Button", async () => {
        await demoProject.settingsButtonClick();
      });
      await test.step("Verify Settings Page", async () => {
        await demoProject.verifySettingsPage();
      });
      await test.step("New Password Input", async () => {
        await demoProject.defaultPasswordInput();
      });
      await test.step("Update Settings Button Click", async () => {
        await demoProject.updateSettingsButtonClick();
      });
    }
  );
  /* --------------------------------------- END TEST -----------------------------------------------   */
});
