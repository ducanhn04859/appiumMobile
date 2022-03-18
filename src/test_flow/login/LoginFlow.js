import login from "../../page_object/Login_page/Login";
import NavBar from "../../page_object/common/NavBar";

class LoginFlow {

    loginWithCredential(email, password) {
        NavBar.login.email_txt_field.setValue(email)
        login.password_txt_field.setValue(password)
        login.click_on_login_btn()
    }

    // verifyEmailTextField(email) {
    //     expect(login.email_txt_field).toHaveText(email)
    // }
}

export default LoginFlow