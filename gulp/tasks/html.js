'use strict';

module.exports = () => {
  $.gulp.task('html', () => {
    return $.gulp.src($.path.html.src)
      .pipe($.fileInclude())
      .pipe($.webpHtml())
      .pipe($.beautify.html({ 
        indent_size: 2 
      }))
      .pipe($.removeHtmlComments())
      .pipe($.gulp.dest($.path.html.build))
      .on('end', $.browserSync.reload);
  });
};