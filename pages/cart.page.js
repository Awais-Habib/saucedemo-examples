const util = require('../util/utilitues')
const constantData = require('../constant')

class Cart {

  get addItem() { return $('.btn_primary') }
  get removeItems() { return $('.btn_secondary') }
  get numberOfItems() { return $('.shopping_cart_badge') }
  get checkout() { return $('#checkout') }
  get clickShoppingCart() { return $('.shopping_cart_link') }


  addItemToCart() {
    util.doClick(this.addItem)
  }

  numberOfItemsInCart() {
    return util.doGetText(this.numberOfItems)
  }

  removeItem() {
    util.doClick(this.removeItems)
  }

  goToCartPage() {
    util.doClick(this.clickShoppingCart)
  }

  goToCheckOut() {
    util.doClick(this.checkout)
  }

  isCartPageAvailable() {
    return browser.getUrl() === constantData.SHOPING_CART
  }

}
module.exports = new Cart()