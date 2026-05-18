const { test, expect } = require('@playwright/test');

const { SummaryPage } = require('../Pages/SummaryPage');

test('Summary page validations', async ({ page }) => {

    const summaryPage = new SummaryPage(page);

    await summaryPage.navigate();

    // Good Dreams
    await expect(
        page.locator('tr')
            .filter({ hasText: 'Good Dreams' })
    ).toContainText('6');

    // Bad Dreams
    await expect(
        page.locator('tr')
            .filter({ hasText: 'Bad Dreams' })
    ).toContainText('4');

    // Total Dreams
    await expect(
        page.locator('tr')
            .filter({ hasText: 'Total Dreams' })
    ).toContainText('10');

    // Recurring Dreams
    await expect(
        page.locator('tr')
            .filter({ hasText: 'Recurring Dreams' })
    ).toContainText('2');

    await page.screenshot({
        path: 'screenshots/summary-page.png',
        fullPage: true
    });

});

test('Recurring dreams validation', async ({ page }) => {

    await page.goto(
        'https://arjitnigam.github.io/myDreams/dreams-diary.html'
    );

    const dreamNames = await page
        .locator('#dreamsDiary tbody tr td:first-child')
        .allTextContents();

    const dreamCount = {};

    for (const dream of dreamNames) {

        const trimmedDream = dream.trim();

        dreamCount[trimmedDream] =
            (dreamCount[trimmedDream] || 0) + 1;
    }

    const recurringDreams =
        Object.keys(dreamCount)
            .filter(dream => dreamCount[dream] > 1);

    expect(recurringDreams.length).toBe(2);

    expect(recurringDreams)
        .toContain('Flying over mountains');

    expect(recurringDreams)
        .toContain('Lost in maze');

    await page.screenshot({
        path: 'screenshots/recurring-dreams.png',
        fullPage: true
    });

});