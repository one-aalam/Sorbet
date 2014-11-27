var gulp  = require('gulp'),
	clean = require('gulp-clean'),
	imagemin = require('gulp-imagemin'),
	sprite = require('css-sprite').stream, 
	gulpif = require('gulp-if'),
	config = require('../config');

	gulp.task('images:min', function() {
	 	return gulp.src(config.src.images)
				.pipe(imagemin({optimizationLevel: 5, progressive: true, interlaced: true}))
				.pipe(gulp.dest(config.paths.images.dest));
	});

	gulp.task('images',['images:min'], function(){
		console.log('Optimizing images');
	});



/*
	Sprite Generator
*/

// generate sprite.png and _sprite.scss
gulp.task('sprites', function () {
  return gulp.src(config.paths.images.src_sprite)
    .pipe(sprite({
      name: 'sprite',
      style: '_sprite.scss',
      cssPath: config.paths.images.dest,
      processor: 'scss'
    }))
    .pipe(gulpif('*.png', gulp.dest(config.paths.images.dest), gulp.dest(config.paths.styles.src_sass + '/partials/gen')));
});

