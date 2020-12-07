'use strict';

module.exports = () => {

  $.gulp.task('images', () => {
    return $.gulp.src($.path.images.src)
      .pipe($.cache($.imagemin([
        $.gifsicle({
          interlaced: true,
          optimizationLevel: 2
        }),
        $.pngquant({
          quality: [0.6, 0.8],
          speed: 5
        }),
        $.mozjpeg({
          progressive: true,
          quality: 90
        }),
        $.svgo({
          plugins: [
            { removeViewBox: false },
            { removeUnusedNS: false },
            { removeUselessStrokeAndFill: false },
            { cleanupIDs: false },
            { removeComments: true },
            { removeEmptyAttrs: true },
            { removeEmptyText: true },
            { collapseGroups: true }
          ]
        })
      ])))
      .pipe($.gulp.dest($.path.images.build))
      .pipe($.size())
      .on('end', $.browserSync.reload);
  });

};