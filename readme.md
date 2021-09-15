<h1 align="center">react-anime</h1>

<div align="center">

[![Npm Package][npm-img]][npm-url]
[![License][license-img]][license-url]
[![Unit Tests][travis-img]][travis-url]
[![Coverage Tests][codecov-img]][codecov-url]
[![Dependency Status][david-img]][david-url]
[![devDependency Status][david-dev-img]][david-dev-url]

> (ﾉ´ヮ´)ﾉ*:･ﾟ✧  A super easy animation library for React built on top of Julian Garnier's [anime.js](https://github.com/juliangarnier/anime). <br>
> Just place an `<Anime>` component and what you want animated inside.

[Documentation](documentation.md) | [Demos](https://codepen.io/collection/nrkjgo/) | [Anime.js](https://github.com/juliangarnier/anime)

</div>

## Installation

```bash
npm i react-anime -S
```

## Features

- Animate nearly all CSS, SVG, & DOM attributes by adding a prop with their name (eg. `opacity`, `backgroundColor`, `transform` inputs like `translateX`).

- Nested animations are as easy as putting an `<Anime>` component inside another.

- Cascading animations through `delay` prop.

- Add elements dynamically and have them animate in.

- [TypeScript](http://typescriptlang.org/) definitions included.

## Usage

```js
import Anime, { anime } from 'react-anime';

let colors = [ 'blue', 'green', 'red' ];

const MyAnime = (props) => (
    <Anime delay={anime.stagger(100)} scale={[ 0.1, 0.9 ]}>
        {colors.map((color, i) => <div key={i} className={color} />)}
    </Anime>
);
```

[license-img]: http://img.shields.io/:license-mit-blue.svg?style=flat-square
[license-url]: https://opensource.org/licenses/MIT
[david-url]: https://david-dm.org/plus1tv/react-anime
[david-img]: https://david-dm.org/plus1tv/react-anime.svg?style=flat-square
[david-dev-url]: https://david-dm.org/plus1tv/react-anime#info=devDependencies
[david-dev-img]: https://david-dm.org/plus1tv/react-anime/dev-status.svg?style=flat-square
[travis-img]: https://img.shields.io/travis/com/plus1tv/react-anime?style=flat-square
[travis-url]: https://www.travis-ci.com/github/plus1tv/react-anime
[codecov-img]: https://img.shields.io/codecov/c/github/plus1tv/react-anime.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/plus1tv/react-anime
[npm-img]: https://img.shields.io/npm/v/react-anime.svg?style=flat-square
[npm-url]: http://npm.im/react-anime
