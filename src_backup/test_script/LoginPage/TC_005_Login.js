import Login from "../../page_object/LoginPage/Login";

describe('Login Function', function () {
    it('should verify email text after inout', function () {
        // 1. Click on Login Icon from Homepage
        const LOGIN_ICON = '~Login'
        $(LOGIN_ICON).click()

        Login
            .input_email("sadas@asd.com")
            .input_password("12312312312312")
            .click_on_login_btn()

        Login.verify_email_text_display("sadas@asd.com")

    });
});