import LoginWithGlobalWait from "../../page_object/LoginPage/LoginWithGlobalWait";

describe('Login Function', function () {
    it('should raise an error for wrong credentials', function () {

        // 1. Click on Login Icon from Homepage
        const LOGIN_ICON = '~Login'
        $(LOGIN_ICON).click()

        // 2. Use Login Page Object to interact with element
        LoginWithGlobalWait.wait_till_screen_display()
        LoginWithGlobalWait.email_txt_field.setValue("bacn@asd.com")
        LoginWithGlobalWait.pass_txt_field.setValue("12345678")
        LoginWithGlobalWait.login_btn.click()

        browser.pause(3000)
    });
});