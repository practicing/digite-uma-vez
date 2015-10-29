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
    gulp.watch('*.html').on('change', browserSync.reload);
});

function onError(error) {
    console.log('# plumber #');
    console.log(error);
}


// Sass
gulp.task('css:compress', function () {
    return gulp.src(paths.css.input)
        .pipe(plugins.plumber({errorHandler: onError}))
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
	return gulp.src([paths.css.input])
    	// .pipe(plugins.plumber({errorHandler: onError}))
    	.pipe(plugins.scssLint({
    		endless: true,
    		sync: true
    	}))
    	.pipe(plugins.scssLint.failReporter());
});

// JS Uglify
gulp.task('js:compress', function() {
    return gulp.src(paths.js.input)
        .pipe(plugins.plumber({errorHandler: onError}))
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('digite-uma-vez.js'))
        .pipe(plugins.rename({
            suffix: '.min'
        }))
        .pipe(plugins.uglify({
          // mangle: false,
          // compress: false
        }))
        .pipe(plugins.sourcemaps.write('./'))
        .pipe(gulp.dest(paths.js.output));
});


// JS Eslint
gulp.task('js:lint', function () {
    return gulp.src([paths.js.input])
        // .pipe(plugins.plumber({errorHandler: onError}))
        .pipe(plugins.eslint())
        .pipe(plugins.eslint.format())
        .pipe(plugins.eslint.failAfterError());
});

gulp.task('js:watchLint', ['js:lint'], function () {
    gulp.watch([paths.js.input], ['js:lint']);
});


gulp.task('css:watchLint', ['css:lint'], function () {
    gulp.watch([paths.css.input], ['css:lint']);
});


// Build the code

// Browser Sync helper tasks
gulp.task('js:bsWatch', ['js:lint', 'js:compress'], browserSync.reload);
gulp.task('css:bsWatch', ['css:lint', 'css:compress'], browserSync.stream);

// Main tasks
gulp.task('server', ['browser-sync']);
gulp.task('default', ['server']);

// Tasks to check the code via automated tools
gulp.task('pre-commit', ['css:lint', 'js:lint']);
gulp.task('travis-ci', ['css:lint', 'js:lint']);
