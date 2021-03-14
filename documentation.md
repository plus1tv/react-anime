# Documentation

`react-anime` was written in an effort to make animations easier to work with. We made this possible by wrapping the awesome flexible yet lightweight JavaScript animation library, [anime](https://github.com/juliangarnier/anime) in a react component. Simply pass some props and your awesome animations come to life.

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

The following are props that you can assign to an `<Anime/>` component, along with the type they expect.

|        Prop       |      Type      |
|:-----------------:|:---------------|
| `component`       | `ReactComponent` |
| `delay`           | `(el: Element, index?: number, len?: number) => number \| number` |
| `duration`        | `TimingValue ( above )` |
| `autoplay`        | `boolean` |
| `loop`            | `number \| boolean` |
| `direction`       | `'normal' \| 'reverse' \| 'alternate'` |
| `easing`          | `'easeInSine' \| 'easeOutSine' \| 'easeInOutSine' \| 'easeInCirc' \| 'easeOutCirc' \| 'easeInOutCirc' \| 'easeInElastic' \| 'easeOutElastic' \| 'easeInOutElastic' \| 'easeInBack' \| 'easeOutBack' \| 'easeInOutBack' \| 'easeInBounce' \| 'easeOutBounce' \| 'easeInOutBounce' \| 'easeInQuad' \| 'easeOutQuad' \| 'easeInOutQuad' \| 'easeInCubic' \| 'easeOutCubic' \| 'easeInOutCubic' \| 'easeInQuart' \| 'easeOutQuart' \| 'easeInOutQuart' \| 'easeInQuint' \| 'easeOutQuint' \| 'easeInOutQuint' \| 'easeInExpo' \| 'easeOutExpo' \| 'easeInOutExpo' \| 'linear'` |
|`elasticity`       | `number` |
| `round`           | `number \| boolean` |
| `begin`           | `(anime: AnimeInstance) => void` |
| `update`          | `(anime: AnimeInstance) => void` |
| `complete`        | `(anime: AnimeInstance) => void` |
| `[index: string]` | `string \| number \| (string \| number)[2] \| ((el: Element, index?: number) => string \| number) \| { value: string \| number, delay: TimingValues, duration?: TimingValues, easing?: Easing }` |

> **Note** the last prop type, any other props can be used by anime, from CSS attributes to SVG attributes, you name it. :)

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
