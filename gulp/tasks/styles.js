'use strict';

module.exports = () => {

  $.gulp.task('stylesdev', () => {
    return $.gulp.src($.path.styles.src)
      .pipe($.plumber({
        errorHandler: $.notify.onError({
          title: 'Error',
          message: '<%= error.message %>',
          sound: 'Beep'
        })
      }))
      .pipe($.sourcemaps.init())
      .pipe($.sass({outputStyle: 'expanded'}))
      .pipe($.autoprefixer({
        cascade: false,
        grid: true,
        overrideBrowserslist: 'last 10 versions'
      }))
      .pipe($.groupMediaCss())
      .pipe($.removeCssComments())
      .pipe($.webpcss())
      .pipe($.rename({
        basename: 'styles',
        suffix: '.min'
      }))
      .pipe($.sourcemaps.write('.'))
      .pipe($.gulp.dest($.path.styles.build))
      .pipe($.browserSync.stream());
  });

  $.gulp.task('stylesprod', () => {
    return $.gulp.src($.path.styles.src)
      .pipe($.plumber({
        errorHandler: $.notify.onError({
          title: 'Error',
          message: '<%= error.message %>',
          sound: 'Beep'
        })
      }))
      .pipe($.sass({outputStyle: 'expanded'}))
      .pipe($.autoprefixer({
        cascade: false,
        grid: true,
        overrideBrowserslist: 'last 10 versions'
      }))
      .pipe($.groupMediaCss())
      .pipe($.cleanCss({level: { 1: {specialComments: 0} } }))
      .pipe($.removeCssComments())
      .pipe($.webpcss())
      .pipe($.rename({
        basename: 'styles',
        suffix: '.min'
      }))
      .pipe($.gulp.dest($.path.styles.build))
  });

};