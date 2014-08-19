var  gulp           = require('gulp'),
     less           = require('gulp-less'),
     cssmin         = require('gulp-minify-css'),
     notify         = require('gulp-notify'),
     path           = require('path'),
     uglify         = require('gulp-uglify'),
     concat         = require('gulp-concat'),
     rename         = require('gulp-rename'),
     livereload     = require('gulp-livereload'),
     header         = require('gulp-header');   
     pkg            = require('./package.json');


var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @author <%= pkg.author %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

gulp.task('less', function() {
     return gulp.src('src/subdomainer.less')
          .pipe(less())
          .pipe(gulp.dest('dist'))
          .pipe(notify({ message: 'Less - Done!'}));
});

gulp.task('build', function() {
     return gulp.src('src/subdomainer.js')
          .pipe(rename('subdomainer.min.js'))
          .pipe(uglify())
          .pipe(header(banner, { pkg : pkg } ))
          .pipe(gulp.dest('dist'))
          .pipe(notify({ message: 'Build - Done!' }))
});

gulp.task('watch', function() {
     gulp.watch('src/subdomainer.less', ['less']);
     gulp.watch('src/subdomainer.js', ['build']);
     var server = livereload();
     gulp.watch(['src/*.css', 'src/*.js', 'example/*.html']).on('change', function(file) {
          server.changed('example/index.html');
     });
});

