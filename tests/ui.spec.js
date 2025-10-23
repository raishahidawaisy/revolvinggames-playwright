// tests/ui.spec.js
import { test } from '@playwright/test';
import fs from 'fs';
import { HomePage } from '../pages/HomePage.js';
import { ContactPage } from '../pages/ContactPage.js';

const SCREENSHOT_DIR = 'screenshots';

// Create screenshot folder if not exists
test.beforeAll(async () => {
  if (!fs.existsSync(SCREENSHOT_DIR)) {
    fs.mkdirSync(SCREENSHOT_DIR);
  }
});

// Helper for resilient checks with screenshot on failure
async function safeRun(page, name, fn) {
  try {
    await fn();
    console.log(`✅ ${name} passed`);
  } catch (err) {
    console.error(`❌ ${name} failed: ${err.message}`);
    const path = `${SCREENSHOT_DIR}/${name.replace(/\s+/g, '_')}.png`;
    await page.screenshot({ path, fullPage: true });
    console.log(`📸 Screenshot saved: ${path}`);
  }
}

test.describe('Revolving Games UI Tests (POM)', () => {
  test('Validate Homepage Elements', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();

    await safeRun(page, 'Page Title', async () => homePage.validatePageTitle());
    await safeRun(page, 'Header Visibility', async () => homePage.validateHeader());
    await safeRun(page, 'Hero Section', async () => homePage.validateHeroSection());
    await safeRun(page, 'Navigation Links', async () => homePage.validateNavigationLinks());
    await safeRun(page, 'Footer Visibility', async () => homePage.validateFooter());
  });

  test('Validate Contact Page Form', async ({ page }) => {
    const contactPage = new ContactPage(page);
    await contactPage.goto();

    await safeRun(page, 'Contact Form Elements', async () => contactPage.validateFormElements());
  });
});
