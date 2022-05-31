const { Given, When, Then } = require('@wdio/cucumber-framework');
var expect = require('chai').expect
const allureReporter = require('@wdio/allure-reporter').default

const LoanCalculator = require('../pageobjects/loanCalculator.page');
const cssElements = require('../support/locator.js');
const textData = require('../support/testData.js');

// const pages = {
//     login: LoginPage
// }

Given(/^I am on the ANZ Mortage Calculator page$/, async () => {
    await browser.url(textData.ANS_URL)
    allureReporter.addFeature('ANZ Loan Calculator Feature');
});

When(/^I enter the annual amount as (.+)$/, async (amountValue) => {
    await LoanCalculator.setValue(cssElements.annualIncomeTextbox, amountValue)
});

Then(/^I verify button calculator is visible$/, async () => {
    await LoanCalculator.waitForExists(cssElements.buttonCalculator);
});

Then(/^I enter the other income amount as (.+)$/, async (amountValue) => {
    await LoanCalculator.setValue(cssElements.otherIncomeTextBox, amountValue)
});

Then(/^I enter the living expense as (.+)$/, async (amountValue) => {
    await LoanCalculator.setValue(cssElements.monthlyLivingTextBox, amountValue)
});


Then(/^I enter the current home loan repayment amount as (.+)$/, async (amountValue) => {
    await LoanCalculator.setValue(cssElements.currentHomeLoanTextBox, amountValue)
});


Then(/^I enter other loans amount as (.+)$/, async (amountValue) => {
    await LoanCalculator.setValue(cssElements.otherLoanMonthlyTextBox, amountValue)
});

Then(/^I total credit limit as (.+)$/, async (amountValue) => {
    await LoanCalculator.setValue(cssElements.totalCreditCardLimitTextBox, amountValue)
});

When(/^I click on Work out how much I could borrow button$/, async () => {
    await LoanCalculator.clickButton(cssElements.buttonCalculator)
});

Then(/^I can see that total amount I can borrow is (.+)$/, async (amountValue) => {
    let borrowAmount = await LoanCalculator.getText(cssElements.burrowAmountText)
    console.log("Burrow Amount: "+borrowAmount)
    expect(borrowAmount).to.equal(amountValue);
}); 

When(/^I click on start over button$/, async () => {
    await LoanCalculator.clickButton(cssElements.startOverButton)
});

Then(/^I verify if error message (.+) is displayed$/, async (errorMessage) => {
    let errorText = await LoanCalculator.getText(cssElements.errorMessageText)
    expect(errorText).to.equal(errorMessage);
}); 

