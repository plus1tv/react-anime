declare module 'react-anime' {

  import * as React from 'react';

  export type TimingValues = (el: Element, index?: number, len?: number) => number | number;

  export type Easing =
    'easeInSine' |
    'easeOutSine' |
    'easeInOutSine' |
    'easeInCirc' |
    'easeOutCirc' |
    'easeInOutCirc' |
    'easeInElastic' |
    'easeOutElastic' |
    'easeInOutElastic' |
    'easeInBack' |
    'easeOutBack' |
    'easeInOutBack' |
    'easeInBounce' |
    'easeOutBounce' |
    'easeInOutBounce' |
    'easeInQuad' |
    'easeOutQuad' |
    'easeInOutQuad' |
    'easeInCubic' |
    'easeOutCubic' |
    'easeInOutCubic' |
    'easeInQuart' |
    'easeOutQuart' |
    'easeInOutQuart' |
    'easeInQuint' |
    'easeOutQuint' |
    'easeInOutQuint' |
    'easeInExpo' |
    'easeOutExpo' |
    'easeInOutExpo' |
    'linear';

  export type Direction =
    'normal' |
    'reverse' |
    'alternate';

  export type AnimationProp =
    { value: string | number, delay: TimingValues, duration?: TimingValues, easing?: Easing } |
    string |
    number |
    (string | number)[] |
    ((el: Element, index?: number) => string | number);

  export interface AnimeProps {
    children: React.ReactNode,
    delay?: TimingValues,
    duration?: TimingValues,
    autoplay?: boolean,
    loop?: number | boolean,
    direction?: Direction
    easing?: Easing,
    elasticity?: number,
    round?: number | boolean,
    begin?: Function,
    update?: Function,
    complete?: Function,

    // CSS Properties
    // Not Included

    // Individual Transforms
    translateX: AnimationProp,
    translateY: AnimationProp,
    rotate: AnimationProp,
    scale: AnimationProp,
    scaleX: AnimationProp,
    scaleY: AnimationProp,

    // SVG Attributes
    d: AnimationProp,
    rx: AnimationProp,
    transform: AnimationProp,

    // DOM Attributes
    value: AnimationProp,
    volume: AnimationProp

    // Objects
    [index: string]: AnimationProp | any

  }

  class Anime extends React.Component<AnimeProps | React.CSSProperties, any> { }

  export default Anime;
}