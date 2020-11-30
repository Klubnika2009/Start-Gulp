'use strict';

module.exports = () => {
  $.gulp.task('prod', $.gulp.series('clean', 'favicon', 'fonts', 'html', 'stylesprod', 'scriptsprod', 'sprite', 'images', 'webp'));
};