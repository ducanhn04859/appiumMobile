import login from "../../page_object/Login_page/Login";
import NavBar from "../../page_object/common/NavBar";
import LoginMessage from "../../page_object/Login_page/LoginMessage";
import allureReporter from '@wdio/allure-reporter'

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

class LoginFlow {


    openLoginPage() {
        if (!login.is_on_login_screen()) NavBar.login_icon.click()
        return this
    }

    loginWithCredential(email, password) {
        if (!login.is_on_login_screen()) NavBar.login_icon.click()
        allureReporter.addStep(`Input email as ${email} and password as ${password}`)
        login.email_txt_field.setValue(email)
        login.password_txt_field.setValue(password)
        allureReporter.addStep(`Click on Login button`)
        login.click_on_login_btn()
        return this
    }

    verifyLoginSuccessfully() {
        let msg_title_expect = "Success"
        let msg_content_expect = "You are logged in!"
        expect(LoginMessage.msg_title).toHaveText(msg_title_expect)
        expect(LoginMessage.msg_content).toHaveText(msg_content_expect)
        LoginMessage.accept_btn.click()
    }

    verifyLoginUnsuccessfully() {
        if (!this.email && this.password.length >= 8) {
            // if email is invalid - expect to see invalid email msg ONLY
            chaiExpect(login.is_invalid_email_msg_display()).to.equal(true)
            chaiExpect(login.is_invalid_password_msg_display()).to.equal(false)
        } else if (validateEmail(this.email) && this.password.length < 8) {
            // if password is invalid - expect to see invalid password msg ONLY
            chaiExpect(login.is_invalid_email_msg_display()).to.equal(false)
            chaiExpect(login.is_invalid_password_msg_display()).to.equal(true)
        } else {
            // if email and password are invalid - expect to see invalid email and password msg ONLY
            chaiExpect(login.is_invalid_email_msg_display()).to.equal(true)
            chaiExpect(login.is_invalid_password_msg_display()).to.equal(true)
        }
    }
}

export default LoginFlow