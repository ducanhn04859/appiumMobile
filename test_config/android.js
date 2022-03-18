const {config} = require("./main")

config.capabilities = [{
    "platformName": "Android",
    "automationName": "UiAutomator2",
    "udid": "emulator-5554",
    "appPackage": "com.wdiodemoapp",
    "appActivity": ".MainActivity",
    "systemPort": 6001,
    port: 6000,
    deviceName: "Pixel 2 API 30"
}]

exports.config = config