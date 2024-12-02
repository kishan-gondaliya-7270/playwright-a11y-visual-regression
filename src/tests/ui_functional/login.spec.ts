import { test, expect } from "../../fixtures/pages";
import users from "../../fixtures/data/users.json";

test("Login with valid credentials", async ({ loginPage, inventoryPage }) => {
  const baseUrl = process.env.BASE_URL || "https://www.saucedemo.com";

  await loginPage.navigateTo(baseUrl);
  try {
    const validUser = users.validUsers[0];
    await loginPage.login(validUser.username, validUser.password);
    await inventoryPage.assertOnInventoryPage();
    expect(inventoryPage.assertOnInventoryPage()).toBeTruthy()
  } catch (error) {
    throw new Error(error as string);
  }
});
