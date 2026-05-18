const { test, expect } = require('@playwright/test');

const { HomePage } = require('../Pages/HomePage');

test('Homepage validations', async ({ page, context }) => {

    const homePage = new HomePage(page);

    await homePage.navigate();

    await expect(homePage.loader).toBeVisible();

    await expect(homePage.loader).toBeHidden();

    await expect(homePage.myDreamsBtn).toBeVisible();

    await page.screenshot({
        path: 'screenshots/homepage.png',
        fullPage: true
    });

    const pagePromise1 = context.waitForEvent('page');
    const pagePromise2 = context.waitForEvent('page');

    await homePage.myDreamsBtn.click();

    const newPage1 = await pagePromise1;
    const newPage2 = await pagePromise2;

    await newPage1.waitForLoadState();
    await newPage2.waitForLoadState();

    const urls = [
        await newPage1.url(),
        await newPage2.url()
    ];

    expect(
        urls.some(url => url.includes('dreams-diary'))
    ).toBeTruthy();

    expect(
        urls.some(url => url.includes('dreams-total'))
    ).toBeTruthy();

});