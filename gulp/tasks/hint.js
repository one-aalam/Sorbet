var gulp  = require('gulp'),
	gutil = require('gulp-util'),
	/*jshint  = require('gulp-jshint'),*/
	
	config = require('../config');

gulp.task('lint', function() {
	    return gulp.src(config.src.scripts);
	    /*
	        .pipe(jshint())
	        .pipe(jshint.reporter('default'));*/
});