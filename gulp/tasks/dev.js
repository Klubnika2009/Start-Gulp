'use strict';

module.exports = () => {
  $.gulp.task('dev', $.gulp.series('clean', 'favicon', 'fonts', 'html', 'stylesdev', 'scriptsdev', 'sprite', 'images', 'webp'));
};