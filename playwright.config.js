// playwright.config.js
import { defineConfig } from '@playwright/test';

// @ts-check
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  fullyParallel: true,
  retries: 2,
  testDir: './tests',
  timeout: 60 * 1000,
  retries: 1,
  use: {
    headless: true,
  },

// ✅ Define Projects
projects: [
  // ===== DESKTOP BROWSERS =====
  {
    name: 'Desktop-Browsers',
    use: { ...devices['Desktop Chrome'] },
  },
  {
    name: 'Desktop-Browsers',
    use: { ...devices['Desktop Firefox'] },
  },
  {
    name: 'Desktop-Browsers',
    use: { ...devices['Desktop Safari'] },
  },

  // ===== MOBILE DEVICES =====
  {
    name: 'Mobile-Browsers',
    use: { ...devices['Pixel 5'] },
  },
  {
    name: 'Mobile-Browsers',
    use: { ...devices['iPhone 13'] },
  },
  {
    name: 'Mobile-Browsers',
    use: { ...devices['Galaxy S9+'] },
  },
]
};

export default defineConfig({
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  },
  reporter: [['list']]
  // reporter: [['list'], ['html', { outputFolder: 'html-report' }]]
});

module.exports = config;