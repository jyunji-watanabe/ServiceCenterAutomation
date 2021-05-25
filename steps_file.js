// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    login: function(username, password) {
        this.see('Login');
        this.fillField({css: 'label[id$=Username]+input'}, username);
        this.fillField({css: 'label[id$=Password]+input'}, password);
        this.click('Login');
    },
  });
}
