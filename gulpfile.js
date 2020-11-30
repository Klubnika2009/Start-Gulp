'use strict';

global.$ = {
  gulp: require('gulp'),
  debug: require('gulp-debug'),
  // Html
  fileInclude: require('gulp-file-include'),
  beautify: require('gulp-beautify'),
  removeHtmlComments: require('gulp-remove-html-comments'),
  // Styles
  plumber: require('gulp-plumber'),
  notify: require('gulp-notify'),
  sourcemaps: require('gulp-sourcemaps'),
  rename: require('gulp-rename'),
  cleanCss: require('gulp-clean-css'),
  sass: require('gulp-sass'),
  autoprefixer: require('gulp-autoprefixer'),
  groupMediaCss: require('gulp-group-css-media-queries'),
  removeCssComments: require('gulp-strip-css-comments'),
  webpcss: require('gulp-webp-css'),
  // Scripts
  webpack: require('webpack'),
  webpackStream: require('webpack-stream'),
  // Clean
  del: require('del'),
  // Images
  imagemin: require('gulp-imagemin'),
  pngquant: require('imagemin-pngquant'),
  mozjpeg: require('imagemin-mozjpeg'),
  svgo: require('imagemin-svgo'),
  gifsicle: require('imagemin-gifsicle'),
  cache: require('gulp-cache'),
  // Webp
  webp: require('gulp-webp'),
  webpHtml: require('gulp-webp-html'),
  imageminWebp: require('imagemin-webp'),
  // SVG Sprite
  svgmin: require('gulp-svgmin'),
  cheerio: require('gulp-cheerio'),
  replace: require('gulp-replace'),
  svgsprite: require('gulp-svg-sprite'),
  // Server
  browserSync: require('browser-sync').create(),
  path: {
    config: require('./gulp/config'),
    build: './build',
    html: {
      src: ['./app/**/*html', '!./app/template/*.html'],
      build: './build',
      watch: './app/**/*.html'
    },
    styles: {
      src: './app/sass/**/*.sass',
      build: './build/css',
      watch: './app/sass/**/*.sass'
    },
    scripts: {
      src: './app/js/**/*.js',
      build: './build/js',
      watch: './app/js/**/*.js'
    },
    images: {
      src: './app/images/**/*.{jpg,jpeg,png,gif,tiff,svg}',
      build: './build/images',
      watch: './app/images/**/*.{jpg,jpeg,png,gif,tiff,svg}'
    },
    favicon: {
      src: './app/images/favicon/*.{xml,ico,png,json}',
      build: './build/images/favicon',
      watch: './app/images/favicon/*.{xml,ico,png,json}'
    },
    webp: {
      src: ['./app/images/**/*.{jpg,jpeg,png}', '!./app/images/favicon/*.{jpg,jpeg,png}'],
      build: './build/images',
      watch: './app/images/**/*.{jpg,jpeg,png}'
    },
    sprite: {
      src: './app/images/**/*.svg',
      build: './build/images',
      watch: './app/images/**/*.svg'
    },
    fonts: {
      src: './app/fonts/**/*.{woff,woff2,ttf,eot}',
      build: './build/fonts',
      watch: './app/fonts/**/*.{woff,woff2,ttf,eot}'
    },
    copy: {
      src: './app/db/**/*.json',
      build: './build/db',
      watch: './app/db/**/*.json'
    }
  }
}

$.path.config.forEach(function (path) {
  require(path)();
});