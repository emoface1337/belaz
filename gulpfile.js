"use strict"

const autoprefixer = require("gulp-autoprefixer")
const gulp = require("gulp")
const rename = require("gulp-rename")
const sass = require('gulp-sass')
// const uglify = require('gulp-uglify')
const browserSync = require('browser-sync')
const cssnano = require('cssnano')
const postcss = require('gulp-postcss')

const paths = {
    html: ['index.html'],
    sass: ['./scss/**/*.sass', './scss/**/*.scss'],
    js: ['./js/**/*.js']
}

const css = () => {
    return gulp
        .src(paths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest("./css/"))
        .pipe(rename({suffix: ".min"}))
        .pipe(postcss([cssnano()]))
        .pipe(gulp.dest("./css/"))
        .pipe(browserSync.stream())
}

const scripts = () => {
    return gulp
        .src(paths.js)
        // .pipe(uglify())
        .pipe(browserSync.stream())
}

const watch = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 8081,
        open: true,
        notify: false
    })
    gulp.watch(paths.sass, css)
    gulp.watch(paths.js, scripts)
    gulp.watch("./*.html").on('change', browserSync.reload)
}

gulp.task('css', css)
gulp.task('scripts', scripts)
gulp.task('watch', watch)
gulp.task('build', gulp.series(gulp.parallel(css, scripts)))

gulp.task('default', gulp.series('build', 'watch'))