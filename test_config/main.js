let chai = require("chai")
// wdio.conf.js
const allure = require('allure-commandline')

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
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableMochaHooks: true,
        issueLinkTemplate: "https://mybug-tracker/{}",
        tmsLinkTemplate: "https://my-tms/{}"
    }]],
    waitforTimeout: 5000,
    maxInstances: 10,
    sync: true,
    specs: [
        // 'PlayWithMocha.js'
        // 'api/click.js'
        // 'api/swiprVertical.js'
        // 'api/swiprHorizontal.js'
        // 'src_backup/test_script/LoginPage/TC_005_Login.js',
        // "src/test_script/LoginPage/TC_001_Login.js",
        "src/test_script/BDD/Login/login.feature"
    ],
    before: function () {
        global.chaiExpect = chai.expect
    },
    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)
                if (exitCode !== 0) {
                    return reject(reportError)
                }
                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },

    afterTest: function (test, context, {error, result, duration, passed, retries}) {
        if (error) {
            browser.takeScreenshot()
        }
    },
}