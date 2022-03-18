const HOME_ICON = "~Home"
const FORM_ICON = "~Forms"
const WEBSITE_ICON = "~Webview"
const LOGIN_ICON = "~Login"
const SWIPE_ICON = "~Swipe"
const DRAG_ICON = "~Drag"

class NavBar {
    wait_until_screen_display() {
        $(HOME_ICON).waitForDisplayed()
    }

    get form_icon() {
        return $(FORM_ICON)
    }

    get website_icon() {
        return $(WEBSITE_ICON)
    }

    get login_icon() {
        return $(LOGIN_ICON)
    }

    get swipe_icon() {
        return $(SWIPE_ICON)
    }

    get drag_icon() {
        return $(DRAG_ICON)
    }
}

export default new NavBar()