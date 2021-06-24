'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserify = require('browserify');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const babel = require('gulp-babel');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');
// const babel = require("@babel/core");
// const babel = require('babelify');

//Styles Task
gulp.task('styles', () => {
    return gulp.src('./dev/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./public/styles'))
        // .pipe(browserSync.stream())
        .pipe(reload({stream: true}));

});

//JS Task
gulp.task('js', () => {
	return gulp.src('./dev/scripts/main.js')
        .on('error',notify.onError({
            message: "Error: <%= error.message %>",
            title: 'Error in JS 💀'
        }))
        //Merge files into one
        .pipe(concat('main.js'))
        //JS minification
        .pipe(uglify())
		.pipe(gulp.dest('./public/scripts'))
        // .pipe(browserSync.stream())
		.pipe(reload({stream: true}));

});

//BrowserSync Task
gulp.task('bs', () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./dev/styles/**/*.scss', gulp.series('styles'));
    gulp.watch('./dev/scripts/main.js', gulp.series('js'));
    gulp.watch('*.html').on('change', browserSync.reload);
});

//Watch Task
gulp.task('default', gulp.series('js','bs', 'styles'), () => {
    gulp.watch('./dev/scripts/*.js', gulp.series('js'));
    gulp.watch('./dev/styles/**/*.scss', gulp.series('styles'));
    gulp.watch('./public/styles/style.css',reload);
});
