// pages/HomePage.js
import { expect } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.header = page.locator('header');
    this.heroSection = page.locator('section').first();
    this.navLinks = page.locator('nav a');
    this.footer = page.locator('footer');
  }

  async goto() {
    await this.page.goto('https://stage.revolvinggames.com', { waitUntil: 'domcontentloaded' });
  }

  async validatePageTitle() {
    await expect(this.page).toHaveTitle(/Revolving Games/i);
  }

  async validateHeader() {
    await expect(this.header).toBeVisible();
  }

  async validateHeroSection() {
    await expect(this.heroSection).toBeVisible();
  }

  async validateNavigationLinks() {
    const count = await this.navLinks.count();
    expect(count).toBeGreaterThan(0);
  }

  async validateFooter() {
    await expect(this.footer).toBeVisible();
  }
}
