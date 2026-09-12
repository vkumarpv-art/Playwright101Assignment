import { Page, Locator } from '@playwright/test'

export default class SimpleFormDemoPage {
    page: Page

    constructor(pg: Page) {
        this.page = pg
    }

    getMessageInput(): Locator {
        return this.page.getByRole('textbox', { name: 'Please enter your Message' })
    }

    getCheckValueButton(): Locator {
        return this.page.locator('form#get-input button')
    }

    getMessageOutput(): Locator {
        return this.page.locator('#message').first()
    }
}