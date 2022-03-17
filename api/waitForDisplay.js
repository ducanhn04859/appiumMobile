describe('test Webdrive IO API', function () {
    it('should ', function () {
        const LOGIN_ICON = '~Login'
        const SWITCH_BTN = '~switch'

        // 1. Go to login form
        $(LOGIN_ICON).click()

        // 1.2 Wait 4s to display to click 'Form" by manually
        $(SWITCH_BTN).waitForDisplayed({timeout: 6000})

        // 2. Toggle the switch button
        $(SWITCH_BTN).click()

        // 3. Wait a little to se result
        browser.pause(3000)
    });
});