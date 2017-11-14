module.exports = function(config) {
  'use strict';

  config.set({
    autoWatch:  true,
    debug:      true,
    browsers:   ['Chrome', 'Firefox'],
    frameworks: ['jasmine', 'fixture'],
    logLevel:   config.LOG_ERROR,
    port:       9876,
    reporters:  ['dots'],
    singleRun:  true,

    files: [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/jasmine-jquery/lib/jasmine-jquery.js',

      'lib/*.css',
      'lib/*.js',

      'spec/spec_helper.js',

      'spec/fixtures/*.html',

      'spec/javascripts/**/*.js'
    ],

    preprocessors: {
      '**/*.html': ['html2js']
    }
  });
};
