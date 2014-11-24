var gulp = require('gulp'),
	config = require('../config');

	// To have layout and partials facility
	// under _includes

	gulp.task('html', function(){
		return gulp.src(config.src.html)
				   .pipe(gulp.dest(config.base.dest));
	});