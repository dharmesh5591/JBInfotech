const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-Sync').create();


//Compile Scss file to Css 
function sasscomplie(){
    return gulp.src('./sass/*.scss')             
    .pipe(sass().on('error', sass.logError))                    
    .pipe(gulp.dest('./css'))            
    .pipe(browserSync.stream());      
}

//Convert normal css to minify css
function minify(){
  return gulp.src('./css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css'));
}


function watch(){
    browserSync.init({
      server: {
          baseDir: './'
      }      
    });
    gulp.watch('./sass/*.scss', sasscomplie)
    gulp.watch('./css/*.css', minify)
    gulp.watch('./*.html').on('change', browserSync.reload)
   // gulp.watch('./js/*.js').on('change', browserSync.reload)
}


exports.watch = watch;

