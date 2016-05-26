import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import yargs from 'yargs';
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
    filename: 'app.js',
    options: [],
    min: false,
    sourcemap: false,
    watch: false,
    watchFiles: [],
  },

  /**
   * Task help options
   * @type {Object}
   */
  help: {
    'min, -m': 'Compress and minify the output (true|false). Default: false',
    'sourcemap, -s': 'Enable or Disable sourcemaps (true|false). Default: false',
    'watch, -w': 'Watch files for changes and trigger browsersync',
  },

  /**
   * Task function
   * @param  {Object} config
   * @return {Object}
   */
  fn(config, end, error) {
    const min = yargs.argv.min || config.min;
    const sourcemap = yargs.argv.sourcemap || config.sourcemap;
    const watch = yargs.argv.watch || config.watch;

    if (watch) {
      gulp.watch(config.watchFiles, (file) => {
        const startTime = IGNITE_UTILS.startTime();

        IGNITE_UTILS.log(`browserify => ${path.basename(file.path)}`);

        compile()
          .on('end', () => {
            IGNITE_UTILS.notify(`browserify complete --- ${IGNITE_UTILS.getDuration(startTime)}`);
          });
      });
    }

    compile().on('end', end);

    function compile() {
      return browserify(config.src, config.options)
        .bundle()
          .on('error', error)
        .pipe(source(config.filename))
        .pipe(buffer())
        .pipe(gulpIf(sourcemap, sourcemaps.init({ loadMaps: true })))
          .pipe(gulpIf(min, uglify()))
        .pipe(gulpIf(sourcemap, sourcemaps.write('./')))
        .pipe(gulp.dest(config.dest));
    }
  },
};
