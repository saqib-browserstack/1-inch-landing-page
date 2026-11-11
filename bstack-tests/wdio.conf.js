exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'saqibganaie_ENWdfV',
  key: process.env.BROWSERSTACK_ACCESS_KEY || '8VkLQ37sbs7pyjKh5Hco',

  hostname: 'hub.browserstack.com',

  services: [
    [
      'browserstack',
      {
        buildIdentifier: '#${BUILD_NUMBER}',
        app: 'bs://62052639d354aea7139864ba993d1cf6106ef4a3',
      }
    ]
  ],

  capabilities: [
    {
      'bstack:options': {
        deviceName: 'Samsung Galaxy S23',
        osVersion: '13.0',
        projectName: 'Wikipedia Android Tests',
        buildName: 'Wikipedia-WDIO-Build',
        sessionName: 'Wikipedia Flows',
        debug: true,
        networkLogs: true,
        allowInvisibleElements: true,
      }
    }
  ],

  specs: ['./specs/*.js'],
  exclude: [],

  logLevel: 'error',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  waitforTimeout: 15000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 120000,
  },

  reporters: ['spec'],
};