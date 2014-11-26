var gulp = require('gulp'),
    zip = require('gulp-zip'),
    path = require('path'),

    dir = require('../config').base ;

function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return "_" + year + "_" + month + "_" + day + "-" + hour + "_" + min + "_" + sec;

}


gulp.task('archive', function () {  console.log(getDateTime());
  return gulp.src(['**/*'], {cwd: process.cwd() + "/" + dir.dest})
  .pipe(zip(path.basename(process.cwd()) + getDateTime() + '.zip'))
  .pipe(gulp.dest('archives'));
});
