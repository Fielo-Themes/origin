'use strict';

import gulp from 'gulp';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';


const $ = gulpLoadPlugins();
const reload = browserSync.reload;


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
      'resources/FieloCms_Theme_Origin/styles/**/**/*.scss'
    ],
    dest: 'resource-bundles/FieloCms_Theme_Origin.resource/styles'
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
      'resources/FieloCms_Theme_Origin/scripts/filter.js',
      ],
    name: 'mobile.min.js',
    dest: 'resource-bundles/FieloCms_Theme_Origin.resource/scripts'
  },
  {
    src: [
      'resources/FieloCms_Theme_Origin/scripts/filter.js',
    ],
    name: 'tablet.min.js',
    dest: 'resource-bundles/FieloCms_Theme_Origin.resource/scripts'
  },
  {
    src: [
      'resources/FieloCms_Theme_Origin/scripts/filter.js',
    ],
    name: 'desktop.min.js',
    dest: 'resource-bundles/FieloCms_Theme_Origin.resource/scripts'
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

// Local server
gulp.task('theme', ['cmsBuildSiteTheme', 'jsBuildSiteTheme'], () => {
  browserSync({
    notify: false,
    // Customize the BrowserSync console logging prefix
    logPrefix: 'WSK',
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: ['resource-bundles', 'app',],
    reloadDelay: 150,
    port: 3000,
    ui: {
      weinre: {
        port: 3001
     }
   }
 });

  // Levanta servidor con los themes
  gulp.watch(['app/**/*.html'], reload);
  gulp.watch(['resources/FieloCms_Theme_Origin/styles/**/*.{scss,css}'], [
    'cmsBuildSiteTheme', reload ]);
  gulp.watch(['resources/FieloCms_Theme_Origin/scripts/**/*.js'], [
    'jsBuildSiteTheme', reload ]);
});
