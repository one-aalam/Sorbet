var gulp = require('gulp'),
    zip = require('gulp-zip'),

    dir = require('../config').base ;


gulp.task('archive', function () {
  return gulp.src(['**/*'], {cwd: __dirname + "/" + dir.dest})
  .pipe(zip(__dirname + '.zip'))
  .pipe(gulp.dest('archives'));
});
