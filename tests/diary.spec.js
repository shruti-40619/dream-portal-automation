const { test, expect } = require('@playwright/test');

const { DiaryPage } = require('../Pages/DiaryPage');

test('Dream diary table validations', async ({ page }) => {

    const diaryPage = new DiaryPage(page);

    await diaryPage.navigate();

    // Validate total rows
    await expect(diaryPage.rows).toHaveCount(10);

    const rowCount = await diaryPage.rows.count();

    for(let i = 0; i < rowCount; i++) {

        const columns =
            diaryPage.rows.nth(i).locator('td');

        const dreamName =
            await columns.nth(0).textContent();

        const daysAgo =
            await columns.nth(1).textContent();

        const dreamType =
            await columns.nth(2).textContent();

        expect(dreamName.trim()).not.toBe('');

        expect(daysAgo.trim()).not.toBe('');

        expect(dreamType.trim()).not.toBe('');

        expect(['Good', 'Bad'])
            .toContain(dreamType.trim());
    }

    await page.screenshot({
        path: 'screenshots/diary-page.png',
        fullPage: true
    });

});