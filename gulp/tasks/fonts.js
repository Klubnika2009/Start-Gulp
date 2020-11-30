'use strict';

module.exports = () => {
  $.gulp.task('fonts', () => {
    return $.gulp.src([$.path.fonts.src])
      .pipe($.gulp.dest($.path.fonts.build));
  });
};