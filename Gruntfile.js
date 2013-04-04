/*
 * grunt-file-regex-rename
 * https://github.com/kashiif/grunt-file-regex-rename
 *
 * Copyright (c) 2013 Kashif Iqbal Khan
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';


  // Project configuration.
  grunt.initConfig({
    // Before generating any new files, remove any previously-created files.
    clean: {
      test: ['tmp']
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['clean', 'copy']);

};