import {Given, When, Then} from '@wdio/cucumber-framework';
import {VALID_CREDS, INVALID_CREDS} from "../../../test_data/TC_001_Login";
import allureReporter from '@wdio/allure-reporter'
import LoginFlow_1 from "../../../test_flow/login/LoginFlow_1";

const loginFlow = new LoginFlow_1()
Given("I am on the login page", () => {
    loginFlow.openLoginPage()
});

When("I login with correct username and password", () => {
    const {email, pass} = VALID_CREDS
    loginFlow.loginWithCredential(email, pass)
});

Then("I should see a flash message saying message", () => {
    loginFlow.verifyLoginSuccessfully()
});