describe('Webdriver IO API', function () {
    it('should get value of text field', function () {
        //Declare element selectors values
        const FORM_ICON = '~Forms'
        const INPUT_TXT = '~text-input'
        const INPUT_RESULT_TXT = '~input-text-result'

        // 1. Click Form icon on Home Screen
        $(FORM_ICON).click()
        // 2. Set value into text filed
        $(INPUT_TXT).setValue("Value New Here")
        // 3. get value from the field (you have text)
        const value_text = $(INPUT_RESULT_TXT).getText()
        // 4. Print out value
        console.log(value_text)
    });
});