const { I } = inject();

module.exports = {
    locators: {
        Username: {css: 'label[id$=Username]+input'},
        Password: {css: 'label[id$=Password]+input'},
    },
    sendCredentials(username, password) {
        I.see('Login');
        I.fillField(this.locators.Username, username);
        I.fillField(this.locators.Password, password);
        I.click('Login');
    },
}