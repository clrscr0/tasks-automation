// An example configuration file.
exports.config = {
  directConnect: true,

  

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    //'browserName': 'chrome',
    browserName: 'chrome',
    acceptInsecureCerts: true,
    'chromeOptions': {
      prefs: {
        'plugins.always_open_pdf_externally': true
      }
    }
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['file-downloader.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  onPrepare: function() {
    browser.manage().timeouts().implicitlyWait(5000);
    browser.manage().timeouts().setScriptTimeout(60000);
  }
};
