// ===================================================
// Setup
// ===================================================

var gulp            = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    $               = gulpLoadPlugins(),
    assemble        = require('assemble'),
    ext             = require('gulp-extname'),
    minifyHtml      = require('gulp-minify-html'),
    minifyCSS       = require('gulp-minify-css'),
    svgstore        = require('gulp-svgstore'),
    svgmin          = require('gulp-svgmin'),
    cheerio         = require('gulp-cheerio'),
    del             = require('del');

// http://krasimirtsonev.com/blog/article/Nodejs-managing-child-processes-starting-stopping-exec-spawn
$.exec   = require('child_process').exec;
$.fs     = require('fs');


// ===================================================
// Config
// ===================================================

var paths_dir = {
  site: 'site',
  templates : 'templates',
  data: 'data',
  dist: 'dist',
  sitejs: 'js',
  sitecss: 'css',
  sitesass: 'src'
};

var paths = {
  site: paths_dir.site,
  data: paths_dir.data,
  templates: paths_dir.site + '/' + paths_dir.templates,
  dist: paths_dir.dist,
  sitejs: paths_dir.site + '/' + paths_dir.sitejs,
  sitecss: paths_dir.site + '/' + paths_dir.sitecss,
  sitesass: paths_dir.site + '/' + paths_dir.sitecss + '/' + paths_dir.sitesass
};


// ===================================================
// Server
// ===================================================

gulp.task('serve', ['assemble'], function() {
  $.connect.server({
    root: [paths.site],
    port: 5000,
    livereload: true,
    middleware: function(connect) {
      return [
        connect().use(connect.query())
      ];
    }
  });

  $.exec('open http://localhost:5000');
});


// ===================================================
// Stylesheets
// ===================================================

gulp.task('sass', function() {
  var stream = gulp.src(paths.sitesass + '/**/*.scss')
    .pipe($.sass())
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(paths.sitecss))
    .pipe($.connect.reload());

  return stream;
});


// ===================================================
// Assemble
// ===================================================

assemble.layouts(paths.templates + '/layouts/*.hbs');
assemble.partials(paths.templates + '/includes/**/*.hbs');
assemble.pages(paths.templates + '/content/*.hbs');
assemble.option('layout', 'default');
assemble.data(paths.data + '/**/*.{json,yaml}');

gulp.task('assemble', function() {
  var stream = assemble.src(paths.templates + '/pages/*.hbs')
    .pipe(ext())
    .pipe(assemble.dest(paths.site))
    .pipe($.connect.reload());

  return stream;
});


// ===================================================
// SVG Icons
// ===================================================

gulp.task('svgstore', function () {
    return gulp
        .src(paths.site + '/img/icons/linear/*.svg')
        .pipe(svgmin({
          plugins: [{
            removeDoctype: true
          }]
        }))
        .pipe(svgstore())
        .pipe(cheerio(function($) {
            $('svg').attr('style', 'display:none');
        }))
        .pipe(gulp.dest(paths.templates + '/includes/atoms/svg-sprite.svg'));
});


// ===================================================
// Production Builds
// ===================================================

gulp.task('cssmin', ['sass'], function() {
  var stream = gulp.src(paths.sitecss + '/*.css')
    .pipe(minifyCSS({ keepBreaks:true }))
    .pipe(gulp.dest(paths.sitecss));

  return stream;
});


gulp.task('usemin', ['assemble', 'cssmin'], function() {
  var stream = gulp.src([
        paths.site + '/index.html',
        paths.site + '/docs.html'
      ])
      .pipe($.usemin({
        css: [$.rev()],
        html: [$.minifyHtml({ empty: true })],
        js: [$.uglify(), $.rev()]
      }))
      .pipe(gulp.dest(paths.site));

  return stream;
});


// ===================================================
// Ground Zero
// ===================================================

gulp.task('clean', function(cb) {
  del([
    paths.site + '/css/*.css',
    paths.site + '/*.html',
    paths.site + '/js/build'
  ], cb);
});


// ===================================================
// File Monitoring
// ===================================================

gulp.task('watch', function() {
  gulp.watch([
    paths.dist + '/**/*.scss',
    paths.sitesass + '/**/*.scss'
  ], ['sass']);

  gulp.watch([
    paths.templates + '/**/**/*.hbs',
    paths.site + '/index.html'
  ], ['assemble']);
});


// ===================================================
// Gulp Instructions
// ===================================================

gulp.task('build', ['usemin', 'serve']);
gulp.task('default', ['sass', 'assemble', 'serve', 'watch']);