const { test, expect } = require('@playwright/test');

test('Homepage validations', async ({ page, context }) => {

    await page.goto('https://arjitnigam.github.io/myDreams/');

    // Loader validation
    const loader = page.locator('.spinner');

    await expect(loader).toBeVisible();

    await expect(loader).toBeHidden();

    // Button visible or not
    const myDreamsBtn = page.getByText('My Dreams');

    await expect(myDreamsBtn).toBeVisible();

    // Handle two tabs
    const pagePromise1 = context.waitForEvent('page');
    const pagePromise2 = context.waitForEvent('page');

    await myDreamsBtn.click();

    const newPage1 = await pagePromise1;
    const newPage2 = await pagePromise2;

    await newPage1.waitForLoadState();
    await newPage2.waitForLoadState();

    const urls = [
      await newPage1.url(),
      await newPage2.url()
    ];

    console.log(urls);

    // Verify diary page opened
    expect(
       urls.some(url => url.includes('dreams-diary'))
    ).toBeTruthy();

    // Verify summary page opened
    expect(
       urls.some(url => url.includes('dreams-total'))
    ).toBeTruthy();

});