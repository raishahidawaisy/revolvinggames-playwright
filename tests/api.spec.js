// tests/api.spec.js
import { test, expect } from '@playwright/test';

import { fetchWithRetry } from '../utils/apiHelper';

const BASE_URL = 'https://stage.revolvinggames.com';

test.describe('Revolving Games API Tests', () => {

  test('@smoke - Verify Homepage API Response', async ({ request }) => {
    const response = await request.get(BASE_URL);
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Web3 gaming,Staking game');
  });

  // test('Validate Sitemap.xml Availability', async ({ request }) => {
  //   const response = await request.get(`${BASE_URL}/sitemap.xml`);
  //   expect(response.status()).toBe(200);
  // });

  test('Validate Robots.txt', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/robots.txt`);
    expect(response.status()).toBe(200);
  });

  // test('Games Page', async ({ request }) => {
  //   const response = await request.get(`${BASE_URL}/games`);
  //   expect(response.status()).toBe(200);
  //   const text = await response.text();
  //   expect(text).toContain('Web3 gaming,Staking game');
  // });

  test('@smoke - Join Us Page', async ({ request }) => {
    const response = await request.get(`https://api.revolvinggames.com/jobs/`);
    expect(response.status()).toBe(200);
  });

});
