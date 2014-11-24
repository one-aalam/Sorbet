var gulp  = require('gulp'),
	gutil = require('gulp-util'),
	config = require('../config'),
	notify = require('gulp-notify'),
	changeEvent = function(evt) {
			gutil.log(
						'File',
						gutil.colors.cyan(evt.path.replace(new RegExp('/.*(?=/' + config.base.src + ')/'), '')),
						'was',
						gutil.colors.magenta(evt.type)
			);
	};

gulp.task('setWatching', function(){
	global.isWatching = true;
	gutil.log(gutil.colors.cyan("Starting the watch..."));
});

gulp.task('watch', ['styles', 'scripts', 'images', 'browser-sync'], function(){

	gutil.log(gutil.colors.cyan("Observing for changes..."));
	notify(notify({ message: 'Start of watch...' }))

	// Watch .html files
    gulp.watch(config.src.html,['html','bs-reload']).on('change', function(evt) {
		changeEvent(evt);
	});

	// Watch .scss files
	gulp.watch(config.src.sass, ['styles']).on('change', function(evt) {
		changeEvent(evt);
	});
	 // Watch .js files
	gulp.watch(config.src.coffee, ['scripts','bs-reload']).on('change', function(evt) {
		changeEvent(evt);
	});
	gulp.watch(config.src.scripts, ['scripts', 'bs-reload']).on('change', function(evt) {
		changeEvent(evt);
	});


	// Watch image files
	gulp.watch(config.paths.images.src, ['images']).on('change', function(evt) {
		changeEvent(evt);
	});
});
