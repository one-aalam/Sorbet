var gulp = require('gulp'),
	gutl = require('gulp-util'),
	ghdown = require('github-download'),
	rimraf = require('rimraf'),
	run_in_sequence = require('run-sequence'),
	clean = require('gulp-clean'),
	copy = require('ncp').ncp,
	chalk = require('chalk'), 
	// Server
	config = require('../config'),
	//
	path = require('path');


	// Typical process of downloading something
	gulp.task('init',['flush:temp'], function(){
		// Check repo pattern before downloading
		ghdown({
			user:'one-aalam',
			repo:'decor',
			ref:'master'
		}, // Prepare config separately
		config.base.temp
			  ).on('dir', function(dir){
				console.log(dir);
			}).on('file', function(file){
				console.log(file);
			}).on('error', function(err){
				console.log(err);
			}).on('end', function(){
				console.log(chalk.green('✔ Download complete!'));

				copy(config.base.temp + '/src', config.base.src, function(err){
					if(err){
						console.log(err);
					}else{
						run_in_sequence('flush:temp', function(){
							console.log(chalk.green('✔ Initialization complete!'));
						});
					}
				});
			});
	});