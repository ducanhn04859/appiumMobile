//Declare element selectors values
const EMAIL_TXT = '~input-email'
const PASSWORD_TXT = '~input-password'
const LOGIN_BTN = '~button-LOGIN'

class LoginWithGlobalWait {
    wait_till_screen_display() {
        $(EMAIL_TXT).waitForDisplayed({timeout: 5000})

    }

    get email_txt_field() {
        return $(EMAIL_TXT)
    }

    get pass_txt_field() {
        return $(PASSWORD_TXT)
    }

    get login_btn() {
        return $(LOGIN_BTN)
    }

}

export default new LoginWithGlobalWait()