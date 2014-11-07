exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec/*_spec.js'],
  chromeDriver: './selenium/chromedriver',
  capabilities: {
    browserName: 'chrome',

    // Number of times to run this set of capabilities (in parallel, unless
    // limited by maxSessions). Default is 1.
    count: 1,

    // If this is set to be true, specs will be sharded by file (i.e. all
    // files to be run by this set of capabilities will run in parallel).
    // Default is false.
    shardTestFiles: false,

    // Maximum number of browser instances that can run in parallel for this
    // set of capabilities. This is only needed if shardTestFiles is true.
    // Default is 1.
    maxInstances: 1,

    // Additional spec files to be run on this capability only.
    specs: ['spec/chromeOnlySpec.js'],

    // Spec files to be excluded on this capability only.
    exclude: ['spec/doNotRunInChromeSpec.js']
  }
};