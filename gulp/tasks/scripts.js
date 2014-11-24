var gulp  = require('gulp'),
	gutil = require('gulp-util'),

	rename = require('gulp-rename'),
	coffee = require('gulp-coffee'),
	coffeelint = require('gulp-coffeelint'),
	jshint = require('jshint'),
	lintThreshold = require('gulp-coffeelint-threshold'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	size = require('gulp-size'),
	args = require('yargs').argv,
	gulpif = require('gulp-if'),
	notify = require('gulp-notify'),
	plumber = require('gulp-plumber'),

	config = require('../config');

var isProduction = args.type === 'production' ;

var swallowError = function(err) {
  gutil.log(err.toString());
  this.emit('end');
};

var lintThresholdHandler = function(numberOfWarnings, numberOfErrors) {
  var msg;
  gutil.beep();
  msg = 'CoffeeLint failure; see above. Warning count: ';
  msg += numberOfWarnings;
  msg += '. Error count: ' + numberOfErrors + '.';
  gutil.log(msg);
};

gulp.task('scripts-coffee', false, function(){
	return gulp.src(config.src.coffee)
				   .pipe(plumber())
		   		   .pipe(coffeelint())
		   		   .pipe(coffeelint.reporter())
		   		   .pipe(lintThreshold(10, 0, lintThresholdHandler))
		   		   .pipe(coffee({
		   		   		bare: true
		   		    }))
		   		   .pipe(gulp.dest(config.base.temp + '/scripts-oneOone'))
				   .pipe(concat('app-coffee.js'))
				   .pipe(size())
				   .pipe(gulp.dest(config.base.temp))
				   .on('error', swallowError);
});

// Task: Scripts
gulp.task('scripts-js', false,  function(){
		return gulp.src(config.src.scripts) //, config.src.scripts
		   		   .pipe(jshint())
		   		   .pipe(jshint.reporter())
				   .pipe(concat('app.js'))
				   .pipe(size())
				   .pipe(gulp.dest(config.base.temp))
				   .on('error', swallowError);
		/*
		gulp.src(vendorFiles.scripts.concat(appFiles.scripts))
		.pipe(plugins.concat('app.js'))*/
});

gulp.task('scripts', 'Do that script thingy', ['scripts-coffee', 'scripts-js'], function(){ // delete temp files
  return gulp.src([
    		config.base.temp + '/app.js',
    		config.base.temp + '/app-coffee.js'])
    .pipe(concat('app.js'))
    .pipe(gulpif(isProduction, uglify()))
    .pipe(size())
    .pipe(gulpif(isProduction, rename({suffix: '.min'})))
    .pipe(gulp.dest(config.paths.scripts.dest))
    .pipe(gulp.dest(config.paths.scripts.dest))
    .pipe(notify({ message: 'Scripts task complete' }));

  //del(['dist/scripts/application-js.js', 'dist/scripts/application-coffee.js']);

  return re;
});
