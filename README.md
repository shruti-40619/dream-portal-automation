# Dream Portal Automated Testing

## Project Overview

This project automates the functional testing of the Dream Portal website using Playwright with JavaScript.

The automation validates:
- Homepage functionality
- Loader animation
- Multi-tab behavior
- Dream diary table data
- Summary statistics
- Recurring dream logic

---

## Tech Stack

- Playwright
- JavaScript
- Node.js

---

## Project Structure

```plaintext
dream-portal-testing/
│
├── pages/
├── tests/
├── screenshots/
├── playwright.config.js
├── package.json
└── README.md

Test Scenarios Covered
Homepage Validations
Loader visibility validation
Loader disappearance validation
"My Dreams" button visibility
Multi-tab opening behavior
Dream Diary Validations
Total dream entries count
Dream type validation
Empty column validation
Summary Page Validations
Good dreams count
Bad dreams count
Total dreams count
Recurring dreams count
Recurring Dreams Logic

Validated recurring dreams:

Flying over mountains
Lost in maze

Screenshots

Test execution screenshots are stored in:
screenshots/

Reports

To open Playwright HTML report:
npx playwright show-report


Installation

Install dependencies:
npm install

Run tests:
npx playwright test

Run tests in headed mode:
npx playwright test --headed


Bug Observation

Observed that clicking the "My Dreams" button opens two Dream Diary pages instead of opening:

Dream Diary page
Summary page

The automation successfully identifies this behavior mismatch.


Author

Shruti