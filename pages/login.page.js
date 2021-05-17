const util = require('../util/utilitues')

class LoginPage {

    //Page locators
    get userName() { return $('#user-name') }
    get passWord() { return $('#password') }
    get btnCLick() { return $('#login-button') }
    get errorDisplayed() { return $("[data-test='error']") }
    get headerContainerVisible() { return $('#header_container') }


    getPageTitle() {
        return util.getPageTitle()
    }

    doLogin(username, password) {
        util.doSetValue(this.userName, username)
        util.doSetValue(this.passWord, password)
        util.doClick(this.btnCLick)
    }

    isErrorVisible() {
        return util.doIsDisplayed(this.errorDisplayed)
    }

    isHeaderVisible() {
        this.headerContainerVisible.isDisplayed()
    }
}
module.exports = new LoginPage()