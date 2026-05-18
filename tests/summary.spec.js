const { test, expect } = require('@playwright/test');

test('Summary page validations', async ({ page }) => {

    await page.goto('https://arjitnigam.github.io/myDreams/dreams-total.html');

    // Validate Good Dreams count
    await expect(
        page.locator('tr').filter({ hasText: 'Good Dreams' })
    ).toContainText('6');

    // Validate Bad Dreams count
    await expect(
        page.locator('tr').filter({ hasText: 'Bad Dreams' })
    ).toContainText('4');

    // Validate Total Dreams count
    await expect(
        page.locator('tr').filter({ hasText: 'Total Dreams' })
    ).toContainText('10');

    // Validate Recurring Dreams count
    await expect(
        page.locator('tr').filter({ hasText: 'Recurring Dreams' })
    ).toContainText('2');

});