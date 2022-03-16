describe('Learning Webdriver IO', function () {
    it('should click on Login Icon success', function () {
        const LOGIN_ICON ='~Login'
        $(LOGIN_ICON).click()
        browser.pause(3000)
        // Search by XPath
        // //*[@text="Login"]
        // //android.widget.Button[@content-desc="Login"]//*[@text="Login"]
        
    });
});