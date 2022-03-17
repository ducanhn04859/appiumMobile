describe('WebDriverIO API', function () {
    it('should swipr vertically', function () {
        //Declare element selectors values
        const FORM_ICON = '~Forms'
        const ACTIVE_BTN = '~button-Active'
        const FORM_HEADER_TEXT = '~Forms-screen'
        // 1. click on Form icon
        $(FORM_ICON).click()

        // 2.Swipe up vertical
        const {height} = driver.getWindowSize()
        const anchorPercentage = 50 // vị trí 50% (giữa) bề ngang màn hình
        const startPointPercentage = 90 // vị trí 90% (gần cuối) dọc màn hình
        const endPointPercentage = 10 // vị trí 10% (gần đầu) dọc màn hình

        const anchor = height * anchorPercentage / 100
        const startPoint = height * startPointPercentage / 100
        const endPoint = height * endPointPercentage / 100

        //Touch on screen before doing touch action
        $(FORM_HEADER_TEXT).click()
        //PRESS ON START => WAIT 1S => MOVE TO END POINT => RELEASE
        driver.touchPerform([
            {
                action: "press",
                options: {
                    x: anchor,
                    y: startPoint
                }
            },
            {
                action: 'wait',
                options: {
                    ms: 1000
                }
            },
            {
                action: "moveTo",
                options: {
                    x: anchor,
                    y: endPoint
                }
            },
            {
                action: "release",
                options: {}
            },
        ])

        // 3. Click on Active button
        $(ACTIVE_BTN).click()
    });
});