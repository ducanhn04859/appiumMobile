import {VALID_CREDS, INVALID_CREDS} from "../../test_data/TC_001_Login";
import LoginFlow from "../../test_flow/login/LoginFlow";
import allureReporter from '@wdio/allure-reporter'


describe('Login Function', function () {
    it('should login successfully', function () {
        allureReporter.addTestId("TC_001")
        allureReporter.addSeverity("critical")

        const {email, pass} = VALID_CREDS
        const loginFlow = new LoginFlow(email, pass)
        loginFlow
            .loginWithCredential()
            .verifyLoginSuccessfully()
    });

    it('should see message when login invalid email', function () {
        allureReporter.addTestId("TC_002")

        const {email, pass} = INVALID_CREDS
        const loginFlow = new LoginFlow(email, "")
        loginFlow
            .loginWithCredential()
            .verifyLoginUnsuccessfully()
    });
    it('should see message when login invalid password', function () {
        allureReporter.addTestId("TC_003")
        allureReporter.addSeverity("normal")

        const {email, pass} = INVALID_CREDS
        const loginFlow = new LoginFlow("asdfgdfg@asdfgdd.com", pass)
        loginFlow
            .loginWithCredential()
            .verifyLoginUnsuccessfully()
    });
    
    it('should see message when login invalid both email and password', function () {
        allureReporter.addTestId("TC_004")
        allureReporter.addIssue("ISSUE_001")

        const {email, pass} = INVALID_CREDS
        const loginFlow = new LoginFlow(email, pass)
        loginFlow
            .loginWithCredential()
            .verifyLoginUnsuccessfully()
    });
});