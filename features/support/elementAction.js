export const setValue = (locator, textValue) => {
    try {

        let selector = browser.$(locator);
        selector.setValue(textValue);
    } catch (e) {
        assert.isTrue(false,'Unable to click on '+locator+' '+e);
    }
};