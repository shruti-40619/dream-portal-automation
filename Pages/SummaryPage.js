class SummaryPage {

    constructor(page) {

        this.page = page;
    }

    async navigate() {

        await this.page.goto(
            'https://arjitnigam.github.io/myDreams/dreams-total.html'
        );
    }

}

module.exports = { SummaryPage };