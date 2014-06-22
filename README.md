# [slush](https://github.com/slushjs/slush)-html5-template

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status](https://travis-ci.org/appleboy/slush-html5-template.svg?branch=master)](https://travis-ci.org/appleboy/slush-html5-template)

> Slush generator Html5 web apps

## Features

* The latest [html5boilerplate.com](http://html5boilerplate.com/) source code.
* Includes [Normalize.scss](https://github.com/appleboy/normalize.scss) v3.0.x and v1.1.x.
* The latest [jQuery](http://jquery.com/) and [Modernizr](http://modernizr.com/) via [Bower](http://bower.io/) package manager.
* Support [CoffeeScript](http://coffeescript.org/), [RequireJS](http://requirejs.org/), [Sass](http://sass-lang.com/) or [Compass](http://compass-style.org/), html minification (via [htmlcompressor](http://code.google.com/p/htmlcompressor/)).
* Support JavaScript test framework [Mocha](http://visionmedia.github.io/mocha/).
* Support streaming build system [Gulp](http://gulpjs.com/).
* Support Minify PNG and JPEG images with [image-min](https://github.com/sindresorhus/gulp-imagemin).

## Getting Started

### Installation

Install `slush-html5-template` globally:

```bash
$ npm install -g slush-html5-template
```

Remember to install `slush` globally as well, if you haven't already:

```bash
$ npm install -g slush
```

### Usage

Create a new folder for your project:

```bash
$ mkdir my-slush-html5-template
```

Run the generator from within the new folder:

```bash
$ cd my-slush-html5-template && slush html5-template
```

## Quick start

### run application

To run the application

```bash
$ npm start
```

And then navigate to http://localhost:1337

### Release application

To build application

```bash
$ npm release
```

### Testing application

To test the application

```bash
$ npm test
```

### ScreenShot

<p align="center">
  <img src="https://raw.githubusercontent.com/appleboy/slush-html5-template/master/images/screenshot.png" />
</p>

[npm-url]: https://www.npmjs.org/package/slush-html5-template
[npm-image]: http://img.shields.io/npm/v/slush-html5-template.svg
[downloads-image]: http://img.shields.io/npm/dm/slush-html5-template.svg
