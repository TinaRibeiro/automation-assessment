global.authenticatorOption = '';

export default class Page {
    open () {
        browser.maximizeWindow();
        return browser.url(`https://www.saucedemo.com/`)
    }
}
