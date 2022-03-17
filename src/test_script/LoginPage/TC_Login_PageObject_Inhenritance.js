import Login from "../../page_object/LoginPage/Login";
import login from "../../page_object/LoginPage/Login";

describe('Login Function', function () {
    it('should use inherited PO successfully ', function () {

        // 1. Click on Login Icon from Homepage
        const LOGIN_ICON = '~Login'
        $(LOGIN_ICON).click()

        // 2. Use Login Page Object to interact with element

        Login.wait_till_screen_display()
        Login.email_txt_field.setValue("bacn@asd.com")
        Login.password_txt_field.setValue("12345678")
        Login.login_btn.click()

        browser.pause(3000)
    });
});