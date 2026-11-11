import { Page, Locator } from '@playwright/test'

export class HomePage {
    private page: Page
    private registgerLink: Locator

    constructor(page: Page) {
        this.page = page
        this.registgerLink = page.getByRole('link', { name: 'Register' })
    }

    async goTo() {
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm')
    }

    async clickOnRegisterLink() {
        await this.registgerLink.click()
    }

}