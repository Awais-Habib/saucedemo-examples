class Utilities {

    doClick(element) {
        element.waitForDisplayed()
        element.click()
    }

    doSetValue(element, value) {
        element.waitForDisplayed()
        element.addValue(value)
    }

    doGetText(element) {
        element.waitForDisplayed()
        return element.getText()
    }

    getPageTitle() {
        return browser.getTitle()
    }

    doIsDisplayed(element) {
        element.waitForDisplayed()
        return element.isDIsplayed()
    }

}

module.exports = new Utilities()