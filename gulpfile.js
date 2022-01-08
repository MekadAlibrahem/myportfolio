var gulp  = require('gulp');
var concat = require('gulp-concat'); 
var autoPrefixer = require('gulp-autoprefixer');
var mapSources = require('gulp-sourcemaps');


gulp.task('test' , async function(){
    console.log("test sucssesful ") ;
});

gulp.task('lib-css' , async function(){
   return gulp.src('project/css/components/main.css')
    .pipe(mapSources.init())
    .pipe(autoPrefixer())
    .pipe(concat('M-all.css'))
    .pipe(mapSources.write('.'))
    .pipe(gulp.dest("dest/lib/css/"))
    
});
gulp.task('lib-js' , async function(){
    return gulp.src('project/js/components/*.js')
    .pipe(mapSources.init())
    .pipe(concat('M-js.js'))
    .pipe(mapSources.write('.'))
    .pipe(gulp.dest("dest/lib/js/"))
 });