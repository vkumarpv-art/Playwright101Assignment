import { Page, Locator } from '@playwright/test'

export default class SeleniumPlaygroundHomePage {
    page: Page

    constructor(pg: Page) {
        this.page = pg
    }

    async open(): Promise<void> {
        await this.page.goto('https://www.testmuai.com/selenium-playground/')
    }

    getSimpleFormDemoLink(): Locator {
        return this.page.getByText('Simple Form Demo')
    }

    getDragDropSlidersLink(): Locator {
        return this.page.getByText('Drag & Drop Sliders')
    }
}