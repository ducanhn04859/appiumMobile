describe('Webdriver API', () => {
    it('should take screen shot', () => {
        //Declare element selectors values
        const FORM_ICON = '~Forms'
        const SWITCH_BTN = '~switch'

        // 1. Click Form icon on Home Screen
        $(FORM_ICON).click()

        // 2.Take a screenshot whole screen
        browser.pause(2000)
        browser.saveScreenshot("./screenshot/WebdriverAPI_ScreenShot.png")

        // 3.Take a screenshot only button
        $(SWITCH_BTN).saveScreenshot("./screenshot/SwitchButton_ScreenShot.png")
    });
});