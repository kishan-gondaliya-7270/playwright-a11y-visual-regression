import { expect } from "@playwright/test";
import urls from "../fixtures/data/urls.json";
export class LoginPage {
    _page;
    constructor(_page) {
        this._page = _page;
    }
    get page() {
        return this._page;
    }
    get usernameField() {
        return this.page.locator('[data-test="username"]');
    }
    get passwordField() {
        return this.page.locator('[data-test="password"]');
    }
    get loginButton() {
        return this.page.locator('[data-test="login-button"]');
    }
    async navigateTo(url) {
        await this.page.goto(url);
    }
    async assertOnLoginPage() {
        await expect(this.page).toHaveURL(urls.loginPage);
        await expect(this.usernameField).toBeVisible();
    }
    async login(username, password) {
        try {
            await this.usernameField.fill(username);
            await this.passwordField.fill(password);
            await this.loginButton.click();
        }
        catch (error) {
            console.error("Login failed", error);
        }
    }
}
