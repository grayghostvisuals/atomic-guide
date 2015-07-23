// ===================================================
// Settin'
// ===================================================

var gulp            = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    $               = gulpLoadPlugins({
                        rename: {
                          'gulp-minify-css'  : 'mincss',
                          'gulp-minify-html' : 'minhtml',
                          'gulp-gh-pages'    : 'ghPages',
                          'gulp-foreach'     : 'foreach',
                          'gulp-mocha'       : 'mocha',
                          'gulp-if'          : 'if'
                        }
                      }),
    assemble        = require('assemble'),
    del             = require('del'),
    merge           = require('merge-stream'),
    basename        = require('path').basename,
    extname         = require('path').extname;

$.exec   = require('child_process').exec;
$.fs     = require('fs');


// ===================================================
// Configin'
// ===================================================

var env_flag = false;

var asset_dir = {
  site: 'site',
  templates : 'templates',
  data: 'data',
  dist: 'dist',
  js: 'js',
  css: 'css',
  sass: 'src'
};

var path = {
  site: asset_dir.site,
  data: asset_dir.data,
  templates: asset_dir.site + '/' + asset_dir.templates,
  dist: asset_dir.dist,
  js: asset_dir.site + '/' + asset_dir.js,
  css: asset_dir.site + '/' + asset_dir.css,
  sass: asset_dir.site + '/' + asset_dir.css + '/' + asset_dir.sass
};

var glob = {
  html: path.site + '/*.html',
  css: path.css + '/*.css',
  sass: path.sass + '/**/*.scss',
  js: path.js + '/src/**/*.js',
  jslibs : path.js + '/lib/**/*.js',
  layouts: path.templates + '/layouts/*.{md,hbs}',
  pages: path.templates + '/pages/**/*.{md,hbs}',
  includes: path.templates + '/includes/**/*.{md,hbs}',
  data: path.data + '/**/*.{json,yaml}',
  rootData: ['site.yaml', 'package.json']
};


// ===================================================
// Developin'
// ===================================================

gulp.task('serve', ['assemble'], function() {
  $.connect.server({
    root: [path.site],
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
// Previewin'
// ===================================================

gulp.task('preview', function() {
  $.connect.server({
    root: [path.dist],
    port: 5001
  });

  $.exec('open http://localhost:5001');
});


// ===================================================
// Testin'
// ===================================================

gulp.task('mocha', function () {
  return gulp.src('test/*.js', {read: false})
    .pipe($.mocha({ reporter: 'nyan' }));
});


// ===================================================
// Stylin'
// ===================================================

gulp.task('sass', function() {
  var stream = gulp.src(glob.sass)
    .pipe($.sass())
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(path.css))
    .pipe($.connect.reload());

  return stream;
});


// ===================================================
// Templatin'
// ===================================================

// Pull #3. Also see https://github.com/assemble/assemble/issues/715
// create a `categories` object to keep categories in (e.g. 'clients')
// categories: {
//  clients: {
//    "polyon": { ... }
//  }
// };
assemble.set('categories', {});

/**
 Populate categories with pages that specify the categories they belong to.
 When the onLoad middleware runs for a single file, it looks at the file's front-matter (file.data) to see if it contains a categories property. This property can be a string or an array of strings. If it exists, then the middleware updates the categories object for each category in the array. In the case of polyon.hbs, there is only 1 category called client, so the categories object becomes:

categories: {
 clients: {
   "polyon": { ... }
 }
};
 */

assemble.onLoad(/\.hbs/, function(file, next) {
  // if the file doesn't have a data object or
  // doesn't contain `categories` in it's
  // front-matter, move on.
  if (!file.data || !file.data.categories) {
    return next();
  }

  // use the default `renameKey` function to store
  // pages on the `categories` object
  var renameKey = assemble.option('renameKey');

  // get the categories object
  var categories = assemble.get('categories');

  // figure out which categories this file belongs to
  var cats = file.data.categories;
  cats = Array.isArray(cats) ? cats : [cats];

  // add this file's data (file object) to each of
  // it's catogories
  cats.forEach(function(cat) {
    categories[cat] = categories[cat] || [];
    categories[cat][renameKey(file.path)] = file;
  });

  // done
  next();
});


/**
 * Handlebars helper to iterate over an object of pages for a specific category
 *
 * ```
 * {{#category "clients"}}
 *   <li>{{data.summary}}</li>
 * {{/category}}
 * ```
 */

assemble.helper('category', function(category, options) {
  var pages = this.app.get('categories.' + category);
  if (!pages) {
    return '';
  }
  return Object.keys(pages).map(function(page) {
    // this renders the block between `{{#category}}` and `{{category}}` passing the
    // entire page object as the context.
    // If you only want to use the page's front-matter, then change this to something like
    // return options.fn(pages[page].data);
    return options.fn(pages[page]).toLowerCase();
  }).join('\n');
});

/**
 * Load data onto assemble cache.
 * This loads data from `glob.data` and `glob.rootData`.
 * When loading `glob.rootData`, use a custom namespace function
 * to return `pkg` for `package.json`.
 *
 * After all data is loaded, process the data to resolve templates
 * in values.
 * @doowb PR: https://github.com/grayghostvisuals/grayghostvisuals/pull/5
 */

function loadData() {
  assemble.data(glob.data);
  assemble.data(assemble.plasma(glob.rootData, {namespace: function (fp) {
    var name = basename(fp, extname(fp));
    if (name === 'package') return 'pkg';
    return name;
  }}));
  assemble.data(assemble.process(assemble.data()));
}

// Placing assemble setups inside the task allows
// live reloading/monitoring for files changes.
gulp.task('assemble', function() {
  assemble.option('production', env_flag);
  assemble.option('layout', 'default');
  assemble.layouts(glob.layouts);
  assemble.partials(glob.includes);
  loadData();

  var stream = assemble.src(glob.pages)
    .pipe($.extname())
    .pipe(assemble.dest(path.site))
    .pipe($.connect.reload());

  return stream;
});


// ===================================================
// Optimizin'
// ===================================================

gulp.task('svgstore', function() {
  return gulp
    .src(path.site + '/img/icons/linear/*.svg')
    .pipe($.svgmin({
      plugins: [{
        removeDoctype: true
      }]
    }))
    .pipe($.svgstore())
    .pipe($.cheerio(function($) {
      $('svg').attr('style', 'display:none');
    }))
    .pipe(gulp.dest(path.templates + '/includes/atoms/svg-sprite.svg'));
});


// ===================================================
// Minifyin'
// ===================================================

gulp.task('cssmin', ['sass'], function() {
  var stream = gulp.src(glob.css)
    .pipe($.mincss({ keepBreaks:true }))
    .pipe(gulp.dest(path.css));

  return stream;
});


// ===================================================
// Buildin'
// ===================================================

/*
 * foreach is because usemin 0.3.11 won't manipulate
 * multiple files as an array.
 */

gulp.task('usemin', ['assemble', 'cssmin'], function() {
  return gulp.src(glob.html)
    .pipe($.foreach(function(stream, file) {
      return stream
        .pipe($.usemin({
          assetsDir: path.site,
          css: [ $.rev() ],
          html: [ $.minhtml({ empty: true }) ],
          js: [ $.uglify(), $.rev() ]
        }))
        .pipe(gulp.dest(path.dist));
    }));
});


// ===================================================
// Duplicatin'
// ===================================================
0
gulp.task('copy', ['usemin'], function() {
  return merge(
    gulp.src([path.site + '/{img,bower_components,js/lib}/**/*'])
        .pipe(gulp.dest(path.dist)),

    gulp.src([
        'webhook.php',
        path.site + '/*.{ico,png,txt}',
        path.site + '/.htaccess',
      ]).pipe(gulp.dest(path.dist))
  );
});


// ===================================================
// Releasin'
// ===================================================

gulp.task('deploy', function() {
  return gulp.src([path.dist + '/**/*', path.dist + '/.htaccess' ])
             .pipe($.ghPages(
                $.if(env_flag === false,
                { branch: 'staging' },
                { branch: 'master'  })
             ));
});


// ===================================================
// Cleanin'
// ===================================================

gulp.task('clean', function(cb) {
  del([
    'dist',
    glob.css,
    path.site + '/client',
    glob.html
  ], cb);
});


// ===================================================
// Monitorin'
// ===================================================

gulp.task('watch', function() {
  gulp.watch([
    glob.sass
  ], ['sass']);

  gulp.watch([
    glob.includes,
    glob.pages,
    glob.layouts
  ], ['assemble']);
});


// ===================================================
// Taskin'
// ===================================================

gulp.task('build', [ 'copy','usemin' ]);
gulp.task('default', [ 'sass','assemble','serve','watch' ]);
