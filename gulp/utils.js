var filter = require('gulp-filter');

/**
 * Utility methods for gulp
 *
 */
/* Hackful way to supress gulp messages */
exports.supressLogs = function() {

    var cl = console.log;
    console.log = function() {
        var args = Array.prototype.slice.call(arguments);
        if (args.length) {
            if (/^\[.*gulp.*\]$/.test(args[0])) {
                return;
            }
        }
        return cl.apply(console, args);
    };
}


/**
 * Filter by extension
 *
 */

exports.filter = function(ext){
  return filter(function(file){
        return file.path.match(new RegExp('.' + ext + '$'));
  });
}

exports.error = function(err){
      gutil.log(err.toString());
      this.emit('end');
}
