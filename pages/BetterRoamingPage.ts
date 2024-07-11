import { Page } from 'playwright';
import {Locator} from "@playwright/test";
let selectedPlan: Locator;

export class BetterRoamingPage {
     page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string) {
        await this.page.goto(url);
        const accept_all_btn = this.page.getByTestId('uc-accept-all-button')
        await accept_all_btn.click({ timeout: 6000 });
    }

    async clickCountry(country: string) {
        await this.page.click(`text=${country}`);
    }

    async selectCurrency(currency: string) {
        await this.page.getByText('- USD$', { exact: true }).click();
        await this.page.getByText(currency).click();
    }

    async selectPlan(planIndex: number) {
        selectedPlan = await this.page.locator('.pt-4').nth(planIndex - 1)
    }

    async verifyPlanCountry(country: string)
    {
      const element = await selectedPlan.getByText(country)
      return await element?.isVisible();
    }

    async verifyPlanData(data: string)
    {
        const element = await selectedPlan.getByText(data)
        return await element?.isVisible();
    }

    async verifyPlanValidity(validity: string)
    {
        const element = await selectedPlan.getByText(validity)
        return await element?.isVisible();
    }

    async verifyPlanType(planType: string)
    {
        const element = await selectedPlan.getByText(planType)
        return await element?.isVisible();
    }

    async verifyPlanPrice(planPrice: string)
    {
        await this.page.waitForTimeout(2000);
        const element = await selectedPlan.getByText(planPrice)
        return await element?.isVisible();
    }
}