var gulp  = require('gulp'),
	gutil = require('gulp-util'),
	
	rename = require('gulp-rename'),
	coffee = require('gulp-coffee'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	size = require('gulp-size'),
	
	config = require('../config');

var isProduction = true;
	
// Task: Scripts
gulp.task('scripts', function(){
		return gulp.src(config.src.coffee) //, config.src.scripts
		   		   .pipe(coffee())
				   .pipe(concat('app.js'))
				   .pipe(gulp.dest(config.paths.scripts.dest))
				   .pipe(isProduction ? uglify() : gutil.noop())
				   .pipe(size())
				   .pipe(rename('app.min.js'))
				   .pipe(gulp.dest(config.paths.scripts.dest))
				   .on('error', gutil.log);
		/*
		gulp.src(vendorFiles.scripts.concat(appFiles.scripts))
		.pipe(plugins.concat('app.js'))*/
});