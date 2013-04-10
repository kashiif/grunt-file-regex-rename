var grunt = require('grunt');
var fs = require('fs');

exports.fileregexrenameTest = {
  main: function(test) {
    'use strict';

    test.expect(3);

    var actual = fs.readdirSync('tmp/frr_test_files').sort();
    var expected = fs.readdirSync('test/expected/frr_test_files').sort();
    test.deepEqual(expected, actual, 'should copy several files in a directory');

    actual = fs.readdirSync('tmp/frr_test_mix').sort();
    expected = fs.readdirSync('test/expected/frr_test_mix').sort();
    test.deepEqual(expected, actual, 'should copy a mix of folders and files');

    actual = fs.readdirSync('tmp/frr_test_v1.0.0').sort();
    expected = fs.readdirSync('test/expected/frr_test_v1.0.0').sort();
    test.deepEqual(expected, actual, 'should parse both dest and src templates');

    test.done();
  },

  flatten: function(test) {
    'use strict';

    test.expect(1);

    var actual = fs.readdirSync('tmp/frr_test_flatten').sort();
    var expected = fs.readdirSync('test/expected/frr_test_flatten').sort();
    test.deepEqual(expected, actual, 'should create a flat structure');

    test.done();
  },

  
  single: function(test) {
    'use strict';

    test.expect(1);

    var actual = grunt.file.read('tmp/2011-02-25.txt');
    var expected = grunt.file.read('test/expected/2011-02-25.txt');
    test.equal(expected, actual, 'should allow for single file copy');

    test.done();
  },

  /*
  rename: function(test) {
    'use strict';

    test.expect(1);

    var actual = grunt.file.read('tmp/{name}_{version}.txt');
    var expected = grunt.file.read('test/expected/frrtest_1.0.0.txt');
    test.equal(expected, actual, 'should allow for single file copy');

    test.done();
  }
  */
};