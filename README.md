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
'use strict';

import ignite from 'gulp-ignite';
import browserify from 'gulp-browserify';
import babelify from 'babelify';

const tasks = [browserify];
const options = {
  browserify: {
    options: [
      transforms: [babelify],
    ],
    watchFiles: [
      './client/app/**/*.js',
    ],
  },
};

ignite.start(tasks, options);

```

## usage

```bash
$ gulp browserify --watch --min --sourcemap
```

### available runtime overrides

* --watch
* --min
* --sourcemap


## options

### src

**Type:** `String`  
**Default:** `./client/app/app.js`

The source file that should be used as the main entry point for your app.

### dest

**Type:** `String`  
**Default:** `./public/js`

The destination directory where the bundle should be output to.

### filename

**Type:** `String`  
**Default:** `app.js`

The filename of the bundled output.

### options

**Type:** `Array`  
**Default:** `[]`

Options to pass through to browserify. Check out [browserify options](https://github.com/substack/node-browserify#browserifyfiles--opts) to see the full list.

### min

**Type:** `Boolean`  
**Default:** `false`

Whether or not to uglify.

### sourcemap

**Type:** `Boolean`  
**Default:** `false`

Whether or not to include sourcemap.

### watch

**Type:** `Boolean`  
**Default:** `false`

Whether or not to watch for file changes.

### watchFiles

**Type:** `Array`  
**Default:** `[]`

Files to watch for changes.

### deps

**Type:** `Array`  
**Default:** `[]`

Any gulp tasks that browserify would be dependent of.

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