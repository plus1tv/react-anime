import React, { useEffect } from 'react';
let anime = (_) => _;
if (typeof window !== 'undefined') {
    const animejs = require('animejs');
    anime = typeof animejs === 'object' ? animejs.default : animejs;
}

const PREFIX = '__anime__';

const Anime = (props: AnimeProps) => {
    const targets: any[] = [];
    const targetRefs: any[] = [];
    const anime: any = null;

    const createAnime = () => {
        if (targets.length > 0 && anime !== undefined) {
            anime.remove(targets);
        }

        targets = [];
        for (let ref of targetRefs) {
            if (ref.current) {
                targets.push(ref.current);
            }
        }

        let animeProps = { ...props, targets };
        delete animeProps.children;
        delete animeProps.svg;
        anime = anime(animeProps);
    }

    useEffect(() => {
        createAnime();
    }, []);

    let children = props.children;
    let refs = targetRefs;
    if (!Array.isArray(children)) {
        children = [ children ];
    }

    return (
        <>
            {children.map((child, i) => {
                refs.push(React.createRef());
                let El = props.svg ? 'g' : 'div';
                return (
                    <El ref={refs[refs.length - 1]} key={`${PREFIX}${i}`}>
                        {child}
                    </El>
                );
            })}
        </>
    );
}

export default Anime;
export { anime };
