

class LoanCalculator {


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async setValue (selector, textValue) {
        let textField = await $(selector)
        await textField.setValue(textValue)
        await browser.pause(1000)
    }

    async waitForExists (selector) {
        let element = await $(selector)
        await element.waitForExist()
    }

    async clickButton (selector) {
        let element = await $(selector)
        await element.click()
        await browser.pause(5000)
    }

    async getText (selector) {
        let element = await $(selector)
        return await element.getText()
    }

}

module.exports = new LoanCalculator();
