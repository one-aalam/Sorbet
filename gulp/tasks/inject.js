var gulp = require('gulp'),
	inject = require('gulp-inject'),
	template = require('gulp-template'),
	data = require('gulp-data'), 
	config = require('../config') ;



gulp.task('inject', function(){
	var target =  gulp.src(config.base.dest + '/**/*.html'),
	    src = gulp.src(config.base.dest + '/**/*.{js,css}', {read:false});

	return target.pipe(inject(src)).pipe(gulp.dest(config.base.dest));
			   
});

// TODO: Support different datafiles for different files
gulp.task('inject:data', function(){
	return gulp.src(config.base.dest + '/**/*.html')
        .pipe(data(function () {
            return {name: 'Sorbet'};
        }))
        .pipe(template())
        .pipe(gulp.dest(config.base.dest));
});