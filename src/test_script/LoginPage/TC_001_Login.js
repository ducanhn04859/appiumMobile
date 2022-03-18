import {VALID_CREDS, INVALID_CREDS} from "../../test_data/TC_001_Login";
import LoginFlow from "../../test_flow/login/LoginFlow";

describe('Login Function', function () {
    it('should login successfully', function () {
        const {email, pass} = VALID_CREDS

        const loginFlow = new LoginFlow(email, pass)
        loginFlow
            .loginWithCredential()
            .verifyLoginSuccessfully()
    });

    // it('should see message when login invalid email', function () {
    //     const {email, pass} = INVALID_CREDS
    //
    //     const loginFlow = new LoginFlow(email, "")
    //     loginFlow
    //         .loginWithCredential()
    //         .verifyLoginUnsuccessfully()
    // });
    // it('should see message when login invalid password', function () {
    //     const {email, pass} = INVALID_CREDS
    //
    //     const loginFlow = new LoginFlow("asd@asd.com", pass)
    //     loginFlow
    //         .loginWithCredential()
    //         .verifyLoginUnsuccessfully()
    // });
    it('should see message when login invalid both email and password', function () {
        const {email, pass} = INVALID_CREDS

        const loginFlow = new LoginFlow(email, pass)
        loginFlow
            .loginWithCredential()
            .verifyLoginUnsuccessfully()
    });
});