var gulp  = require('gulp'),
	clean = require('gulp-clean'),
	dir = require('../config').base;
	
	// Task: Clean
	gulp.task('flush', function(){
		return gulp.src(dir.dest,{read: false})
		           .pipe(clean());
	});
	gulp.task('flush:cwd', function(){
		return gulp.src(process.cwd() + '/**/*',{read: false})
		           .pipe(clean({force: true}));
	});
	gulp.task('flush:temp', function(){
		return gulp.src(dir.temp,{read: false})
		           .pipe(clean({force:true}));
	});
