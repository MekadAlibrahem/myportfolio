var gulp  = require('gulp');
var concat = require('gulp-concat'); 
var autoPrefixer = require('gulp-autoprefixer');
var mapSources = require('gulp-sourcemaps');
var sass = require('gulp-sass')(require('sass')) ;


gulp.task('test' , async function(){
    console.log("test sucssesful ") ;
});

gulp.task('lib-sass' , async function(){
   return gulp.src('project/sass/components/main.sass')
    .pipe(mapSources.init())
    .pipe(sass())
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