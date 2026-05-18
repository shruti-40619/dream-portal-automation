class DiaryPage {

    constructor(page) {

        this.page = page;

        this.rows =
            page.locator('#dreamsDiary tbody tr');
    }

    async navigate() {

        await this.page.goto(
            'https://arjitnigam.github.io/myDreams/dreams-diary.html'
        );
    }

}

module.exports = { DiaryPage };