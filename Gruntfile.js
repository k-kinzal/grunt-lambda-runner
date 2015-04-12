'use strict';

module.exports = function (grunt) {
  // configuration
  var config = grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        force: true,
        reporter: require('jshint-stylish')
      },
      all: [
        'src/*.js',
        'Gruntfile.js'
      ]
    }
  });
  // tasks
  grunt.registerTask('test', function() {
    grunt.loadNpmTasks('grunt-contrib-jshint'); 
    grunt.task.run([
      'jshint'
    ]);
  });
};




