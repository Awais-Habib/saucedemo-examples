const util = require('../util/utilitues')
const constantData = require('../constant')

class InventoryPage {
    get sortContainerClick() { return $('.product_sort_container') }


    productPage() {
        return browser.getUrl() === constantData.LOGIN_PAGE_TITLE
    }

    selectSortTheItems() {
        util.doClick(this.sortContainerClick)
    }

    sortItembyPrice(first, last) {
        const sort = first.slice(0, 2) + last.slice(0, 2)
        $(`option[value=${sort}]`).waitForDisplayed(5000)
        $(`option[value=${sort}]`).click();
    }

    isProductSorted(order) {
        const prices = [...$$('.inventory_item_price')].map(node => Number(node.getText().slice(1)))
        let descending = (order !== 'ascending') ? true : false
        if (descending)
            expect(prices.to.be.sorted({ descending }))
    }
}
module.exports = new InventoryPage()