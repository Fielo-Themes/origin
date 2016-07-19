'use strict';
import gulp from 'gulp';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';
import zip from 'gulp-zip';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

/************ Replace with your theme name ************/
var THEME_NAME = 'Origin';



// Build production site and backend files, the default task
gulp.task('default', cb => {
  runSequence(
    'theme',
    cb
 );
});


// Sources
var cmsThemeCss = [
  {
    src: [
      'resources/styles/**/**/*.scss'
    ],
    dest: 'resource-bundles/FieloCms_Theme.resource/styles'
 }
];

var cmsThemeCssSources = [];
cmsThemeCss.forEach(function (obj) {
  cmsThemeCssSources = cmsThemeCssSources.concat(obj.src);
});

// CSS constructor
gulp.task('cmsBuildSiteTheme', () => {
  const AUTOPREFIXER_BROWSERS = [
    'ie >= 11',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'ios >= 7',
    'android >= 4.4'
  ];
  return cmsThemeCss.forEach(function (bundle) {
    return gulp.src(bundle.src)
      .pipe($.sourcemaps.init())
      .pipe($.sass({
        precision: 10
     }).on('error', $.sass.logError))
      .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
      .pipe($.if('*.css', $.minifyCss()))
      .pipe($.size({title: 'styles'}))
      .pipe($.sourcemaps.write('./'))
      .pipe(gulp.dest(bundle.dest));
 });
});

var cmsThemeJs = [
  {
    src: [
      // Utilidades
      'resources/scripts/filter.js',
      ],
    name: 'mobile.min.js',
    dest: 'resource-bundles/FieloCms_Theme.resource/scripts'
  },
  {
    src: [
      'resources/scripts/filter.js',
    ],
    name: 'tablet.min.js',
    dest: 'resource-bundles/FieloCms_Theme.resource/scripts'
  },
  {
    src: [
      'resources/scripts/filter.js',
    ],
    name: 'desktop.min.js',
    dest: 'resource-bundles/FieloCms_Theme.resource/scripts'
  }
];

var cmsThemeJsSources = [];
cmsThemeJs.forEach(function (obj) {
  cmsThemeJsSources = cmsThemeJsSources.concat(obj.src);
});

// JavaScript Linter
gulp.task('cmsThemeJsLint', () =>
  gulp.src(cmsThemeJsSources)
  .pipe($.eslint())
  .pipe($.eslint.format())
);

// JavaScript constructor
gulp.task('jsBuildSiteTheme', ['cmsThemeJsLint'], () => {
  return cmsThemeJs.forEach(function (bundle) {
    return gulp.src(bundle.src)
      .pipe($.sourcemaps.init())
      .pipe($.babel())
      .pipe($.sourcemaps.write())
      .pipe($.concat(bundle.name))
      .pipe($.uglify({preserveComments: 'some'}))
      // Output files
      .pipe($.size({title: 'scripts'}))
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest(bundle.dest))
 });
});


// Copy resources files
gulp.task('cmsCopyResourcesFiles', () => {
  // copy thumbnail
  gulp.src(['resources/theme.jpg'], { dot: true})
  .pipe(gulp.dest('resource-bundles/FieloCms_Theme.resource'))
  .pipe($.size({title: 'copy'}));

  // copy images
  return gulp.src(['resources/images/**'], { dot: true})
  .pipe(gulp.dest('resource-bundles/FieloCms_Theme.resource/images'))
  .pipe($.size({title: 'copy'}));
});

// Builds zip for using as static resource
gulp.task('cmsBuildZip', ['cmsCopyResourcesFiles'], () => {
  return gulp.src('resource-bundles/FieloCms_Theme.resource/**')
    .pipe(zip('FieloCms_Theme.zip'))
    .pipe(gulp.dest('resource-bundles'));
});

// Local server
gulp.task('theme', ['cmsBuildSiteTheme', 'jsBuildSiteTheme'], () => {
  browserSync({
    notify: false,
    logPrefix: 'FIELO_THEME: ' + THEME_NAME,
    server: ['resource-bundles', 'app',],
    reloadDelay: 250,
    port: 3000,
    ui: {
      weinre: {
        port: 3001
     }
   }
 });

  // Listens for changes and reloads browsers
  gulp.watch(['app/**/*.html'], reload);
  gulp.watch(['resources/styles/**/*.{scss,css}'], [
    'cmsBuildSiteTheme', 'cmsBuildZip', reload]);
  gulp.watch(['resources/scripts/**/*.js'], [
    'jsBuildSiteTheme', 'cmsBuildZip', reload]);
});
