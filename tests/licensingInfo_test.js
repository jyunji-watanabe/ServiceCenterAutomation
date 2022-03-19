Feature('LicensingInfo');
require('dotenv').config({ path: '.env' });
let utility = require('../utilities/utility.js');
Scenario('Retrieve Active Named Users and Application Objects count', async ({ I, licensingPage }) => {
    I.amOnPage('/');
    I.login(process.env.ACCOUNT, process.env.PASSWORD);
    licensingPage.open();
    let featureTitleValueSet = await licensingPage.getFeatureValueSet();
    let NEWLINE = '\r\n';
    let result = "Active Named Users: " + featureTitleValueSet["Active Named Users"] + NEWLINE + 
                 "Application Objects: " + featureTitleValueSet["Application Objects"];
    I.writeToFile("output/LicensingInfo" + utility.getFileSuffix() + ".txt", result);
});