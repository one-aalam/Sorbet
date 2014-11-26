var gulp = require('gulp'),
	inject = require('gulp-inject'),
	config = require('../config') ;

gulp.task('inject', function(){
	var target =  gulp.src(config.base.dest + '/**/*.html'),
	    src = gulp.src(config.base.dest + '/**/*.{js,css}', {read:false});

	return target.pipe(inject(src)).pipe(gulp.dest(config.base.dest));
			   
});