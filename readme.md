[![Cover][cover-img]][cover-url]

# [react-anime](https://alain.xyz/react-anime)

<!---[![Npm Package][npm-img]][npm-url]-->
[![Travis CI][travis-img]][travis-url]
![Release][release-img]
[![License][license-img]][license-url]
[![Codecov][codecov-img]][codecov-url]
[![Dependency Status][david-img]][david-url]
[![devDependency Status][david-dev-img]][david-dev-url]

react-anime was written in an effort to make animations easier to work with. We
made this possible by wrapping the awesome flexible yet lightweight JavaScript
animation library, [anime](https://github.com/juliangarnier/anime) in a react
component. Simply pass some props and your awesome animations come to life.

Inspiration for this library came because [react-motion](https://github.com/chenglou/react-motion) could get really complex really really fast when animating several things and trying to coordinate
with the animations. Also it wasn't nice to see large portions of some component code filled with callbacks. React-Motion nonetheless is an awesome animation library!

## Install

```bash
npm i react-anime -S
```

## Usage

```js
import React from 'react';
import Anime from 'react-anime';

let root = (props, state) => (
  <Anime easing="easeOutElastic"
         loop={true}
         duration={1000}
         direction="alternate"
         loop={true}
         delay={(el, index) => index * 240}
         translateX='13rem'
         scale={[.75, .9]}>
    <div className="blue"/>
    <div className="green"/>
    <div className="red"/>
  </Anime>
);
```

## Contributing

To contribute make sure you have `node v6.0.0+` and `npm v3.8.0+`

## Project Scripts

```bash
# Create Development build of library
npm run build:develop

# Create Production build of library
npm run build:production

# Create both Production & Development build before finalizing pull request
npm run build:publish

# Run Tests
npm run test

# Watch Tests
npm run test:watch

# Run Tests and pass coverage to codecov
npm run coverage
```

[cover-img]: docs/cover.gif
[cover-url]: http://codepen.io/alaingalvan/details/EgjbKP/
[release-img]: https://img.shields.io/badge/release-0.1.0-4dbfcc.svg?style=flat-square
[license-img]: http://img.shields.io/:license-mit-blue.svg?style=flat-square
[license-url]: https://opensource.org/licenses/MIT
[david-url]: https://david-dm.org/alaingalvan/react-anime
[david-img]: https://david-dm.org/alaingalvan/react-anime.svg?style=flat-square
[david-dev-url]: https://david-dm.org/alaingalvan/react-anime#info=devDependencies
[david-dev-img]: https://david-dm.org/alaingalvan/react-anime/dev-status.svg?style=flat-square
[travis-img]: https://img.shields.io/travis/stelatech/react-anime.svg?style=flat-square
[travis-url]:https://travis-ci.org/alaingalvan/react-anime
[codecov-img]:https://img.shields.io/codecov/c/github/alaingalvan/react-anime.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/alaingalvan/react-anime
[npm-img]: https://img.shields.io/npm/v/react-anime.svg?style=flat-square
[npm-url]: http://npm.im/react-anime
