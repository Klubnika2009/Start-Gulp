'use strict';

module.exports = () => {
  $.gulp.task('favicon', () => {
    return $.gulp.src([$.path.favicon.src])
      .pipe($.gulp.dest($.path.favicon.build));
  });
};