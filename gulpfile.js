var gulp = require('gulp');
var runSequence = require('run-sequence');



gulp.task('bower_js', function() {
 return;
});

gulp.task('bower_css', function() {
    gulp.src(['bower_components/animate.css/animate.css'])
        .pipe(gulp.dest('public/css/lib'));
    gulp.src('bower_components/font-awesome/css/*.min.css')
        .pipe(gulp.dest('public/font-awesome/css'));
    gulp.src('bower_components/font-awesome/fonts/*')
        .pipe(gulp.dest('public/font-awesome/fonts'));
});

gulp.task('bower', function() {
    runSequence('bower_js', 'bower_css');
});


gulp.task('default', function() {
    runSequence('bower');
});