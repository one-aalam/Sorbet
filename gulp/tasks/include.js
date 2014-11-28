var gulp = require('gulp'),
    include = require('gulp-file-include'),
    rename = require('gulp-rename'),
    filter = require('gulp-filter'),
    dir = require('../config').base,
    utils = require('../utils'),

    tplFolder = '/templates',
    tplFiles = '/*.tpl.html',
    srcDir = dir.src + tplFolder + tplFiles;

gulp.task('include', function() {
  return  gulp.src(srcDir)
    .pipe(include())
    .pipe(rename({
      extname: ""
     }))
    .pipe(rename({
      extname: ".html"
     }))
    .pipe(gulp.dest(dir.dest))
    .on('error',utils.error);
});


// TODO: More libs...
// TODO: https://www.npmjs.org/package/gulp-processhtml/
// TODO: https://www.npmjs.org/package/gulp-preprocess/
// https://www.npmjs.org/package/gulp-include
