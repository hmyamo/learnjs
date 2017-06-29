var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('watch', function (done) {
  browserSync.reload();
  done();
});

gulp.task('default', function () {

  browserSync.init({
    server: {
      baseDir: "./public"
    },
    open: false
  });

  gulp.watch(['public/*.js', 'public/*.html'], ['watch']);

});
