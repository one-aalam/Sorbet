var gulp = require('gulp'),
    rsync = require('gulp-rsync'),

    dir = require('../config').base;

gulp.task('deploy', function() {
    gulp.src(dir.dest + '/**')
        .pipe(rsync({
            destination: '~/path/to/my/website/root/',
            root: dir.dest,
            hostname: 'mydomain.com',
            username: 'user',
            incremental: true,
            progress: true,
            relative: true,
            emptyDirectories: true,
            recursive: true,
            //clean: true,
            exclude: ['.DS_Store'],
            include: []
        }));
});
