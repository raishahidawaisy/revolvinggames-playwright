// utils/apiHelper.js
async function fetchWithRetry(request, url, options = {}) {
    const {
      retries = 3,
      delay = 2000,
      expectedStatus = 200
    } = options;
  
    for (let attempt = 1; attempt <= retries; attempt++) {
      const response = await request.get(url);
  
      // Check response
      if (response.status() === expectedStatus) {
        console.log(`✅ [Attempt ${attempt}] ${url} responded with ${response.status()}`);
        return response;
      }
  
      console.warn(`⚠️ [Attempt ${attempt}] ${url} failed with status ${response.status()}. Retrying in ${delay}ms...`);
      await new Promise(res => setTimeout(res, delay));
    }
  
    throw new Error(`❌ ${url} failed after ${retries} retries.`);
  }
  
  module.exports = { fetchWithRetry };