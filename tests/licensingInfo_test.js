Feature('LicensingInfo');
require('dotenv').config({ path: '.env' });
Scenario('Retrieve Active Named Users and Application Objects', async ({ I, loginPage, licensingPage }) => {
    I.amOnPage('/');
    loginPage.sendCredentials(process.env.ACCOUNT, process.env.PASSWORD);
    licensingPage.open();
    let featureTitleValueSet = await licensingPage.getFeatureValueSet();
    I.say("Active Named Users: " + featureTitleValueSet["Active Named Users"]);
    I.say("Application Objects: " + featureTitleValueSet["Application Objects"]);
});
