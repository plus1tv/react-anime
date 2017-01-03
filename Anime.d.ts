import * as React from 'react';

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

export type AnimationProp =
  {
    value: string | number,
    delay: ((el: Element, index?: number, len?: number) => number) | number,
    duration?: ((el: Element, index?: number, len?: number) => number) | number,
    easing?: Easing
  } |
  string |
  number |
  (string | number)[] |
  ((el: Element, index?: number) => string | number);

export interface AnimeProps {
  delay?: ((el: Element, index?: number, len?: number) => number) | number,
  duration?: ((el: Element, index?: number, len?: number) => number) | number,
  autoplay?: boolean,
  loop?: number | boolean,
  direction?: 'normal' | 'reverse' | 'alternate';
  easing?: Easing,
  elasticity?: number,
  round?: number | boolean,
  begin?: Function,
  update?: Function,
  complete?: Function,
  // Objects
  [index: string]: AnimationProp | any

}

declare class Anime extends React.Component<AnimeProps, any> { }

export default Anime;
