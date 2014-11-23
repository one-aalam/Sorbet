var gulp  = require('gulp'),
	gutil = require('gulp-util'),
	config = require('../config'),
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

gulp.task('watch', ['styles', 'scripts', 'images'], function(){
	
	gutil.log(gutil.colors.cyan("Observing for changes..."));
	
	// Watch .html files
    gulp.watch(config.src.html,['html']).on('change', function(evt) {
		changeEvent(evt);
	});

	// Watch .scss files
	gulp.watch(config.src.sass, ['styles']).on('change', function(evt) {
		changeEvent(evt);
	});
	 // Watch .js files
	gulp.watch(config.src.coffee, ['scripts']).on('change', function(evt) {
		changeEvent(evt);
	});
	// Watch image files
	gulp.watch(config.paths.images.src, ['images']).on('change', function(evt) {
		changeEvent(evt);
	});
});
