var Elixir = require('laravel-elixir');
var gulp = require('gulp');
var htmlRename = require('gulp-html-rename');

var config = Elixir.config;

Elixir.extend('shorten', function(options, allowedExtensions) {
    var path = [config.publicPath + '/**/*', '!' + config.publicPath + '/**/*.map'];
    new Elixir.Task('shorten', function() {
        return gulp.src(path)
            .pipe(htmlRename(options, allowedExtensions))
            .pipe(gulp.dest(config.publicPath))
            .on('error', function(e) {
                new Elixir.Notification().error(e, 'HTML id and classes shorten failed!');
                this.emit('end');
            });
    })
    .watch(config.assetsPath);
});
