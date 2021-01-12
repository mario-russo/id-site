var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('build-img', function(){
    gulp.src('img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('img'));

});



