import CredentialForm from "./CredentialForm";

const LOGIN_BTN = "~"

class Login extends CredentialForm {
    wait_until_screen_display() {
        $(LOGIN_BTN).waitForDisplayed()
    }

    click_on_login_btn() {
        $(LOGIN_BTN).click()
    }
}

export default new Login()