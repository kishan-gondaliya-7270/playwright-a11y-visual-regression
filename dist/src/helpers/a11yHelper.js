import axe from "axe-core";
import { createHtmlReport } from "axe-html-reporter";
import * as fs from "fs";
export class A11yHelper {
    /**
     * Run an accessibility audit on the page using axe-core.
     * @param page Playwright Page object.
     */
    static async runA11yAudit(page) {
        // Inject axe-core from a CDN into the page
        await page.addScriptTag({
            url: "https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.3.5/axe.min.js",
        });
        // Run the audit on the page
        const result = await page.evaluate(([axe]) => axe.run(), [axe]);
        return result;
    }
    /**
     * Generate an HTML report for accessibility violations.
     * @param result Accessibility audit result from axe.
     * @param reportName Name of the report file (default: "a11y-report.html").
     */
    static generateHtmlReport(result, reportName = "a11y-report.html") {
        const reportDir = "accessibility-report";
        // Ensure the directory exists
        if (!fs.existsSync(reportDir)) {
            fs.mkdirSync(reportDir, { recursive: true });
        }
        // Create the HTML report
        createHtmlReport({
            results: result,
            options: {
                outputDir: reportDir,
                reportFileName: reportName,
            },
        });
        console.log(`Accessibility report generated at: ${reportDir + "/" + reportName}`);
    }
    /**
     * Run an accessibility audit and generate a report without failing the test.
     * Logs a warning if violations are found.
     * @param page Playwright Page object.
     * @param reportName Name of the report file.
     */
    static async runAndReportA11y(page, reportName) {
        const result = await A11yHelper.runA11yAudit(page);
        if (result.violations.length > 0) {
            console.warn(`Accessibility violations found:\n${JSON.stringify(result.violations, null, 2)}`);
            // Generate HTML report
            A11yHelper.generateHtmlReport(result, `${reportName}.html`);
        }
        else {
            console.log("No accessibility violations found.");
        }
    }
}
