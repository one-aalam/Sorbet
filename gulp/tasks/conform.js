var gulp = require('gulp'),
	w3cjs = require('gulp-w3cjs'),
    dir = require('../config').base;

gulp.task('w3cjs', function () {
    gulp.src(dir.src + '/**/*.html')
        .pipe(w3cjs());
});