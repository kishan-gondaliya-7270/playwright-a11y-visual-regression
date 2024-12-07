import { test } from "../../fixtures/pages"; // Custom fixture
import { A11yHelper } from "../../helpers/a11yHelper"; // Accessibility Helper
test.describe("Accessibility Test: Inventory Page", () => {
    test("@a11y should have no accessibility violations on inventory page", async ({ loginPage, inventoryPage, }) => {
        // Navigate to the login page and login
        const baseUrl = process.env.BASE_URL || "https://www.saucedemo.com";
        const validUser = { username: "standard_user", password: "secret_sauce" };
        await loginPage.navigateTo(baseUrl);
        await loginPage.login(validUser.username, validUser.password);
        // Assert that we are on the inventory page
        await inventoryPage.assertOnInventoryPage();
        // Run accessibility audit on inventory page
        await A11yHelper.runAndReportA11y(inventoryPage.page, "inventory-page");
    });
});
