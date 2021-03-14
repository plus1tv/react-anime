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
  const anime = useRef<AnimeInstance | null>(null);
  // Currently fed Anime targets
  const targets = useRef<AnimeSet>(new Set<any>());
  //Current refs
  const targetRefs = useRef<any[]>([]);
  // Completed Anime targets
  const completed = useRef<AnimeSet>(new Set<any>());

  const createAnime = useCallback(async () => {
    // ⏰ Await currently running animations
    if (anime.current && anime.current.finished) {
      await anime.current.finished;
    }

    // 🗾 Reset Anime.js
    /* istanbul ignore next */
    if (targets.current.size > 0) animejs.remove(targets);
    targets.current.clear();

    // ➕ Add new target references that haven't completed
    for (let ref of targetRefs.current) {
      /* istanbul ignore next */
      if (ref.current && !completed.current.has(ref.current))
        targets.current.add(ref.current);
    }

    // 😮 Overload complete callback
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
