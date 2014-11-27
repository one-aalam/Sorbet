var gulp = require('gulp'),
    include = require('gulp-file-include'),
    rename = require('gulp-rename'),
    filter = require('gulp-filter'),
    dir = require('../config').base,

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
    .pipe(gulp.dest(dir.dest));
});
