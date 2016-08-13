var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve', ['sass'], function () {
  browserSync({
    port: 8080,
    server: {
      baseDir: ['./']
    }
  });

  gulp.watch('./index.html').on('change', reload);
  gulp.watch('./styles/*.scss', ['sass']).on('change', reload);
});
