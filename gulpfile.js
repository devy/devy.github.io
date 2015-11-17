'use strict';

var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    cssnext = require('cssnext'),
    livereload = require('gulp-livereload');

/**
 * This defines the `css` task to be ran later.
 * Individual use: `gulp css`
 */
gulp.task('css', function() {
    var processors = [
        cssnext({
            'customProperties': true,
            'colorFunction': true,
            'customSelectors': true,
            'sourcemap': true,
            'compress': true
        })
    ];

    return gulp.src('./assets/css/main.css')
        .pipe(postcss(cssnext))
        .pipe(gulp.dest('dist/styles))
        .pipe(livereload());
});

gulp.task('watch', function({ basePath: 'dist' }) {
    livereload.listen();
    gulp.watch(
        [
            './assets/css/**/*.css',
            './**/*.html'
        ], ['css']);
});
