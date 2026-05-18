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
```

## Test Scenarios Covered

### Homepage Validations
- Loader visibility validation
- Loader disappearance validation
- "My Dreams" button visibility
- Multi-tab opening behavior

### Dream Diary Validations
- Total dream entries count
- Dream type validation
- Empty column validation

### Summary Page Validations
- Good dreams count
- Bad dreams count
- Total dreams count
- Recurring dreams count

### Recurring Dreams Logic

Validated recurring dreams:
- Flying over mountains
- Lost in maze
- Screenshots

Test execution screenshots are stored in:
```plaintext
screenshots/
```

## Reports

### To open Playwright HTML report:
```bash
npx playwright show-report
```

## Installation

### Install dependencies:
```bash
npm install
```

### Run tests:
```bash
npx playwright test
```

### Run tests in headed mode:
```bash
npx playwright test --headed
```

## Bug Observation

### Issue Identified

While validating the homepage multi-tab behavior, a functional defect was observed in the application.

### Expected Behavior

Clicking the **"My Dreams"** button should open:

1. Dream Diary page (`dreams-diary.html`)
2. Dream Summary page (`dreams-total.html`)

### Actual Behavior

Instead of opening two different pages, the application opens the Dream Diary page twice.

### Validation Approach

The automation framework successfully detected this mismatch during multi-tab validation by verifying the URLs of the newly opened pages.

### Impact

Due to this issue, the Summary page validations were executed using direct URL navigation instead of homepage navigation.

Author

Shruti 