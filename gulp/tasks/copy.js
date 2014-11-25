var gulp = require('gulp'),
	notify = require('gulp-notify'),
	flatten = require('gulp-flatten'),
	config = require('../config');

	gulp.task('copy:font', function(){
		return gulp.src(config.src.fonts)
				   .pipe(flatten())
				   .pipe(gulp.dest(config.base.dest + '/fonts'));
	});
	gulp.task('copy:as-is', function(){
		return gulp.src(config.base.src + '/as-is/*.*')
				   .pipe(gulp.dest(config.base.dest));
	});

	gulp.task('copy',['copy:font'], function(){
			notify({message:"Copied index and other html pages inside as-is!"})
	});