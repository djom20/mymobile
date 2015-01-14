/* Variables */
var gulp 				 = require('gulp'),
    jshint 				 = require('gulp-jshint'),
    uglify 				 = require('gulp-uglify'),
    rename 				 = require('gulp-rename'),
    concat 				 = require('gulp-concat'),
    notify 				 = require('gulp-notify'),
    livereload 		     = require('gulp-livereload'),
    del 				 = require('del'),
    connect              = require('gulp-connect'),
    jade        	     = require('gulp-jade'),
    less 				 = require('gulp-less'),
    historyApiFallback   = require('connect-history-api-fallback');

var paths = {
    scripts: ['herlper/*.js', 'herlper/*.json', 'partials/*.html', '*.html', 'css/*.css', 'js/*.js']
};

gulp.task('reload', function() {
    return gulp.src(paths.scripts)
	    .pipe(connect.reload());
});

/* Init GulpServer */
gulp.task('default', function() {
    gulp.start('reload', 'watch', 'webserver');
});

/* Cambio de archivos */
gulp.task('watch', function() {
   	gulp.watch(paths.scripts, ['reload']);
});

/* LocalServer */
gulp.task('webserver', function() {
   	connect.server({
		root: './',
		hostname: '0.0.0.0',
		port: 9000,
		livereload: true,
		middleware: function(connect, opt) {
			return [ historyApiFallback ];
		},
        open: {
            file: 'index.html',
            browser: 'Google Chrome'
        }
   	});
});