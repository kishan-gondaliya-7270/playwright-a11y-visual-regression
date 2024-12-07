import { test } from "../../fixtures/pages";
import users from "../../fixtures/data/users.json";
import { sleep } from "../../utils/sleep"; // For development only
test("Complete checkout flow", async ({ loginPage, inventoryPage }) => {
    const baseUrl = process.env.BASE_URL || "https://www.saucedemo.com";
    await loginPage.navigateTo(baseUrl);
    try {
        const validUser = users.validUsers[0];
        await loginPage.login(validUser.username, validUser.password);
        await inventoryPage.assertOnInventoryPage();
        await inventoryPage.addItemToCart();
        await inventoryPage.goToCart();
        await sleep(1000);
        // Additional steps for CartPage, CheckoutPage, OrderConfirmationPage
    }
    catch (error) {
        throw new Error(error);
    }
});
