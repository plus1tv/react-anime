import React, {
  Fragment,
  useRef,
  useCallback,
  useEffect,
  ReactNodeArray
} from 'react';
import animejs, { AnimeInstance } from 'animejs';

import { flatten } from './flatten';
import { AnimeProps, Easing, AnimeValue, PREFIX } from './types';

type AnimeSet = Set<any>;

export default function Anime(props: AnimeProps) {
  // Current anime instance
  const animes = useRef<AnimeInstance[]>([]);
  // Currently fed Anime targets
  const targets = useRef<Element[]>([]);
  //Current refs
  const targetRefs = useRef<{ current: Element }[]>([]);
  // Completed Anime targets
  const completed = useRef<AnimeSet>(new Set<Element>());

  /* istanbul ignore next */
  const cleanupAnimeStack = () => {
    for (let ani of animes.current) {
      if (ani.completed) animes.current = animes.current.filter(a => a != ani);
    }
    targets.current = targets.current.filter(t => t != undefined && t != null);
    targetRefs.current = targetRefs.current.filter(t => t && t.current != null);
  };

  const cycleAnime = props => {
    // 🚽 Clean anime refs
    cleanupAnimeStack();

    // 🗾 Reset Anime.js
    /* istanbul ignore next */
    if (targets.current.length > 0) animejs.remove(targets);
    targets.current = [];

    // ➕ Add new target references that haven't completed
    for (let ref of targetRefs.current) {
      /* istanbul ignore next */
      if (ref.current && !completed.current.has(ref.current))
        targets.current.push(ref.current);
    }

    // 😮 Overload complete callback
    /* istanbul ignore next */
    const complete = (ani: AnimeInstance) => {
      if (props.complete) props.complete(ani);
      ani.animatables.map((a: any) => completed.current.add(a.target));
      cleanupAnimeStack();
    };
    const animeProps: any = {
      ...props,
      targets: targets.current,
      complete
    };
    delete animeProps.children;
    delete animeProps.svg;
    animes.current.push(animejs(animeProps));
  };

  const createAnime = useCallback(() => {
    cycleAnime(props);
  }, [props]);

  useEffect(() => {
    createAnime();
  }, [createAnime]);

  const refs = targetRefs.current;
  /* istanbul ignore next */
  let children: ReactNodeArray = Array.isArray(props.children)
    ? props.children
    : [props.children];
  children = flatten(children);
  return (
    <Fragment>
      {children.map((child: any, i: number) => {
        refs.push(React.createRef());
        /* istanbul ignore next */
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
