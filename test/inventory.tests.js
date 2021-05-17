const loginPage = require('../pages/login.page')
const configData = require('../config')
const inventory = require('../pages/inventory.page')
const cart = require('../pages/cart.page')
const checkoutOverviewPage = require('../pages/checkoutOverviewPage')
const checkoutCompletePage = require('../pages/checkoutCompletePage')
const { fillCheckOutformation } = require('../pages/checkoutCompletePage')


describe('As a user', () => {

    it('I can sort the items', () => {

        browser.url('/')
        browser.maximizeWindow()
        loginPage.doLogin(configData.user, configData.pass)
        expect(inventory.productPage())
        inventory.selectSortTheItems()
        inventory.sortItembyPrice('lowest', 'highest')
        expect(inventory.isProductSorted('ascending'))
    })

    it('I can add items into the cart', () => {

        cart.addItemToCart('lowest')
        expect(cart.numberOfItemsInCart()).to.equal('1')
    })

    it('I can add second item into the cart', () => {

        cart.addItemToCart('lowest')
        expect(cart.numberOfItemsInCart()).to.equal('2')
    })

    it('I can remove the lowest priced item from cart', () => {

        cart.removeItem('lowest')
        expect(cart.numberOfItemsInCart()).to.equal('1')

    })

    it('I can checkout the cart', () => {

        cart.goToCartPage()
        cart.goToCheckOut()
        expect(cart.isCartPageAvailable())

    })

    it('I can finally checkout to finish the order', () => {

        checkoutCompletePage.fillCheckOutformation()
        expect(checkoutOverviewPage.getItemCount()).to.be.above(0)
        checkoutOverviewPage.finishCheckout();
        assert.equal(checkoutCompletePage.isConfirmationMessage(), "THANK YOU FOR YOUR ORDER", "Error: Confirmation page is not available")

    })

})