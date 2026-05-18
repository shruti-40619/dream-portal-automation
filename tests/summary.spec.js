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



test('Recurring dreams validation', async ({ page }) => {

    await page.goto('https://arjitnigam.github.io/myDreams/dreams-diary.html');

    // Get all dream names
    const dreamNames = await page
        .locator('#dreamsDiary tbody tr td:first-child')
        .allTextContents();

    // Count occurrences
    const dreamCount = {};

    for (const dream of dreamNames) {

        const trimmedDream = dream.trim();

        dreamCount[trimmedDream] =
            (dreamCount[trimmedDream] || 0) + 1;
    }

    // Find recurring dreams
    const recurringDreams = Object.keys(dreamCount)
        .filter(dream => dreamCount[dream] > 1);

    console.log(recurringDreams);

    // Validate recurring dreams count
    expect(recurringDreams.length).toBe(2);

    // Validate specific recurring dreams
    expect(recurringDreams)
        .toContain('Flying over mountains');

    expect(recurringDreams)
        .toContain('Lost in maze');

});