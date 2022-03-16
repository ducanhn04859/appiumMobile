describe('Webdriver IO API', function () {
    it('should set value to text field', function () {
        //Declare element selectors values
        const LOGIN_ICON = '~Login'
        const EMAIL_TXT = '~input-email'
        const PASSWORD_TXT = '~input-password'
        const LOGIN_BTN = '~button-LOGIN'

        //1. click on "Login" on mail screen
        $(LOGIN_ICON).click()
        //2. Fill email text
        $(EMAIL_TXT).setValue("a@a.com")
        //3. Fill password text
        $(PASSWORD_TXT).setValue("12345678")
        //4. Click submit button
        $(LOGIN_BTN).click()

        browser.pause(3000)
    });
});