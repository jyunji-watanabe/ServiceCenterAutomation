Feature('Monitoring');
require('dotenv').config({ path: '.env' });
let Filter = require('../utilities/filter.js')
Scenario('Download logfiles registered last week', async ({ I, errorLogPage }) => {
    I.amOnPage('/');
    I.login(process.env.ACCOUNT, process.env.PASSWORD);
    errorLogPage.open();
    let filter = new Filter();
    errorLogPage.filterByDates(filter.startDateAsString, filter.endDateAsString);
    errorLogPage.downloadFile();
});