const util = require('../util/utilitues')

class CheckoutCompletePage {

    get getFinalMessage() { return $('.complete-header') }
    get firstName() { return $('#first-name') }
    get lastName() { return $('#last-name') }
    get postalCode() { return $('#postal-code') }
    get continueBtn() { return $('#continue') }

    isConfirmationMessage() {

        return util.doGetText(this.getFinalMessage)
    }

    fillCheckOutformation() {
        util.doSetValue(this.firstName, 'First Name')
        util.doSetValue(this.lastName, 'Last Name')
        util.doSetValue(this.postalCode, 'GB1222')
        util.doClick(this.continueBtn)
    }
}
module.exports = new CheckoutCompletePage()