import { Page, Locator } from '@playwright/test'

export default class DragDropSlidersPage {
    page: Page

    constructor(pg: Page) {
        this.page = pg
    }

    getDefaultValueSlider(): Locator {
        return this.page.locator('input[type="range"][value="15"]').first()
    }

    async setDefaultValueSlider(value: string): Promise<void> {
        await this.getDefaultValueSlider().evaluate((element, sliderValue) => {
            const input = element as HTMLInputElement
            const valueSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set

            valueSetter?.call(input, sliderValue)
            input.dispatchEvent(new Event('input', { bubbles: true }))
            input.dispatchEvent(new Event('change', { bubbles: true }))
        }, value)
    }

    getRangeValue(): Locator {
        return this.page.locator('#rangeSuccess')
    }
}