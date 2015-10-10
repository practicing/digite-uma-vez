var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var plugins = require('gulp-load-plugins')();

var paths = {
    css: {
    	input: './source/sass/*.scss',
    	output: './css'
    },
    js: {
        input: './source/js/*.js',
        output: './js'
    }
}

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(paths.css.input, ['css:bsWatch']);
    gulp.watch(paths.js.input, ['js:bsWatch']);
    //gulp.watch("source/html/*.html").on('change', browserSync.reload);
});


// Sass
gulp.task('css:compress', function () {
    return gulp.src(paths.css.input)
  	.pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({
    		outputStyle: 'compressed'
    	}).on('error', plugins.sass.logError)
    )
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(paths.css.output))
    .pipe(browserSync.stream());
});

// Scss Lint
gulp.task('css:lint', function() {
	return gulp.src(paths.css.input)
	//.pipe( plugins.plumber({errorHandler: onError}) )
	.pipe(plugins.scssLint({
		endless: true,
		sync: true
	}))
	.pipe(plugins.scssLint.failReporter());
});

// JS Uglify
gulp.task('js:compress', function() {
    gulp.src(paths.js.input)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.concat('digite-uma-vez.js'))
    .pipe(plugins.rename({
        suffix: '.min'
    }))
    .pipe(plugins.uglify())
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(paths.js.output));
});



// Build the code
gulp.task('js:bsWatch', ['js:compress'], browserSync.reload);
gulp.task('css:bsWatch', ['css:lint', 'css:compress'], browserSync.stream);
// gulp.task('js:compress', ['js-compress']);
gulp.task('server', ['browser-sync']);
gulp.task('build', ['styleLint']);