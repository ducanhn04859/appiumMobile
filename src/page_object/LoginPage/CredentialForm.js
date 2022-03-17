const EMAIL_TXT_FIELD = '~input-email'
const PASSWORD_TXT_FIELD = '~input-password'

class CredentialForm {


    get email_txt_field() {
        return $(EMAIL_TXT_FIELD)
    }

    get password_txt_field() {
        return $(PASSWORD_TXT_FIELD)
    }

    wait_till_screen_display() {
        $(EMAIL_TXT_FIELD).waitForDisplayed({timeout: 5000})
    }

    input_email(email) {
        $(EMAIL_TXT_FIELD).setValue(email)
        return this
    }

    input_password(password) {
        $(PASSWORD_TXT_FIELD).setValue(password)
        return this
    }

    verify_email_text_display(email) {
        expect(this.email_txt_field).toHaveText(email, {trim: true})
        chaiExpect(this.email_txt_field.getText()).to.be.eq(email, "[ERR] The email is not correct")

    }

}

export default CredentialForm