const menu = require('../../utilities/menu');

const { I } = inject();
module.exports = {
    locators: {
        From: { css: 'input[id$=Filter_FromDate]' },
        To: { css: 'input[id$=Filter_ToDate2]' }
    },
    open: function() {
        menu.open('Monitoring', 'Error');
    },
    filter: function() {
        I.fillField(this.locators.From, '2021-05-20 01:23:45');
        I.fillField(this.locators.To, '2021-05-27 01:23:46');
    }
}