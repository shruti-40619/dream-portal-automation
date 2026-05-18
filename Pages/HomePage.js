class HomePage {

    constructor(page) {

        this.page = page;

        this.loader = page.locator('.spinner');

        this.myDreamsBtn = page.getByText('My Dreams');
    }

    async navigate() {

        await this.page.goto(
            'https://arjitnigam.github.io/myDreams/'
        );
    }

}

module.exports = { HomePage };