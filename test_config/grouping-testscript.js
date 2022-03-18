const {config} = require("./main")

config.capabilities = [{
    "platformName": "Android",
    "automationName": "UiAutomator2",
    "udid": "emulator-5554",
    "appPackage": "com.wdiodemoapp",
    "appActivity": ".MainActivity",
    deviceName: "Pixel 2 API 30"
}]

config.suites = {
    smokeTest: ["src/test_script/LoginPage/TC_002_Login.js"],
    regressionTest: ["src/test_script/LoginPage/TC_001_Login.js"]
}

exports.config = config