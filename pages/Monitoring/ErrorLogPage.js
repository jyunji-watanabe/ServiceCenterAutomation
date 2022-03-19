const menu = require('../../utilities/menu');

const { I } = inject();
module.exports = {
    locators: {
        From: { css: 'input[id$=Filter_FromDate]' },
        To: { css: 'input[id$=Filter_ToDate2]' },
        FilterButton: { css: 'input[id$=Button1]' },
        ExportButton: { css: 'input[value=Export to excel]' },
    },
    open: function() {
        menu.open('Monitoring', 'Error');
    },
    filterByDates: function(startDateString, endDateString) {
        I.fillField(this.locators.From, startDateString);
        I.fillField(this.locators.To, endDateString);
        I.click(this.locators.FilterButton);
    },
    downloadFile: function() {
        // if logs in that timewindow aren't there, export button disappears
        //I.click(this.locators.ExportButton);
    }
}