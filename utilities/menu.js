const { I } = inject();

module.exports = {
    locators: {
        header: { css: '.sc-header-menu' },
        subHeader: { css: '.sc-sub-header' },
    },
    open(headerTitle, subHeaderTitle) {
        I.click(headerTitle, this.locators.header);
        if (subHeaderTitle)
            I.click(subHeaderTitle, this.locators.subHeader);
    },
    async retrieve(name) {
        return await I.grabTextFrom()
    }
}