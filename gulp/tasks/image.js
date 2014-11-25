var gulp  = require('gulp'),
	clean = require('gulp-clean'),
	imagemin = require('gulp-imagemin'),
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
	*/

/*
	Sprite Generator
*/
/*
gulp.task('sprite', function () {
	var spriteData = gulp.src(config.paths.sprite.src).pipe(plugins.spritesmith({
		imgName: config.settings.sprite.imgName,
		cssName: config.settings.sprite.cssName,
		imgPath: config.settings.sprite.imgPath,
		cssOpts: {
			functions: false
		},
		cssVarMap: function (sprite) {
			sprite.name = 'sprite-' + sprite.name;
		}
	}));
	spriteData.img.pipe(gulp.dest(config.paths.images.dest));
	spriteData.css.pipe(gulp.dest(config.paths.styles.src));
});*/