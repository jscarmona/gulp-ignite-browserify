'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _browserify = require('browserify');

var _browserify2 = _interopRequireDefault(_browserify);

var _vinylSourceStream = require('vinyl-source-stream');

var _vinylSourceStream2 = _interopRequireDefault(_vinylSourceStream);

var _vinylBuffer = require('vinyl-buffer');

var _vinylBuffer2 = _interopRequireDefault(_vinylBuffer);

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpIf = require('gulp-if');

var _gulpIf2 = _interopRequireDefault(_gulpIf);

var _gulpSourcemaps = require('gulp-sourcemaps');

var _gulpSourcemaps2 = _interopRequireDefault(_gulpSourcemaps);

var _gulpUglify = require('gulp-uglify');

var _gulpUglify2 = _interopRequireDefault(_gulpUglify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
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
    watchFiles: []
  },

  /**
   * Task help options
   * @type {Object}
   */
  help: {
    min: 'Compress and minify the output (true|false). Default: false',
    sourcemap: 'Enable or Disable sourcemaps (true|false). Default: false',
    watch: 'Watch files for changes and trigger browsersync'
  },

  /**
   * Task function
   * @param  {Object} config
   * @return {Object}
   */
  fn: function fn(config, end, error) {
    config.min = _yargs2.default.argv.min || config.min;
    config.sourcemap = _yargs2.default.argv.sourcemap || config.sourcemap;
    config.watch = _yargs2.default.argv.watch || config.watch;

    if (config.watch) {
      _gulp2.default.watch(config.watchFiles, ['browserify']);
    }

    (0, _browserify2.default)(config.src, config.options).bundle().on('error', error).pipe((0, _vinylSourceStream2.default)(config.filename)).pipe((0, _vinylBuffer2.default)()).pipe((0, _gulpIf2.default)(config.sourcemap, _gulpSourcemaps2.default.init({ loadMaps: true }))).pipe((0, _gulpIf2.default)(config.min, (0, _gulpUglify2.default)())).pipe((0, _gulpIf2.default)(config.sourcemap, _gulpSourcemaps2.default.write('./'))).pipe(_gulp2.default.dest(config.dest)).on('end', end);
  }
};