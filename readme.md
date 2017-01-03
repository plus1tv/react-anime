[![Cover][cover-img]][cover-url]

# react-anime

[![Npm Package][npm-img]][npm-url]
[![License][license-img]][license-url]
[![Unit Tests][travis-img]][travis-url]
[![Coverage Tests][codecov-img]][codecov-url]
[![Dependency Status][david-img]][david-url]
[![devDependency Status][david-dev-img]][david-dev-url]

```bash
npm i react-anime -S
```

A super easy animation library for React built on top of the [anime](https://github.com/juliangarnier/anime) animation library. 

To use it, place an `<Anime>` component in your render function and what you want to animate inside.

## Features

- Animate nearly all CSS and SVG attributes by adding a prop with their name (eg. `opacity`, `translateX`).
- Nested animations is as easy as putting an `<Anime>` component inside another.
- Cascading animations through `delay` prop.
- Animations can react to changes in `state`.
- Easy Mount/Unmounting workflow.
- TypeScript/Flow definitions included.

## Usage

```js
import React from 'react';
import Anime from 'react-anime';

let root = (props, state) => (
  <Anime delay={(e, i) => i * 100}
         scale={[.1, .9]}>
    <div className="blue"/>
    <div className="green"/>
    <div className="red"/>
  </Anime>
);
```

See more in our [API Docs](https://hyperfuse.github.io/react-anime#docs) and [Examples](https://hyperfuse.github.io/react-anime#examples).

[cover-img]: docs/cover.gif
[cover-url]: https://hyperfuse.github.io/react-anime
[license-img]: http://img.shields.io/:license-mit-blue.svg?style=flat-square
[license-url]: https://opensource.org/licenses/MIT
[david-url]: https://david-dm.org/hyperfuse/react-anime
[david-img]: https://david-dm.org/hyperfuse/react-anime.svg?style=flat-square
[david-dev-url]: https://david-dm.org/hyperfuse/react-anime#info=devDependencies
[david-dev-img]: https://david-dm.org/hyperfuse/react-anime/dev-status.svg?style=flat-square
[travis-img]: https://img.shields.io/travis/hyperfuse/react-anime.svg?style=flat-square
[travis-url]:https://travis-ci.org/hyperfuse/react-anime
[codecov-img]:https://img.shields.io/codecov/c/github/hyperfuse/react-anime.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/hyperfuse/react-anime
[npm-img]: https://img.shields.io/npm/v/react-anime.svg?style=flat-square
[npm-url]: http://npm.im/react-anime
[npm-download-img]: https://img.shields.io/npm/dm/react-anime.svg?style=flat-square
