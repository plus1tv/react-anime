[![Cover][cover-img]][cover-url]

# react-anime

[![Npm Package][npm-img]][npm-url]
[![License][license-img]][license-url]
[![Dependency Status][david-img]][david-url]
[![devDependency Status][david-dev-img]][david-dev-url]
[![Known Vulnerabilities](https://snyk.io/test/npm/react-anime/badge.svg?style=flat-square)](https://snyk.io/test/npm/react-anime)

react-anime was written in an effort to make animations easier to work with. We
made this possible by wrapping the awesome flexible yet lightweight JavaScript
animation library, [anime](https://github.com/juliangarnier/anime) in a react
component. Simply pass some props and your awesome animations come to life.

We wrote this library because [react-motion](https://github.com/chenglou/react-motion) could get really complex really really fast when animating several things and trying to coordinate
with the animations. Also it wasn't nice to see large portions of some component code filled with callbacks. react-motion nonetheless is an awesome animation library!

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

## API

The API is based off [anime.js](https://github.com/juliangarnier/anime) documentation. TypeScript/Flow definitions are included so refer to those if you have any other questions.

|        Prop       |      Type      |
|:-----------------:|:---------------|
| `delay`           | `(el: Element, index?: number, len?: number) => number | number` |
| `duration`        | `TimingValue ( above )` |
| `autoplay`        | `boolean` |
| `loop`            | `number | boolean` |
| `direction`       | `'normal' | 'reverse' | 'alternate'` |
| `easing`          | `'easeInSine' | 'easeOutSine' | 'easeInOutSine' | 'easeInCirc' | 'easeOutCirc' | 'easeInOutCirc' | 'easeInElastic' | 'easeOutElastic' | 'easeInOutElastic' | 'easeInBack' | 'easeOutBack' | 'easeInOutBack' | 'easeInBounce' | 'easeOutBounce' | 'easeInOutBounce' | 'easeInQuad' | 'easeOutQuad' | 'easeInOutQuad' | 'easeInCubic' | 'easeOutCubic' | 'easeInOutCubic' | 'easeInQuart' | 'easeOutQuart' | 'easeInOutQuart' | 'easeInQuint' | 'easeOutQuint' | 'easeInOutQuint' | 'easeInExpo' | 'easeOutExpo' | 'easeInOutExpo' | 'linear'` |
|`elasticity`       | `number` |
| `round`           | `number | boolean` |
| `begin`           | `(anime: AnimeInstance) => void` |
| `update`          | `(anime: AnimeInstance) => void` |
| `complete`        | `(anime: AnimeInstance) => void` |
| `[index: string]` | `string | number | (string | number)[2] | ((el: Element, index?: number) => string | number) | { value: string | number, delay: TimingValues, duration?: TimingValues, easing?: Easing }` |

**Note** the last prop type, any other props can be used by anime, from CSS attributes to SVG attributes, you name it. :)

### Transforms

|        Prop       |      Type       |
|:-----------------:|:----------------|
| `translateX`      | `AnimationProp (Above)` |
| `translateY`      | `AnimationProp` |
| `rotate`          | `AnimationProp` |
| `scale`           | `AnimationProp` |
| `scaleX`          | `AnimationProp` |
| `scaleY`          | `AnimationProp` |

### SVGs

|        Prop       |      Type      |
|:-----------------:|:---------------|
| `d`               | `AnimationProp` |
| `rx`              | `AnimationProp` |
| `transform`       | `AnimationProp` |
| `scale`           | `AnimationProp` |
| `scaleX`          | `AnimationProp` |
| `scaleY`          | `AnimationProp` |

### DOM

|        Prop       |      Type       |
|:-----------------:|:----------------|
| `value`           | `AnimationProp` |
| `volume`          | `AnimationProp` |

And more.

## Examples

### Reactive update

Say you want your animation to play when an the state of your component changes:

```js
class Documentation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }

  openDocs = () => {
    this.setstate((prevState) => ({open: prevState.open}))
  }

  render() {
    return (<Anime easing="easeOutElastic"
           opacity={this.state.open ? [0, 1] : [1: 0]}>
        <MarkdownDocs/>
      </Anime>)
  }
}
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

[cover-img]: assets/cover.gif
[cover-url]: http://codepen.io/alaingalvan/details/EgjbKP/
[license-img]: http://img.shields.io/:license-mit-blue.svg?style=flat-square
[license-url]: https://opensource.org/licenses/MIT
[david-url]: https://david-dm.org/stelatech/react-anime
[david-img]: https://david-dm.org/stelatech/react-anime.svg?style=flat-square
[david-dev-url]: https://david-dm.org/stelatech/react-anime#info=devDependencies
[david-dev-img]: https://david-dm.org/stelatech/react-anime/dev-status.svg?style=flat-square
[travis-img]: https://img.shields.io/travis/stelatech/react-anime.svg?style=flat-square
[travis-url]:https://travis-ci.org/stelatech/react-anime
[codecov-img]:https://img.shields.io/codecov/c/github/stelatech/react-anime.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/stelatech/react-anime
[npm-img]: https://img.shields.io/npm/v/react-anime.svg?style=flat-square
[npm-url]: http://npm.im/react-anime
[npm-download-img]: https://img.shields.io/npm/dm/react-anime.svg?style=flat-square
