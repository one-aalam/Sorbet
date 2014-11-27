var gulp = require('gulp'),
    bower = require('bower');

// Install dependencies defined in bower.json and run
// a callback after which is not possible through plain
// `bower install`


gulp.task('bower', function(cb){
  bower.commands.install([], {save: true}, {})
    .on('end', function(installed){
      cb(); // notify gulp that this task is finished
    });
});
