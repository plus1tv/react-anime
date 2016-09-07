[![Screenshot][website-img]][website-url]

# 🎆 [react-anime](https://alain.xyz/react-anime)

[![Build Status][travis-img]][travis-url] ![Release][release-img] [![Dependency Status][david-img]][david-url] [![devDependency Status][david-dev-img]][david-dev-url]

A port of anime.js to React.

```js
import React from 'react';
import {Anime} from 'react-anime';

let root = (props, state) => (
    <Anime easing="linear" loop={true} duration={5000} delay={(el, index) => index * 80} start={{tranlateX: 0}} end={{tranlateX: 10}}>
      <img src="harambe.png" />
      <img src="trump.png" />
      <img src="kanye.png" />
    </Anime>
);
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
[coveralls-img]: https://coveralls.io/repos/github/alaingalvan/react-anime/badge.svg?branch=master&style=flat-square
[coveralls-url]:https://coveralls.io/github/alaingalvan/react-anime