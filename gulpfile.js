var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var htmlMin = require('gulp-htmlmin');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
gulp.task('minifyCss', function () {
    gulp.src('./css/style.css')
    .pipe(concat('./style.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('./css/'))
})
gulp.task('uglify', function(){
    gulp.src('./js/list.js')
    .pipe(concat('./list.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js/'))
})
var opt = {
    removeComment:true,
    minifyCss:true,
    minifyJs:true,
}
gulp.task('htmlMin', function () {
    gulp.src('./index.html')
    .pipe(concat('./ind.html'))
    .pipe(htmlMin(opt))
    .pipe(gulp.dest('./ind/'))
})
gulp.task('default', function(){
    gulp.start('minifyCss','uglify')
})