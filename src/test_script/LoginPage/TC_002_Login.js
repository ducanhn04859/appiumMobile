import {VALID_CREDS, INVALID_CREDS} from "../../test_data/TC_001_Login";
import LoginFlow from "../../test_flow/login/LoginFlow";
import allureReporter from '@wdio/allure-reporter'

describe(`Smoke test for ${browser.capabilities.deviceName}`, function () {
    it('SM 001', function () {
        allureReporter.addTestId("TC_001")
        allureReporter.addSeverity("critical")

        const {email, pass} = VALID_CREDS
        const loginFlow = new LoginFlow(email, pass)
        loginFlow
            .loginWithCredential()
            .verifyLoginSuccessfully()
    });

    it('SM 002', function () {
        allureReporter.addTestId("TC_002")

        const {email, pass} = INVALID_CREDS
        const loginFlow = new LoginFlow(email, "")
        loginFlow
            .loginWithCredential()
            .verifyLoginUnsuccessfully()
    });
    it('SM 003', function () {
        allureReporter.addTestId("TC_003")
        allureReporter.addSeverity("normal")

        const loginFlow = new LoginFlow("assdad@asdasda.com", 123)
        loginFlow
            .loginWithCredential()
            .verifyLoginUnsuccessfully()
    });
    it('SM 004', function () {
        allureReporter.addTestId("TC_004")
        allureReporter.addIssue("ISSUE_001")

        const {email, pass} = INVALID_CREDS
        const loginFlow = new LoginFlow(email, pass)
        loginFlow
            .loginWithCredential()
            .verifyLoginUnsuccessfully()
    });
});