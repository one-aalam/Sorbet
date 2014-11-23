// load gulp
var gulp = require('gulp'),
	gutl = require('gulp-util'),
	ghdown = require('github-download'),
	rimraf = require('rimraf'),
	run_in_sequence = require('run-sequence'),
	clean = require('gulp-clean'),
	chalk = require('chalk'),
	copy = require('ncp').ncp,
	// Tasks
	tasks = require('./gulp'),
	// Server
	config = require('./gulp/config'),
	//
	path = require('path'),
	  lr = require('tiny-lr'),
	  xp = require('express'),
	c_lr = require('connect-livereload')

 wiredep = require('wiredep').stream;
/*


if(gutil.env.dev === true) {
	sassStyle = 'expanded';
	sourceMap = true;
	isProduction = false;
}*/

var PORT_EXPRESS = 4000,
	PORT_LR      = 35729,
	PATH_EXPRESS = __dirname,

	PATH_BUILD = 'build',
	PATH_TEST  = 'test',

	PATH_SRC   = 'client';


// Kick to config.json
var pathSrc = {
			scripts: ['assets/js/**/*.coffee', '!client/external/**/*.coffee'],

			styles_sass:['assets/sass/**/*.scss', 'assets/css/**/*.scss'],
			styles_less:['assets/less/**/*.less', 'assets/css/**/*.less'],
			styles_styl:['assets/styl/**/*.styl', 'assets/css/**/*.styl'],

  			images: 'client/img/**/*',

			styles_dep: ['client/components/**/*.css'],
			script_dep: ['client/components/**/*.js']
};

// Basic wrapper to encapsulate server setup
// and change notification utility
var Server = (function(){

	var app_xp = xp(),
		app_lr = lr();

	function Express(){
			app_xp.use(xp.query());
			app_xp.use(c_lr());
			app_xp.use(xp.static(PATH_EXPRESS));
			//app_xp.set('view engine', 'jade');
			//app_xp.set('views', __dirname);
			app_xp.get('/', function(req, res){
				res.sendfile('index.html');
			});
		    app_xp.listen(PORT_EXPRESS, function(){
				gutl.log('Express: => ' + PORT_EXPRESS);
			});
		    return app_xp;
	}

	function TinyLiveReload(){
		 app_lr.listen(PORT_LR);
		 gutl.log('Tiny LR: => ' + PORT_LR);
		 return app_lr;
	}


	return {
		// Start Express and LiveReload server
		// @TODO Make more concise
		start: function(){
			Express();
			TinyLiveReload();
		},
		// Pass path information to LiveReload
		// server in order to refresh those files
		notify: function(event){
			var file = path.relative(PATH_EXPRESS, event.path);
				app_lr.changed({
					body:{
						files: [file]
					}
				});
		}
	};

})();

var tmpFolder = '.temp';
	// Task: Server start
    gulp.task('serve', function(){
				Server.start();
		});
		function finalize(){
			gulp.start('serve');
		}

	

	// Typical process of downloading something
	gulp.task('download',['flush:temp'], function(){

		// Check repo pattern before downloading
		console.log('Downloading boilerplate to' +   tmpFolder);
		ghdown({
			user:'one-aalam',
			repo:'lleyr-things',
			ref:'master'
		}, // Prepare config separately
		tmpFolder
			  ).on('dir', function(dir){
				console.log(dir);
			}).on('file', function(file){
				console.log(file);
			}).on('error', function(err){
				console.log(err);
			}).on('end', function(){
				console.log(chalk.green('✔ Initialization complete!'));

				copy(tmpFolder, process.cwd(), function(err){
					if(err){
						console.log(err);
					}else{
						run_in_sequence('flush:temp', function(){
							finalize();
						});
					}
				});
			});
	});



	//@TODO
	// Use gulp-changed, gulp-bower-files/ wiredep
