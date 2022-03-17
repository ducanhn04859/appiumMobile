let chai = require("chai")
exports.config = {
    runner: 'local',
    port: 4723,
    hostname: 'localhost',
    path: '/wd/hub',
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 600000
    },
    waitforTimeout: 5000,
    maxInstances: 10,
    sync: true,
    specs: [
        // 'PlayWithMocha.js'
        // 'api/click.js'
        // 'api/swiprVertical.js'
        // 'api/swiprHorizontal.js'
        // 'src/test_script/LoginPage/TC_005_Login.js',
        "src/test_script/LoginPage/TC_006_LoginWithCommonFlow.js"
    ],
    capabilities: [{
        "platformName": "Android",
        "automationName": "UiAutomator2",
        "udid": "emulator-5554",
        "appPackage": "com.wdiodemoapp",
        "appActivity": ".MainActivity"
    }],
    before: function () {
        global.chaiExpect = chai.expect
    }
}