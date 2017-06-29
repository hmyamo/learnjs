var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function () {

  browserSync.init({
    server: {
      baseDir: "./public"
    },
    open: false
  });

  gulp.watch(['public/app.js', 'public/index.html', 'public/tests/app_spec.js'], {interval: 200}, function () {
    browserSync.reload();
  });

});
