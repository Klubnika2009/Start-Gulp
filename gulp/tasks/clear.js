'use strict';

module.exports = () => {
  $.gulp.task('clear', () => {
    return $.cache.clearAll();
  });
};