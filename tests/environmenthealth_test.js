Feature('EnvironmentHealth');
require('dotenv').config({ path: '.env' });
let utility = require('../utilities/utility.js');
Scenario('Retrieve status of Front-end Servers on Personal Environment', async ({ I, environmentHealthPage }) => {
    I.amOnPage('/');
    I.login(process.env.ACCOUNT, process.env.PASSWORD);
    environmentHealthPage.open();
    let value = await environmentHealthPage.getFrontEndStatuses();
    // format the returned value here 
    let result = utility.getDateTimeText() + "," + 
                 value.deployController + "," + value.scheduler + "," + value.deploymentImg + "," +
                 value.iisImg + "," + value.serverAPIImg + "," + value.serverIdentityImg;
    // show result on the terminal. In real projects, we should push this information to a file or DB to check the difference or something.
    I.say(result);
});