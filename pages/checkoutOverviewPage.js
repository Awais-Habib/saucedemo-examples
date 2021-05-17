const CheckoutCompletePage = require('../pages/checkoutCompletePage');
const util = require('../util/utilitues')

class CheckoutOverviewPage {

    get finishBtn() { return $("#finish") }

    getItemCount() {
        return parseInt($(".shopping_cart_badge").getText())
    }

    finishCheckout() {
        util.doClick(this.finishBtn)
    }
}
module.exports = new CheckoutOverviewPage()