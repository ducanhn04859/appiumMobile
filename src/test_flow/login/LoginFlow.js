import login from "../../page_object/LoginPage/Login";

class LoginFlow {

    loginWithCredential(email, password) {
        login.email_txt_field.setValue(email)
        login.password_txt_field.setValue(password)
        login.login_btn.click()
    }

    verifyEmailTextField(email) {
        expect(login.email_txt_field).toHaveText(email)
    }
}

export default LoginFlow