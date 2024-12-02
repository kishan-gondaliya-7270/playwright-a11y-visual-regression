import { PlaywrightTestConfig } from "@playwright/test";
import dotenv from "dotenv";

// Load environment variables from the `.env` file
dotenv.config();

const config: PlaywrightTestConfig = {
  // **Test Files**
  testDir: "./src/tests/",
  testMatch: "*.spec.ts",

  // **Timeouts**
  timeout: 60000, // Global timeout for each test

  // **Retries & Workers**
  retries: 1, // Retry once for flaky tests
  workers: 1, // Number of parallel test workers (adjust for parallelism)

  // **Reporters**
  reporter: [
    ["list"], // Terminal output in list format
    ["allure-playwright"], // Allure reporting
  ],

  // **Shared Settings**
  use: {
    baseURL: process.env.BASE_URL || "https://www.saucedemo.com", // Base URL for tests
    viewport: { width: 1280, height: 720 }, // Default viewport size
    ignoreHTTPSErrors: true, // Ignore HTTPS errors
    screenshot: "only-on-failure", // Take screenshots only on failure
    video: "retain-on-failure", // Retain videos for failed tests
    trace: "on-first-retry", // Enable trace on first retry
  },

  // **Projects for Different Browsers**
  projects: [
    {
      name: "chromium", // Chromium-based browsers
      use: {
        browserName: "chromium",
        headless: true,
        video: "retain-on-failure",
      },
    },
    {
      name: "firefox", // Firefox browser
      use: {
        browserName: "firefox",
        headless: true,
        video: "retain-on-failure",
      },
    },
    {
      name: "webkit", // WebKit browser
      use: {
        browserName: "webkit",
        headless: true,
        video: "retain-on-failure",
      },
    },
  ],

  // **Output Directory**
  outputDir: "./test-results", // Directory for artifacts like screenshots and traces
};

export default config;
