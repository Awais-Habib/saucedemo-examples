const loginPage = require('../pages/login.page')
const configData = require('../config')
const constantData = require('../constant');

describe('Login feature tests', () => {

    it('I can check loginpage title', () => {

        browser.url('/')
        browser.maximizeWindow()
        assert.equal(constantData.LOGIN_PAGE_TITLE, loginPage.getPageTitle(), "Error: Page title is not available")

    })

    it('I can verify the user Login', () => {

        loginPage.doLogin(configData.user, configData.pass)
        expect(loginPage.isHeaderVisible())

    })
})