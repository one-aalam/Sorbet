var gulp  = require('gulp'),
    browserSync = require('browser-sync'),
    config = require('../config');

// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});
