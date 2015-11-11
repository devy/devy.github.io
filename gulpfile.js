'use strict';

var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    cssnext = require('cssnext'),
    livereload = require('gulp-livereload');

/**
 * This defines the `css` task to be ran later.
 * Individual use: `gulp css`
 */
gulp.task("css", function() {
    var processors = [
        cssnext({
            'customProperties': true,
            'colorFunction': true,
            'customSelectors': true,
            'sourcemap': true,
            'compress': true
        })
    ];

    return gulp.src('./htdocs/assets/css/main.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./htdocs'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(
        [
            './htdocs/assets/css/**/*.css',
            './htdocs/**/*.html'
        ], ['css']);
});
