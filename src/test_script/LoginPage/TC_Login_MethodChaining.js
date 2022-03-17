import LoginPage from "../../page_object/LoginPage/LoginWithMethodChaining";

describe('Learn Page Object', function () {
    it('should use method chaining successfully', function () {

        // 1. Click on Login Icon from Homepage
        const LOGIN_ICON = '~Login'
        $(LOGIN_ICON).click()

        LoginPage
            .wait_screen_displayed()
            .input_email("fsa@adsa.com")
            .input_password("87654321")
            .click_on_login_btn()
            .get_dash_board_name()
    });
});