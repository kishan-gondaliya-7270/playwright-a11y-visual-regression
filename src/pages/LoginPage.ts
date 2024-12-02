import { expect, Page } from '@playwright/test';

import { getUrlData } from '../helpers/dataHelper';

// const urls = await import('../fixtures/data/urls.json', {
//   assert: { type: 'json' },
// });

const urls = await getUrlData();

export class LoginPage {
  constructor(private _page: Page) {}

  get page(): Page {
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

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async assertOnLoginPage() {
    await expect(this.page).toHaveURL(urls.loginPage);
    await expect(this.usernameField).toBeVisible();
  }

  async login(username: string, password: string) {
    try {
      await this.usernameField.fill(username);
      await this.passwordField.fill(password);
      await this.loginButton.click();
    } catch (error) {
      console.error('Login failed', error);
    }
  }
}
