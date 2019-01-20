![lol](docs/cover.png)

[![Npm Package][npm-img]][npm-url]
[![Npm Package][npm-download-img]][npm-url]
[![License][license-img]][license-url]
[![Unit Tests][travis-img]][travis-url]
[![Coverage Tests][codecov-img]][codecov-url]
[![Dependency Status][david-img]][david-url]
[![devDependency Status][david-dev-img]][david-dev-url]

```bash
npm i react-anime -S
```

> (ﾉ´ヮ´)ﾉ*:･ﾟ✧  A super easy animation library for React built on top of [anime.js](https://github.com/juliangarnier/anime).

To use it, place an `<Anime>` component and what you want to animate inside.

## Features

- Animate nearly all CSS, SVG, & DOM attributes by adding a prop with their name (eg. `opacity`, `backgroundColor`, `translateX`).

- Nested animations are as easy as putting an `<Anime>` component inside another.

- Animations can react to changes in `state`.

- Cascading animations through `delay` prop.

- [TypeScript](http://typescriptlang.org/)/[Flow](https://flowtype.org/) definitions included.

## Usage

```js
import React from 'react';
import Anime from 'react-anime';

const App = (props) => (
  <Anime delay={(e, i) => i * 100}
         scale={[.1, .9]}>
    <div className="blue"/>
    <div className="green"/>
    <div className="red"/>
  </Anime>
);
```

Refer to the [Docs](/docs/readme.md) to see how to use the library, or check out our [Examples](https://codepen.io/collection/nrkjgo/).

[cover-img]: docs/assets/logo.png
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
