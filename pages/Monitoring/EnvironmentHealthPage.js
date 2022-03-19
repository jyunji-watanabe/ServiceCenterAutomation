const menu = require('../../utilities/menu');

const { I } = inject();
module.exports = {
    locators: { // these locators are determined by looking at PE. It should be changed if you use this logic on your environment other than PE.
        frontEndTableBody: '.table:nth-of-type(1) tbody',
        deployControllerImg: 'td:nth-of-type(1) img',
        schedulerImg: 'td:nth-of-type(2) img',
        deploymentImg: 'td:nth-of-type(4) img',
        iisImg: 'td:nth-of-type(5) img',
        serverAPIImg: 'td:nth-of-type(6) img',
        serverIdentityImg: 'td:nth-of-type(7) img',
    },
    open: function() {
        menu.open('Monitoring', 'Environment Health');
    },
    async getFrontEndStatuses() {
        // PE offeres only one row for the Front-end Servers section
        let firstRowSelector = this.locators.frontEndTableBody + ' tr:nth-of-type(1) ';
        let value = {
            deployController: await I.grabAttributeFrom(firstRowSelector + this.locators.deployControllerImg,
                                                        'title'),
            scheduler: await I.grabAttributeFrom(firstRowSelector + this.locators.schedulerImg,
                                                        'title'),
            deploymentImg: await I.grabAttributeFrom(firstRowSelector + this.locators.deploymentImg,
                                                        'title'),
            iisImg: await I.grabAttributeFrom(firstRowSelector + this.locators.iisImg,
                                                        'title'),
            serverAPIImg: await I.grabAttributeFrom(firstRowSelector + this.locators.serverAPIImg,
                                                        'title'),
            serverIdentityImg: await I.grabAttributeFrom(firstRowSelector + this.locators.serverIdentityImg,
                                                        'title')
        }
        return value;
    }
}