var gulp  = require('gulp'),
	gutil = require('gulp-util'),
	
	rename = require('gulp-rename'),
	coffee = require('gulp-coffee'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	size = require('gulp-size'),
	args = require('yargs').argv, 
	gulpif = require('gulpif'), 
	
	config = require('../config');

var isProduction = args.type === 'production' ;
	
// Task: Scripts
gulp.task('scripts', function(){
		return gulp.src(config.src.coffee) //, config.src.scripts
		   		   .pipe(coffee())
				   .pipe(concat('app.js'))
				   .pipe(gulpif(isProduction, uglify()))
				   .pipe(size())
				   .pipe(gulpif(isProduction, rename({suffix: '.min'})))
				   .pipe(gulp.dest(config.paths.scripts.dest))
				   .on('error', gutil.log);
		/*
		gulp.src(vendorFiles.scripts.concat(appFiles.scripts))
		.pipe(plugins.concat('app.js'))*/
});