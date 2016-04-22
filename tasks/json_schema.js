/*
 * grunt-json-schema
 * https://github.com/werk85/grunt-json-schema
 *
 * Copyright (c) 2013 Malte Legenhausen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.registerMultiTask('json_schema', 'Your task description goes here.', function() {
    var validator = require('json-schema');
    var options = this.options();

    this.files.forEach(function(file) {
      if (!grunt.file.exists(file.dest)) {
        grunt.log.error('Schema file ' + file.dest + ' does not exist');
        return;
      }

      grunt.log.subhead('Appling schema ' + file.dest);
      var schema = grunt.file.readJSON(file.dest);
      file.src.forEach(function(src) {
        var input = grunt.file.readJSON(src);
        var result = validator.validate(input, schema, options);
        if (!result.valid) {
          grunt.log.subhead('Errors in ' + src);
          var onError = options.onError || function(error) {
            grunt.log.errorlns(error.property + ' ' + error.message);
          };

          result.errors.forEach(onError);
        } else {
          grunt.log.oklns(src);
        }
      });
    });

    if (this.errorCount) {
      return false;
    }

    grunt.log.ok();
  });
};
