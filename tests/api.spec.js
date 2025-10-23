// tests/api.spec.js
import { test, expect } from '@playwright/test';

const BASE_URL = 'https://stage.revolvinggames.com';

// Helper to retry requests with exponential backoff
async function fetchWithRetry(request, url, retries = 3, delay = 2000) {
  for (let i = 0; i < retries; i++) {
    const response = await request.get(url);
    if (response.status() === 200) return response;
    console.log(`⚠️ Retry ${i + 1}/${retries} failed. Waiting ${delay}ms...`);
    await new Promise(r => setTimeout(r, delay));
  }
  throw new Error(`❌ API request failed after ${retries} retries: ${url}`);
}

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

  test('Games Page', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/games`);
    expect(response.status()).toBe(200);
  });

  test('Join Us Page', async ({ request }) => {
    const response = await request.get(`https://api.revolvinggames.com/jobs/`);
    expect(response.status()).toBe(200);
  });

});
