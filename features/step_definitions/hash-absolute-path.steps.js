var File = require('vinyl');
var Buffer = require('buffer').Buffer;

module.exports = function() {
  'use strict';

  this.World = require('../support/world').World;

  this.Given(/^I have declared absolute dependencies in an html file with revision tokens$/, function (callback) {

    this.indexFile = new File({
      cwd: 'test/fixtures/',
      base: 'test/fixtures/static',
      path: 'test/fixtures/static/absolute-path-index.html',
      contents: Buffer.from(this.htmlFileContents('absolute-path-index'))
    });
    callback();
    
  });

};
