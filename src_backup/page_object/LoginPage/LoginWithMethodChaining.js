import Dashboard from "./Dashboard";

const EMAIL_TXT_FIELD = '~input-email'
const PASSWORD_TXT_FIELD = '~input-password'
const LOGIN_BTN = '~button-LOGIN'


class LoginWithMethodChaining {
    wait_screen_displayed() {
        $(EMAIL_TXT_FIELD).waitForDisplayed()
        return this
    }

    input_email(email) {
        $(EMAIL_TXT_FIELD).setValue(email)
        return this
    }

    input_password(password) {
        $(PASSWORD_TXT_FIELD).setValue(password)
        return this
    }

    click_on_login_btn() {
        $(LOGIN_BTN).click()
        return Dashboard
    }
}

export default new LoginWithMethodChaining()