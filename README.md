# grunt-lambda-runner

[![Build Status](https://travis-ci.org/k-kinzal/grunt-lambda-runner.svg)](https://travis-ci.org/k-kinzal/grunt-lambda-runner)
[![Dependency Status](https://david-dm.org/k-kinzal/grunt-lambda-runner.svg)](https://david-dm.org/k-kinzal/grunt-lambda-runner)
[![devDependency Status](https://david-dm.org/k-kinzal/grunt-lambda-runner/dev-status.svg)](https://david-dm.org/k-kinzal/grunt-lambda-runner#info=devDependencies)

> Running AWS Lambda functions on local machine for grunt task

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-lambda-runner --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-lambda-runner');
```

## The "lambda_runner" task

### Overview
In your project's Gruntfile, add a section named `lambda_runner` to the data object passed into `grunt.initConfig()`.


```js
grunt.initConfig({
  lambda_runner: {
    options: {
      handler: 'src/index.js', // lambda handler script
      event: 'fixture/debug.json' // event parameter
    }
  },
})
```

## License
Copyright (c) 2012-2015 k-kinzal. Licensed under the MIT license.