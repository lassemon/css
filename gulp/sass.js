var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

gulp.task('sass', function() {
    return gulp.src('./styles/index.scss')
	.pipe(sass({
		outputStyle: 'nested',
		includePaths: ['.'],
	}).on('error', sass.logError))
	.pipe(autoprefixer('last 2 version'))
    .pipe(rename('styles.css'))
	.pipe(gulp.dest('./'))
});
