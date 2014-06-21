/* jshint node:true */
/* global require, it, before, beforeEach, describe */

'use strict';
var should = require('should'),
  inquirer = require('inquirer'),
  gulp = require('gulp'),
  mockGulpDest = require('mock-gulp-dest')(gulp);

require('../slushfile');

/**
* Mock inquirer prompt
*/

function mockPrompt(answers) {
  inquirer.prompt = function (prompts, done) {
    [].concat(prompts).forEach(function (prompt) {
      if (!(prompt.name in answers)) {
        answers[prompt.name] = prompt.default;
      }
    });
    done(answers);
  };
}

describe('slush-html5-template', function() {
  before(function () {
    process.chdir(__dirname);
    process.argv.push('--skip-install');
  });

  describe('default sass generator', function () {
    beforeEach(function () {
      mockPrompt({
        cssFramework: 'includeSass',
        features: ['includeNormalizeSCSS', 'includeModernizr'],
        moveon: true
      });
    });

    it('should put all project files in current working directory', function (done) {
      gulp.start('default').once('stop', function () {
        mockGulpDest.cwd().should.equal(__dirname);
        mockGulpDest.basePath().should.equal(__dirname);
        done();
      });
    });

    it('should create expected files', function (done) {
      gulp.start('default').once('stop', function () {
        mockGulpDest.assertDestContains([
          'README.md',
          '.bowerrc',
          '.editorconfig',
          '.gitattributes',
          '.gitignore',
          '.jshintrc',
          '.travis.yml',
          'app',
          'bower.json',
          'coffeelint.json',
          'gulpfile.coffee',
          'package.json',
          'test',
          'app/404.html',
          'app/.htaccess',
          'app/assets',
          'app/favicon.ico',
          'app/index.html',
          'app/robots.txt',
          'test/test.coffee',
          'test/test.js',
          'app/assets/coffee',
          'app/assets/images',
          'app/assets/coffee/app.coffee',
          'app/assets/coffee/libs',
          'app/assets/coffee/main.coffee',
          'app/assets/coffee/libs/console.coffee',
          'app/assets/sass/main.scss',
          'app/assets/sass/partials/_base.scss'
        ]);
        done();
      });
    });
  });

  describe('default css generator', function () {
    beforeEach(function () {
      mockPrompt({
        cssFramework: 'includeCss',
        features: ['includeNormalizeSCSS', 'includeModernizr'],
        moveon: true
      });
    });

    it('should create expected files', function (done) {
      gulp.start('default').once('stop', function () {
        mockGulpDest.assertDestNotContains([
          'app/assets/sass/main.scss',
          'app/assets/sass/partials/_base.scss'
        ]);
        done();
      });
    });
  });
});
