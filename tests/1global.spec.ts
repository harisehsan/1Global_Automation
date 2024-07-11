import { test, expect } from '@playwright/test';
import {BetterRoamingPage} from "../pages/BetterRoamingPage";
import planDetails, { url } from '../data/SecondPlanData';
import * as assert from 'assert';

test("Thailand's Second plan details test", async ({page}) => {
    const betterRoamingPage = new BetterRoamingPage(page);
    await betterRoamingPage.navigate(url);
    await betterRoamingPage.clickCountry(planDetails.get('country'));
    await betterRoamingPage.selectCurrency(planDetails.get('currency'));
    await betterRoamingPage.selectPlan(Number(planDetails.get('planNumber')));
    assert.strictEqual(await betterRoamingPage.verifyPlanCountry(planDetails.get('country')),true,'Either the plan country is not displayed or not same as '+planDetails.get('country'))
    assert.strictEqual(await betterRoamingPage.verifyPlanData(planDetails.get('data')),true,'Either the plan data is not displayed or not same as '+planDetails.get('data'))
    assert.strictEqual(await betterRoamingPage.verifyPlanValidity(planDetails.get('valid')),true,'Either the plan validity is not displayed or not same as '+planDetails.get('valid'))
    assert.strictEqual(await betterRoamingPage.verifyPlanType(planDetails.get('type')),true,'Either the plan type is not displayed or not same as '+planDetails.get('type'))
    assert.strictEqual(await betterRoamingPage.verifyPlanPrice(planDetails.get('price')),true,"Either the plan price is not displayed or not equal to "+(planDetails.get('price')))
});