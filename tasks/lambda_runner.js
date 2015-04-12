'use strict';
// require
var path    = require('path');
var factory = require('lambda-handler');

module.exports = function (grunt) {
  // register tasks
  grunt.registerTask('lambda_runner', 'Running AWS Lambda functions on local machine', function () {
    var done    = this.async();
    var options = this.options();

    var handlerPath = path.resolve(options.handler);
    var fixturePath = path.resolve(options.event);

    factory(handlerPath, fixturePath, function(handler, event, context) {
      var succeed = context.succeed;
      var fail = context.fail;

      context.succeed = function(result) {
        context.call(succeed, result);
        done();
      };

      context.fail = function(result) {
        context.call(fail, result);
        done(false);
      };

      handler(event, context);
    })();

  });

};