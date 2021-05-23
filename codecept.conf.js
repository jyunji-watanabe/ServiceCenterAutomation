require('dotenv').config({ path: '.env' });

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: process.env.URL,
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js',
    ...require('./config/pageObjects')
  },
  bootstrap: null,
  mocha: {},
  name: 'ServiceCenterAutomation',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}