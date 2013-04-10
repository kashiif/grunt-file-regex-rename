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

	test_vars: {
		match: 'folder_one/*',
		version: '1.0.0'
	},
		
	fileregexrename: {
	  options: {
		  replacements: [
		    {
			  pattern: /\{name\}/g,
			  replacement: 'frrtest'
		    },
		    {
			  pattern: /\{version\}/g,
			  replacement: '1.0.0'
		    },
		    {
			  pattern: /\{date\}/g,
			  replacement: '2011-02-25'
		    }
			
		  ]
		},

      main: {
        files: [
          {expand: true, cwd: 'test/fixtures', src: ['*.*'], dest: 'tmp/frr_test_files/'},
          {expand: true, cwd: 'test/fixtures', src: ['**'], dest: 'tmp/frr_test_mix/'},
          {expand: true, cwd: 'test/fixtures', src: ['<%= test_vars.match %>'], dest: 'tmp/frr_test_v<%= test_vars.version %>/'}
        ]
      },

      flatten: {
        files: [
          {expand: true, flatten: true, filter: 'isFile', src: ['test/fixtures/**'], dest: 'tmp/frr_test_flatten/'}
        ]
      },

      single: {
        files: [
          {src: ['test/fixtures/{date}.txt'], dest: 'tmp/**'}
        ]
      }
	},
	

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }
	
	
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'fileregexrename', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', [ 'test']);

};