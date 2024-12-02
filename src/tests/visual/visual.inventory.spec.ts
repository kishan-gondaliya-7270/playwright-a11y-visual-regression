import { VisualHelper } from "../../helpers/visualHelper";
import { test, expect } from "../../fixtures/pages";
import users from "../../fixtures/data/users.json";
  
test.describe('Visual Test: Inventory Page', () => {
  test('@visual should visually match the inventory page with masked product images', async ({  loginPage, inventoryPage }) => {
        // Navigate to the page and login
      const baseUrl = process.env.BASE_URL || 'https://www.saucedemo.com';
      await loginPage.navigateTo(baseUrl)

      //const visualUsers = users.visualUsers[0];
      expect(loginPage.assertOnLoginPage).toBeTruthy();
      const validUser = users.validUsers[0];
      await loginPage.login(validUser.username, validUser.password);
      //await loginPage.login(visualUsers.username, visualUsers.password);
      await inventoryPage.assertOnInventoryPage();
  
      // Define locators to mask
      const maskLocators = [inventoryPage.page.locator('[data-test="inventory-list"]')];
      const item = inventoryPage.page.locator('[data-test="shopping-cart-link"]');
      await expect(item).toBeVisible();
  
      // Take screenshot with masking
      await VisualHelper.takeAndCompareScreenshot(inventoryPage.page, 'inventory', {
        mask: maskLocators,
      });
    });
  });
  