import Login from "../../page_object/LoginPage/Login";

describe('Login Function', function () {
    it('should raise an error for wrong credentials', function () {

        // 1. Click on Login Icon from Homepage
        const LOGIN_ICON = '~Login'
        $(LOGIN_ICON).click()

        // 2. Use Login Page Object to interact with element
        Login.email_txt_field.setValue("bacn@asd.com")
        Login.pass_txt_field.setValue("12345678")
        Login.login_btn.click()

        browser.pause(3000)
    });
});