var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('pug', function(done) {
  return gulp.src('views/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./www/app/'))
  .on('end', done);
});

gulp.task('default', ['pug']);

gulp.task('watch', function() {
  gulp.watch('.views/*.pug', ['pug']);
})
