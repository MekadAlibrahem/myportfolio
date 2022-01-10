var gulp  = require('gulp');
var concat = require('gulp-concat');
var autoPrefixer = require('gulp-autoprefixer');
var mapSources = require('gulp-sourcemaps');
var sass = require('gulp-sass')(require('sass')) ;
var pug  = require('gulp-pug');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');



gulp.task('test' , async function(){
    console.log("test sucssesful ") ;
});

gulp.task('css' , async function(){
   return gulp.src('project/sass/components/main.sass')
    .pipe(mapSources.init())
    .pipe(sass())
    .pipe(autoPrefixer())
    .pipe(concat('M-all.css'))
    .pipe(mapSources.write('.'))
    .pipe(gulp.dest("dest/lib/css/"))
    .pipe(notify("sass/component complete"))
    .pipe(livereload());

});
gulp.task('js' , async function(){
    return gulp.src('project/js/components/*.js')
    .pipe(mapSources.init())
    .pipe(concat('M-js.js'))
    .pipe(mapSources.write('.'))
    .pipe(gulp.dest("dest/lib/js/"))
    .pipe(notify("js/component complete"))
    .pipe(livereload());
 });

 gulp.task('html' , async function(){
     return gulp.src('project/html/components/*.pug')
     .pipe(pug({pretty : true}))
     .pipe(gulp.dest('dest/'))
     .pipe(notify("index.pug complete"))
     .pipe(livereload());
 });
 gulp.task('watch' , async function(){
    require('./server.js');
    livereload.listen();
    gulp.watch('project/sass/components/main.sass' , gulp.series('css'));
    gulp.watch('project/js/components/*.js' , gulp.series('js'));
    gulp.watch('project/html/components/*.pug'  ,gulp.series('html'));

});
