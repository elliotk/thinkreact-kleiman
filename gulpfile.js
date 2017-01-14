var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var react = require('gulp-react')

gulp.task('default', function() {
  return browserify('./source/app.js')
  .transform(babelify, {
    "presets": ["react", "es2015"]
  })
  .bundle()
  .pipe(source('client.js'))
  .pipe(gulp.dest('./public/js/'));
});
