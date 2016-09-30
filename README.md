# gulp-ignite-browserify

[![Build Status](https://travis-ci.org/jscarmona/gulp-ignite-browserify.svg?branch=master)](https://travis-ci.org/jscarmona/gulp-ignite-browserify)
[![npm](https://img.shields.io/npm/dt/gulp-ignite-browserify.svg?maxAge=2592000)]()
[![GitHub tag](https://img.shields.io/github/release/jscarmona/gulp-ignite-browserify.svg?maxAge=2592000)]()

## install

**NPM**

```bash
$ npm install --save-dev gulp-ignite gulp-ignite-browserify
```

## example

```js
import { task, watch } from 'gulp-ignite';
import browserify from 'gulp-browserify';
import babelify from 'babelify';

task('scripts', browserify, {
  src: './src/app.js',
  options: [transforms: [babelify]],
});
watch('scripts:watch', './src/**/*.js', ['scripts']);
```

## usage

Run browserify on src files.

```bash
$ gulp browserify
```

##### options
- `src` - The source file that should be used as the main entry point for your app. (**Default:** `['./client/app/app.js']`)
- `dest` - The destination directory where the bundle should be output to. (**Default:** `'./public/js'`)
- `filename` - The filename of the bundled output. (**Default:** filename of src)
- `options` - Options to pass through to browserify. Check out [browserify options](https://github.com/substack/node-browserify#browserifyfiles--opts) to see the full list. (**Default:** `[]`)
- `exitOnFail` - Whether or not to exit on fail. (**Default:** `true`)
- `min` - Whether or not to uglify. (**Default:** `false`)
- `sourcemap` - Whether or not to include sourcemap. (**Default:** `false`)
- `deps` - Any gulp tasks that task would be dependent of. (**Default:** `[]`)

## license

The MIT License (MIT)

Copyright (c) 2016 Javier Carmona

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
