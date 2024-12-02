# TypeScript Playwright Framework

## Introduction

Welcome to the **Playwright Framework with TypeScript**, modular test automation framework designed for functional UI testing, **visual regression testing**, and **accessibility testing** of web applications. This project leverages latest technologies and libraries to provide a seamless and scalable automation testing solution.

### Features

- **Functional Testing**: Ensures the application's core functionality.
- **Visual Regression Testing**: Captures and compares screenshots to detect visual changes.
- **Accessibility Testing**: Validates the application against accessibility standards using tools like Axe.
- **Multi-Browser Support**: Runs tests across Chromium, Firefox, and WebKit.
- **Allure Reporting**: Generates detailed test execution reports.
- **Page Object Model (POM)**: Modular and reusable test design.

## Technologies Used

- **Language**: TypeScript
- **Libraries**:
  - [Playwright](https://playwright.dev/)
  - [Axe-Core](https://github.com/dequelabs/axe-core) for accessibility testing
  - [Allure Playwright](https://github.com/allure-framework/allure-js) for reporting
  - [Axe-html-reporter](https://www.npmjs.com/package/axe-html-reporter) for accessibility reporting
- **Build Tools**: Node.js, NPM
- **Linters/Formatters**: ESLint, Prettier

## Prerequisites

Before you get started, ensure the following are installed on your machine:

- **Node.js** (>=16.x)
- **NPM** (>=7.x)
- **Git**

## Clone and Setup

To use this framework, follow these steps:

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/kishan-gondaliya-7270/playwright-a11y-visual-regression.git
   ```

2. Navigate to the project directory:

   ```bash
   cd playwright-a11y-visual-regression
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables in the `.env` file:
   ```plaintext
   BASE_URL=https://www.saucedemo.com
   ```

## Running Tests

### 1. Run All Tests

To execute all tests in the framework:

```bash
npx playwright test
```

### 2. Run Specific Test Suite

- **UI Functional Tests**:
  ```bash
  npm run test:default
  ```
- **Visual Tests**:
  ```bash
  npm run test:visual
  ```
- **Accessibility Tests**:
  ```bash
  npm run test:accessibility
  ```

### 3. Generate Reports

- After running tests, generate an Allure report:
  ```bash
  allure generate allure-results --clean -o allure-report
  ```
- Open the Allure report in your browser:
  ```bash
  allure open allure-report
  ```

## Folder Structure

Below is an overview of the folder structure for better understanding:

```
playwright-framework-rt
├── .github/               # GitHub workflows for CI/CD
├── accessibility-report/  # Stores accessibility test reports
├── allure-results/        # Allure test result files
├── node_modules/          # Node.js dependencies
├── src/
│   ├── fixtures/          # Test data files
│   ├── helpers/           # Reusable helper functions
│   │   ├── a11yHelper.ts  # Accessibility helper logic
│   │   ├── visualHelper.ts # Visual testing helper logic
│   ├── pages/             # Page Object files
│   ├── tests/             # Test files organized by type
│   │   ├── accessibility/ # Accessibility test cases
│   │   ├── ui_functional/ # Functional test cases
│   │   ├── visual/        # Visual regression test cases
│   └── utils/             # Utility functions
├── test-results/          # Output directory for screenshots and traces
├── .env                   # Environment variables
├── package.json           # Project configuration and dependencies
├── playwright.config.ts   # Playwright configuration
├── tsconfig.json          # TypeScript configuration
```

## Technical Details

- **Playwright Configuration**: The configuration file (`playwright.config.ts`) defines global settings like timeouts, browser configurations, base URL, and test directories.
- **Allure Integration**: Captures detailed test execution results, including screenshots, videos, and traces.
- **Accessibility Testing**: Uses Axe-Core to validate WCAG compliance and generate accessibility reports.

## License

This project is licensed under the MIT License.

---

### About Me

Feel free to connect with me if you have any questions, feedback, or just want to talk about testing!

- LinkedIn : https://www.linkedin.com/in/kishan-gondaliya/
- Profile : https://kishan-gondaliya-7270.vercel.app/
- Email : kishan.gondaliya7270@gmail.com

Testing – it’s like doing a puzzle where half the pieces are missing, and the other half keep changing shape. But hey, we made it through, and these tests are here to help ensure that things (mostly) work as expected.

Happy Testing!! 🚀
