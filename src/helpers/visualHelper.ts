import { Locator, Page, expect } from '@playwright/test';

export class VisualHelper {
  /**
   * Takes a screenshot and compares it with the baseline.
   * If no baseline exists, Playwright creates one in the test-specific folder.
   * @param page Playwright Page object.
   * @param testName Name of the test (e.g., 'login').
   * @param options Optional parameters for screenshot customization:
   *  - mask: Locators to mask
   *  - locator: Specific locator to capture
   */
  static async takeAndCompareScreenshot(
    page: Page,
    testName: string,
    options?: { mask?: Locator[]; locator?: Locator }
  ): Promise<void> {
    const snapshotFileName = `${testName}.png`;

    if (options?.locator) {
      // Take a screenshot of a specific locator
      await expect(options.locator).toHaveScreenshot(snapshotFileName);
    } else {
      // Take a full-page screenshot with optional masking
      await expect(page).toHaveScreenshot(snapshotFileName, {
        mask: options?.mask || undefined,
        animations: 'disabled', // Disable animations for consistency
      });
    }
  }
}
