var gulp = require('gulp'),
    notify = require('gulp-notify');

gulp.task('build', ['flush', 'styles', 'scripts', 'images', 'html', 'copy'], function() {
    notify({
        message: "Built successfully!"
    });
});
