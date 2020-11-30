'use strict';

module.exports = () => {
  $.gulp.task('clean', () => {
    return $.del($.path.build)
  });
};