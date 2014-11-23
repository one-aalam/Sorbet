var gulp = require('gulp'),
	config = require('../config');

	gulp.task('html', function(){
		return gulp.src(config.src.html)
				   .pipe(gulp.dest(config.base.dest));
	});