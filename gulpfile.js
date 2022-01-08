var gulp  = require('gulp');
var concat = require('gulp-concat'); 
const autoPrefixer = require('gulp-autoprefixer');


gulp.task('test' , async function(){
    console.log("test sucssesful ") ;
});

gulp.task('lib-css' , async function(){
   return gulp.src('project/css/components/main.sass')
    .pipe(concat('M-all.css'))
    .pipe(autoPrefixer())
    .pipe(gulp.dest("dest/lib/css/"))
});
gulp.task('lib-js' , async function(){
    return gulp.src('project/js/components/*.js')
     .pipe(concat('M-js.js'))
     .pipe(gulp.dest("dest/lib/js/"))
 });