Feature('Monitoring');
require('dotenv').config({ path: '.env' });
let utility = require('../utilities/utility.js')
Scenario('Download logfiles registered last week', async ({ I, errorLogPage }) => {
    I.amOnPage('/');
    I.login(process.env.ACCOUNT, process.env.PASSWORD);
    errorLogPage.open();
    errorLogPage.filter();
    pause();
});