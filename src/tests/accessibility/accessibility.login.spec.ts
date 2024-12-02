import { test } from "../../fixtures/pages"; // Custom fixture
import { A11yHelper } from "../../helpers/a11yHelper"; // Accessibility Helper

test.describe("Accessibility Test: Login Page", () => {
  test("@a11y should have no accessibility violations on login page", async ({
    loginPage,
  }) => {
    // Navigate to the login page
    const baseUrl = process.env.BASE_URL || "https://www.saucedemo.com";
    await loginPage.navigateTo(baseUrl);

    // Run accessibility audit
    await A11yHelper.runAndReportA11y(loginPage.page, "login-page");
  });
});
