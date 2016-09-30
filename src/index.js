import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import gulp from 'gulp';
import gulpIf from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import path from 'path';
import uglify from 'gulp-uglify';
import { IGNITE_UTILS } from 'gulp-ignite/utils';

export default {
  /**
   * Task name
   * @type {String}
   */
  name: 'browserify',

  /**
   * Task description
   * @type {String}
   */
  description: 'Build out the javascript files',

  /**
   * Task default configuration
   * @type {Object}
   */
  config: {
    src: './client/app/app.js',
    dest: './public/js',
    options: [],
    filename: null,
    exitOnFail: true,
    min: false,
    sourcemap: false,
  },

  /**
   * Task help options
   * @type {Object}
   */
  help: {},

  /**
   * Task function
   * @param  {Object} config
   * @return {Object}
   */
  fn(config, end, error) {
    const filename = config.filename || path.basename(config.src);

    return browserify(config.src, config.options)
      .bundle()
        .on('error', (e) => error(e.message, config.exitOnFail))
      .pipe(source(filename))
      .pipe(buffer())
      .pipe(gulpIf(config.sourcemap, sourcemaps.init({ loadMaps: true })))
        .pipe(gulpIf(config.min, uglify()))
      .pipe(gulpIf(config.sourcemap, sourcemaps.write('./')))
      .pipe(gulp.dest(config.dest))
        .on('end', () => IGNITE_UTILS.notify('Browserify Complete'));
  },
};
