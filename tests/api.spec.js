// tests/api.spec.js
import { test, expect } from '@playwright/test';

const BASE_URL = 'https://stage.revolvinggames.com';

test.describe('Revolving Games API Tests', () => {

  test('Verify Homepage API Response', async ({ request }) => {
    const response = await request.get(BASE_URL);
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Revolving Games');
  });

  test('Validate Sitemap.xml Availability', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/sitemap.xml`);
    expect(response.status()).toBe(200);
  });

  test('Validate Robots.txt', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/robots.txt`);
    expect(response.status()).toBe(200);
  });

});
