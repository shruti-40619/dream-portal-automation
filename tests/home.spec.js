const { test, expect } = require('@playwright/test');

test('Home page test', async ({ page }) => {

    await page.goto('https://arjitnigam.github.io/myDreams/');

    await expect(
        page.getByText('My Dreams')
    ).toBeVisible();

});