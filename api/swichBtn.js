describe('Webdriver IO API', function () {
    it('should change status of toggle button', function () {
        //Declare element selectors values
        const FORM_ICON = '~Forms'
        const SWITCH_BTN = '~switch'
        const SWITCH_TXT = "~switch-text"

        // 1. Click Form icon on Home Screen
        $(FORM_ICON).click()
        // 2. Toggle switch button
        $(SWITCH_BTN).click()
        // 3. Wait
        browser.pause(5000)
        const getTextSwitch = $(SWITCH_TXT).getText()
        expect(getTextSwitch).toContain("OFF")
    });
});