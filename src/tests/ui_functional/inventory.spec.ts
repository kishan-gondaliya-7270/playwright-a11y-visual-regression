import { test, expect } from "../../fixtures/pages";
import users from "../../fixtures/data/users.json";
import products from "../../fixtures/data/products.json";

test.describe('Inventory Page Tests', () => {
  const baseUrl = process.env.BASE_URL || "https://www.saucedemo.com";

  // Hook to log in and navigate to the inventory page before each test
  test.beforeEach(async ({ loginPage, inventoryPage }) => {
    await loginPage.navigateTo(baseUrl);
    const validUser = users.validUsers[0];
    await loginPage.login(validUser.username, validUser.password);
    await inventoryPage.assertOnInventoryPage();
  });

  test('should validate visibility of all elements on the inventory page', async ({ inventoryPage }) => {
    await expect(inventoryPage.pageHeaderTitle).toBeVisible();
    await expect(inventoryPage.pageTitle).toContainText(products.invetory_page_title);
    await expect(inventoryPage.cartIcon).toBeVisible();
    await expect(inventoryPage.menuButton).toBeVisible();
    await expect(inventoryPage.productSortDropdown).toBeVisible();
  });

  test('should sort items Z-A on the inventory page', async ({ inventoryPage }) => {
    await inventoryPage.sortProducts('za');
    const itemNames = await inventoryPage.getItemNames();

    // Assert items are sorted Z-A
    const expectedSortedNames = [...itemNames].sort((a, b) => b.localeCompare(a));
    expect(itemNames).toEqual(expectedSortedNames);
  });

  test('should sort items by Price (high to low)', async ({ inventoryPage }) => {
    await inventoryPage.sortProducts('hilo');
    const itemPrices = await inventoryPage.getItemPrices();

    // Assert prices are sorted high to low
    const expectedSortedPrices = [...itemPrices].sort((a, b) => b - a);
    expect(itemPrices).toEqual(expectedSortedPrices);
  });
});
