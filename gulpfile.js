let gulp = require('gulp');
let less = require('gulp-less');
let path = require('path');
let cleanCSS = require('gulp-clean-css');

function compileCss() {
  return gulp.src('less/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
}

function minifyCss() {
    return gulp.src('css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist'));
}

function watchFiles() {
    gulp.watch('less/*.less', compileCss);
    gulp.watch('css/*.css', minifyCss);
}

exports.compileCss = compileCss;
exports.minifyCss = minifyCss;
exports.watchFiles = watchFiles;
exports.default = gulp.series(compileCss, minifyCss, watchFiles);
