const { test, expect } = require('@playwright/test');

test('Dream diary table validations', async ({ page }) => {

    await page.goto('https://arjitnigam.github.io/myDreams/dreams-diary.html');

    // Locate all rows
    const rows = page.locator('#dreamsDiary tbody tr');

    // Validate total rows
    await expect(rows).toHaveCount(10);

    // Validate each row
    const rowCount = await rows.count();

    for(let i = 0; i < rowCount; i++) {

        const columns = rows.nth(i).locator('td');

        // Dream name
        const dreamName = await columns.nth(0).textContent();

        // Days ago
        const daysAgo = await columns.nth(1).textContent();

        // Dream type
        const dreamType = await columns.nth(2).textContent();

        // Validate non-empty columns
        expect(dreamName.trim()).not.toBe('');
        expect(daysAgo.trim()).not.toBe('');
        expect(dreamType.trim()).not.toBe('');

        // Validate type values
        expect(['Good', 'Bad']).toContain(
            dreamType.trim()
        );

        console.log(
            `${dreamName} | ${daysAgo} | ${dreamType}`
        );
    }

});