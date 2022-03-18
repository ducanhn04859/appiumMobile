const MSG_TITLE = "~"
const MSG_CONTENT = "~"
const MSG_ACCEPT_BTN = "~"

class LoginMessage {
    wait_until_screen_display() {
        $(MSG_TITLE).waitForDisplayed()
    }

    get msg_title() {
        return $(MSG_TITLE)
    }

    get msg_content() {
        return $(MSG_CONTENT)
    }

    get accept_btn() {
        return $(MSG_ACCEPT_BTN)
    }

}

export default new LoginMessage()