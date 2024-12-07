import { expect } from "@playwright/test";
import urls from "../fixtures/data/urls.json";
import products from "../fixtures/data/products.json";
export class InventoryPage {
    _page;
    constructor(_page) {
        this._page = _page;
    }
    get page() {
        return this._page;
    }
    get pageHeaderTitle() {
        return this.page.getByText('Swag Labs');
    }
    get pageTitle() {
        return this.page.locator('[data-test="title"]');
    }
    get menuButton() {
        return this.page.locator('[data-test="open-menu"]');
    }
    get cartIcon() {
        return this.page.locator('[data-test="shopping-cart-link"]');
    }
    get productSortDropdown() {
        return this.page.locator('[data-test="product-sort-container"]');
    }
    get addToCartButton() {
        return this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    }
    get inventoryList() {
        return this.page.locator('[data-test="inventory-list"]');
    }
    get inventoryItems() {
        return this.page.locator('[data-test="inventory-item"]');
    }
    get itemNames() {
        return this.page.locator('[data-test="inventory-item-name"]');
    }
    get itemPrices() {
        return this.page.locator('[data-test="inventory-item-price"]');
    }
    async sortProducts(option) {
        await this.productSortDropdown.selectOption(option);
    }
    async addItemToCart() {
        await this.addToCartButton.click();
    }
    async goToCart() {
        await this.cartIcon.click();
    }
    async getItemNames() {
        return this.itemNames.allTextContents();
    }
    async getItemPrices() {
        const prices = await this.itemPrices.allTextContents();
        return prices.map(price => parseFloat(price.replace('$', '').trim()));
    }
    async assertOnInventoryPage() {
        await expect(this.page).toHaveURL(urls.inventoryPage);
        await expect(this.addToCartButton).toBeVisible();
        const title = await this.pageTitle.textContent();
        if (title !== products.invetory_page_title) {
            throw new Error("Login assertion failed");
        }
    }
}