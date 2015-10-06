var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var scssLint = require('gulp-scss-lint');

var plugins = require('gulp-load-plugins')();

var paths = {
    css: {
    	inp: './source/sass/*.scss',
    	out: './css'
    }
}

// Static server
gulp.task('default', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(paths.css.inp, ['styleLint', 'style']);
    //gulp.watch("source/html/*.html").on('change', browserSync.reload);
});


// Sass
gulp.task('style', function () {
    return gulp.src(paths.css.inp)
  	.pipe(sourcemaps.init())
    .pipe(sass({
    		outputStyle: 'compressed'
    	}).on('error', sass.logError)
    )
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.css.out))
    .pipe(browserSync.stream());
});


gulp.task('styleLint', function() {
	return gulp.src(paths.css.inp)
	//.pipe( plugins.plumber({errorHandler: onError}) )
	.pipe(plugins.scssLint({
		endless: true,
		sync: true
	}))
	.pipe(plugins.scssLint.failReporter('E'));
});


// Build the code
gulp.task('build', ['style']);