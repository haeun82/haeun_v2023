var gulp = require('gulp');
var sass = require('gulp-sass'); // module 선언
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");

gulp.task('sass', function() { // gulp $ 명령어
  gulp.src('**/**/scss/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: 1
		}).on('error', sass.logError))
		.pipe(sourcemaps.write('./'))
		.pipe(rename(function(file) {
			file.dirname = file.dirname.replace(/scss$/, "css");
		 }))
		.pipe(gulp.dest(''));
});


gulp.task('watch', function() {
  gulp.watch('**/**/scss/**/*.scss', ['sass']); // 변경 사항을 주시해야될 대상 경로
});
