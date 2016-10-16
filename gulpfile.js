var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require('webpack');
var source = require("vinyl-source-stream");
var path = require('path');
//var named = require('vinyl-named');
var config = require("./webpack.config");

gulp.task('default', ['webpack']);

var baseDir = path.resolve(process.cwd());

gulp.task('copy',['webpack'],function(){
	gutil.log("[webpack]",'copying bundles to target......');
	return gulp.src('src/js/components/*.js')
      .pipe(gulp.dest('dist/'));
});

gulp.task('dev', ['copy'], function() {
     var watcher = gulp.watch('./src/**/*.*', ['copy']);
     watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
     });
});

gulp.task("webpack", function(callback) {
    // run webpack
    webpack(config, function(err, stats) {

        if(err) throw new gutil.PluginError("webpack", err);
            gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

