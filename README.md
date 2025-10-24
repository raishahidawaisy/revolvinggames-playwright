Overview

This project is a Playwright Automation Suite using the Page Object Model (POM) structure to validate the UI and API of Revolving Games – Stage Environment
.
The POM structure ensures clean test maintenance, scalability, and reusability across test modules.

Features

Page Object Model (POM) structure for maintainability

UI and API testing separated for clarity

Automatic screenshot capture on failure

CI/CD ready (GitHub Actions / Jenkins)

Detailed HTML reports for every test run

Setup & Run
git clone https://github.com/<your-repo>/revolvinggames-playwright.git
cd revolvinggames-playwright
npm install -D @playwright/test
npx playwright install


Run tests:

npx playwright test

Run specific tests:

npx playwright test tests/ui.spec.js
npx playwright test tests/api.spec.js


View report:

npx playwright show-report

Screenshots

All screenshots for failed tests are saved under /screenshots.

Author

Shahid Abbas Awaisy
QA Automation Engineer | Playwright | API & UI Testing
📧 contact@xrgstudios.com
