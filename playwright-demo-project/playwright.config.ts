import { defineConfig } from "@playwright/test";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env") });

export default defineConfig({
  testDir: "./tests",
  timeout: 600000,
  expect: {
    timeout: 600000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: [["html", { outputFolder: "playwright-report" }]],
  use: {
    baseURL: process.env.BASE_URL,
    trace: "on",
    screenshot: "on",
    video: "retain-on-failure",
    actionTimeout: 600000,
    navigationTimeout: 600000,
    viewport: null,
    launchOptions: {
      args: [
        "--start-maximized",
        "--window-size=1920,1080",
        "--disable-web-security",
      ],
    },
  },
  projects: [
    {
      name: "chromium",
      use: {
        browserName: "chromium",
        viewport: null,
      },
    },
  ],
});
