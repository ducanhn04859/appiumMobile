import LoginFlow from "../../test_flow/login/LoginFlow";
import {loginData} from "../../test-data/login/TC_006_Login_CommonFlow";

describe('Common Flow', function () {
    it('should run test with common flow', function () {
        // 1. Click on Login Icon from Homepage
        const LOGIN_ICON = '~Login'
        $(LOGIN_ICON).click()

        // let email_inval = loginData.INVALID_CREDS.email
        // let pass_inval = loginData.INVALID_CREDS.email

        let email_val = loginData.VALID_CREDS.email
        let pass_val = loginData.VALID_CREDS.pass

        console.log('email: ', email_val)
        console.log('pass : ', pass_val)
        let loginFlow = new LoginFlow()
        loginFlow.loginWithCredential(email_val, pass_val)
        loginFlow.verifyEmailTextField(email_val)
    });
});