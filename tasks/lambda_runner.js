'use strict';
// require
var path    = require('path');
var factory = require('lambda-handler');
/*
 * grunt-lambda-runner
 * https://github.com/k-kinzal/grunt-lambda-runner
 *
 * Copyright (c) 2012-2015 k-kinzal
 * Licensed under the MIT license.
 */
module.exports = function (grunt) {
  // register tasks
  grunt.registerTask('lambda_runner', 'Running AWS Lambda functions on local machine', function () {
    var done    = this.async();
    var options = this.options();

    var handlerPath = path.resolve(options.handler);
    var fixturePath = path.resolve(options.event);

    factory(handlerPath, fixturePath, function(handler, event, context) {
      context.done = function(error, message) {
        if (error) {
          console.log('Error ' + error);
        }
        done();
      };

      handler(event, context);
    })();

  });

};