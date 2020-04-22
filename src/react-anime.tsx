// eslint-disable-next-line
import React, { Fragment, useRef, useCallback, useEffect } from 'react';
import animejs, { AnimeInstance } from 'animejs';
import { AnimeProps } from './types';

const PREFIX = '__anime__';

export default function Anime(props: AnimeProps) {
  const targets = useRef<any[]>([]);
  const targetRefs = useRef<any[]>([]);
  const anime = useRef<AnimeInstance | null>(null);

  const createAnime = useCallback(() => {
    if (targets.current.length > 0 && anime !== undefined)
      animejs.remove(targets);

    targets.current = [];
    for (let ref of targetRefs.current) {
      if (ref.current) targets.current.push(ref.current);
    }

    const animeProps: any = { ...props, targets: targets.current };
    delete animeProps.children;
    delete animeProps.svg;
    anime.current = animejs(animeProps);
  }, [props]);

  useEffect(() => {
    createAnime();
  }, [createAnime]);

  const refs = targetRefs.current;
  if (!Array.isArray(props.children)) props.children = [props.children];
  return (
    <Fragment>
      {
        // @ts-ignore
        props.children.map((child: any, i: number) => {
          refs.push(React.createRef());
          // eslint-disable-next-line
          const El = props.svg ? 'g' : 'div';
          return (
            <El ref={refs[refs.length - 1]} key={`${PREFIX}${i}`}>
              {child}
            </El>
          );
        })
      }
    </Fragment>
  );
}
