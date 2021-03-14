// eslint-disable-next-line
import React, { Fragment, useRef, useCallback, useEffect, ReactNodeArray } from 'react';
import animejs, { AnimeInstance } from 'animejs';
import { flatten } from './flatten';
import { AnimeProps, Easing, AnimeValue, PREFIX } from './types';

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

export { AnimeProps, AnimeValue, AnimeInstance, Easing, animejs as anime };
