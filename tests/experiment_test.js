Feature('experiment');
require('dotenv').config({ path: '.env' });
Scenario('test something', ({ I, loginPage, licensingPage }) => {
    I.amOnPage('/');
    loginPage.sendCredentials(process.env.ACCOUNT, process.env.PASSWORD);
    licensingPage.open();
    pause();
});
