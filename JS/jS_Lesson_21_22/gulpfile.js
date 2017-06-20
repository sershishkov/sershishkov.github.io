/**
 * Created by Shishkov on 15.06.2017.
 */
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    concatCss = require('gulp-concat-css'),
    prefixer = require('gulp-autoprefixer'),
    uglifycss = require('gulp-uglifycss');

///////////////////////////////////////////////////////////
gulp.task('js', function () {
    gulp.src('js/src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(sourcemaps.init()) //Инициализируем sourcemap
        .pipe(uglify()) //Сожмем наш js
        .pipe(concat("main.min.js"))//
        .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest('js/dist'));

});
gulp.task('css', function () {
    return gulp.src('css/src/*.css')
        .pipe(uglifycss({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(prefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concatCss("main.min.css"))
        .pipe(gulp.dest('css/dist'));
});

//////////////////////////////////////////////////////////
//     gulp.task('stream', function () {
//     // Endless stream mode
//     return watch('css/**/*.css', { ignoreInitial: false })
//         .pipe(gulp.dest('build'));
// });
//
// gulp.task('callback', function () {
//     // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
//     return watch('css/**/*.css', function () {
//         gulp.src('css/**/*.css')
//             .pipe(gulp.dest('build'));
//     });
// });
//////////////////////////////////////////////////////////////

gulp.task('default',['js','css']);
gulp.task('watch', function() {
    gulp.watch('css/src/*.css', ['css']);
    gulp.watch('js/src/*.js', ['js']);
});