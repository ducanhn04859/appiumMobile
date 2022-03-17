import LoginFlow from "../../test_flow/login/LoginFlow";

describe('Common Flow', function () {
    it('should run test with common flow', function () {
        // 1. Click on Login Icon from Homepage
        const LOGIN_ICON = '~Login'
        $(LOGIN_ICON).click()

        let email = "duasd@adas.com"
        let pass = "87654321"

        let loginFlow = new LoginFlow()
        loginFlow.loginWithCredential(email, pass)
        loginFlow.verifyEmailTextField(email)
    });
});