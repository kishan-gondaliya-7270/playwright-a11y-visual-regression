import { test } from "../../fixtures/pages";
import { VisualHelper } from "../../helpers/visualHelper";
test.describe("Visual Test: Login Page", () => {
    test("@visual should visually match the login page", async ({ loginPage, }) => {
        // Navigate to the page
        const baseUrl = process.env.BASE_URL || "https://www.saucedemo.com";
        await loginPage.navigateTo(baseUrl);
        // Take and compare the screenshot
        await VisualHelper.takeAndCompareScreenshot(loginPage.page, "login");
    });
});
