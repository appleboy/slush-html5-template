'use strict'

var gulp = require('gulp'),
  install = require('gulp-install'),
  conflict = require('gulp-conflict'),
  template = require('gulp-template'),
  rename = require('gulp-rename'),
  inquirer = require('inquirer');

gulp.task('default', function (done) {
  inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: 'Give your app a name',
    default: 'html5-template'
  }, {
    type: 'list',
    name: 'cssFramework',
    message: 'What framework of css do you want?',
    choices: [{
        name: "Sass: Syntactically Awesome Style Sheets.",
        value: "includeSass"
      }, {
        name: "Compass is an open-source CSS Authoring Framework.",
        value: "includeCompass"
      }
    ],
    default: 'sass'
  }, {
    type: 'checkbox',
    name: 'features',
    message: 'Which other options would you like to include?',
    choices: [{
      name: 'Normalize-scss',
      value: 'includeNormalizeSCSS',
      checked: true
    }, {
      name: 'Modernizr',
      value: 'includeModernizr',
      checked: true
    }]
  }, {
    type: 'confirm',
    name: 'moveon',
    message: 'Continue?'}
  ],
  function (answers) {
    var hasFeature;

    hasFeature = function (feat) {
      return features.indexOf(feat) !== -1;
    };

    if (!answers.moveon) {
      return done();
    }
    answers.includeSass = (answers.cssFramework === 'includeSass') ? true : false;
    answers.includeCompass = (answers.cssFramework === 'includeCompass') ? true : false;
    answers.includeNormalizeSCSS = hasFeature('includeNormalizeSCSS');
    answers.includeModernizr = hasFeature('includeModernizr');
    gulp.src(__dirname + '/templates/**')
      .pipe(template(answers))
      .pipe(rename(function (file) {
        if (file.basename[0] === '_' && file.extname !== '.scss' ) {
          file.basename = '.' + file.basename.slice(1);
        }
      }))
      .pipe(conflict('./'))
      .pipe(gulp.dest('./'))
      .pipe(install())
      .on('finish', function () {
        done();
      });
  });
});
