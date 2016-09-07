[![Screenshot][website-img]][website-url]

# 🎆 [react-anime](https://alain.xyz/react-anime)

[![Travis](https://img.shields.io/travis/alaingalvan/react-anime.svg?style=flat-square)]()
![Release][release-img]
[![Codecov](https://img.shields.io/codecov/c/github/alaingalvan/react-anime.svg?style=flat-square)]()
[![Dependency Status][david-img]][david-url]
[![devDependency Status][david-dev-img]][david-dev-url]

A port of anime.js to React.

## Install
```bash
npm install --save react-anime
```

## Usage
```js
import React from 'react';
import Anime from 'react-anime';

let root = (props, state) => (
    <Anime easing="linear"
           loop={true}
           duration={5000}
           delay={(el, index) => index * 80}
           start={{tranlateX: 0}}
           end={{tranlateX: 10}}>
      <img src="harambe.png" />
      <img src="trump.png" />
      <img src="kanye.png" />
    </Anime>
);
```

## Contributing

To contribute make sure you have `node v6.0.0+` and `npm v3.8.0+`

##### Install packages
```bash
npm install
```

##### Project Scripts
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

[website-img]: docs/brand/cover.png
[website-url]: https://alain.xyz/libraries/react-anime
[release-img]: https://img.shields.io/badge/release-0.1.0-4dbfcc.svg?style=flat-square
[license-img]: http://img.shields.io/:license-isc-blue.svg?style=flat-square
[license-url]: https://opensource.org/licenses/MIT
[david-url]: https://david-dm.org/alaingalvan/react-anime
[david-img]: https://david-dm.org/alaingalvan/react-anime.svg?style=flat-square
[david-dev-url]: https://david-dm.org/alaingalvan/react-anime#info=devDependencies
[david-dev-img]: https://david-dm.org/alaingalvan/react-anime/dev-status.svg?style=flat-square
[travis-img]: https://api.travis-ci.org/alaingalvan/react-anime.svg?style=flat-square
[travis-url]:https://travis-ci.org/alaingalvan/react-anime
[npm-img]: https://img.shields.io/npm/v/react-anime.svg?style=flat-square
[npm-url]: http://npm.im/react-anime
