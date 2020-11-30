module.exports = () => {
  $.gulp.task('webp', () => {
    return $.gulp.src($.path.webp.src)
      .pipe($.webp($.imageminWebp({
        lossless: true,
        quality: 80,
        alphaQuality: 100
      })))
      .pipe($.gulp.dest($.path.webp.build))
      .on('end', $.browserSync.reload);
  });
};