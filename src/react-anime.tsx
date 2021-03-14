// eslint-disable-next-line
import React, { Fragment, useRef, useCallback, useEffect, ReactNodeArray } from 'react';
import animejs, { AnimeInstance } from 'animejs';
import { flatten } from './flatten';

export type Easing =
    | 'easeInSine'
    | 'easeOutSine'
    | 'easeInOutSine'
    | 'easeInCirc'
    | 'easeOutCirc'
    | 'easeInOutCirc'
    | 'easeInElastic'
    | 'easeOutElastic'
    | 'easeInOutElastic'
    | 'easeInBack'
    | 'easeOutBack'
    | 'easeInOutBack'
    | 'easeInBounce'
    | 'easeOutBounce'
    | 'easeInOutBounce'
    | 'easeInQuad'
    | 'easeOutQuad'
    | 'easeInOutQuad'
    | 'easeInCubic'
    | 'easeOutCubic'
    | 'easeInOutCubic'
    | 'easeInQuart'
    | 'easeOutQuart'
    | 'easeInOutQuart'
    | 'easeInQuint'
    | 'easeOutQuint'
    | 'easeInOutQuint'
    | 'easeInExpo'
    | 'easeOutExpo'
    | 'easeInOutExpo'
    | 'linear'
    | [number, number, number, number];

export type AnimeValue =
    | {
          value: string | number;
          delay: ((el: Element, index?: number, len?: number) => number) | number;
          duration?: ((el: Element, index?: number, len?: number) => number) | number;
          easing?: Easing;
      }
    | string
    | number
    | ((el: Element, index?: number) => string | number);

export type AnimeProps = {
    children: React.ReactNode;
    delay?: ((el: Element, index?: number, len?: number) => number) | number;
    duration?: ((el: Element, index?: number, len?: number) => number) | number;
    autoplay?: boolean;
    loop?: number | boolean;
    direction?: 'normal' | 'reverse' | 'alternate';
    easing?: Easing;
    elasticity?: number;
    round?: number | boolean;
    component: React.ComponentType;
    begin?: Function;
    update?: Function;
    complete?: Function;

    // DOM
    value?: AnimeValue | AnimeValue[];

    // Transformations
    translateX?: AnimeValue | AnimeValue[];
    translateY?: AnimeValue | AnimeValue[];
    rotate?: AnimeValue | AnimeValue[];
    scale?: AnimeValue | AnimeValue[];

    // CSS
    opacity?: AnimeValue | AnimeValue[];
    color?: AnimeValue | AnimeValue[];
    backgroundColor?: AnimeValue | AnimeValue[];

    //SVG
    points?: AnimeValue | AnimeValue[];
    strokeDashoffset?: AnimeValue | AnimeValue[];

    // Custom Props
    [prop: string]: any;
};

const PREFIX = '__anime__';

export default function Anime(props: AnimeProps) {
    const targets = useRef<any[]>([]);
    const targetRefs = useRef<any[]>([]);
    const anime = useRef<AnimeInstance | null>(null);
    const completed = useRef<Set<any> | null>(new Set<any>());

    const createAnime = useCallback(
        () => {
            if (targets.current.length > 0 && anime !== undefined) animejs.remove(targets);
            targets.current = [];
            for (let ref of targetRefs.current) {
                if (ref.current && !completed.current.has(ref.current)) targets.current.push(ref.current);
            }

            /* istanbul ignore next */
            const complete = (ani: AnimeInstance) => {
                if (props.complete) props.complete(ani);
                ani.animatables.map((a: any) => completed.current.add(a.target));
            };
            const animeProps: any = {
                ...props,
                targets: targets.current,
                complete
            };
            delete animeProps.children;
            delete animeProps.svg;
            anime.current = animejs(animeProps);
        },
        [ props ]
    );

    useEffect(
        () => {
            createAnime();
        },
        [ createAnime ]
    );

    const refs = targetRefs.current;
    let children: ReactNodeArray = Array.isArray(props.children) ? props.children : [ props.children ];
    children = flatten(children);
    return (
        <Fragment>
            {children.map((child: any, i: number) => {
                refs.push(React.createRef());
                // eslint-disable-next-line
                const El = props.component ? props.component : 'div';
                return (
                    <El ref={refs[refs.length - 1]} key={`${PREFIX}${i}`}>
                        {child}
                    </El>
                );
            })}
        </Fragment>
    );
}
