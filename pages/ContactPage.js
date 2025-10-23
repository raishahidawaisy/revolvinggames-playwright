// pages/ContactPage.js
import { expect } from '@playwright/test';

export class ContactPage {
  constructor(page) {
    this.page = page;
    this.nameField = page.locator('input[name*="name"], input[placeholder*="Name"]');
    this.emailField = page.locator('input[type="email"]');
    this.messageField = page.locator('textarea');
    this.submitButton = page.locator('button[type="submit"], button:has-text("Send")');
  }

  async goto() {
    await this.page.goto('https://stage.revolvinggames.com/contact', { waitUntil: 'domcontentloaded' });
  }

  async validateFormElements() {
    await expect(this.nameField).toBeVisible();
    await expect(this.emailField).toBeVisible();
    await expect(this.messageField).toBeVisible();
    await expect(this.submitButton).toBeVisible();
  }
}
