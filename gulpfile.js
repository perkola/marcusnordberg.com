var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

gulp.task('pug', function(done) {
  gulp.src('./views/**/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./public'))
  .on('end', done);
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({includePaths: 'node_modules/bulma'}).on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('default', ['pug', 'sass']);

gulp.task('watch', function() {
  gulp.watch(['./views/**/*.pug','./sass/**/*.scss'], ['pug','sass']);
})
