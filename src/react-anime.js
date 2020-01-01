import React, { Fragment, Component } from 'react';
const anime = typeof window !== 'undefined' ? require('animejs').default : (_) => _;

export class Anime extends Component {
    props: AnimeProps;

    targets: any[];
    targetRefs: any[];

    constructor(props: AnimeProps) {
        super(props);

        // Current Anime DOM Targets
        this.targets = [];
        this.targetRefs = [];
        this.anime = null;
    }

    componentDidMount() {
        this.createAnime();
    }

    componentDidUpdate() {
        this.createAnime();
    }

    createAnime = (props = this.props) => {
        if (this.targets.length > 0 && this.anime !== undefined) {
            anime.remove(this.targets);
        }

        this.targets = [];
        for (let ref of this.targetRefs) {
            if (ref.current) {
                this.targets.push(ref.current);
            }
        }

        let animeProps = { targets: this.targets, ...props };
        delete animeProps.children;
        this.anime = anime(animeProps);
    };

    // Render children, and their diffs until promise of anime finishes.
    render() {
        let children = this.props.children;
        let refs = this.targetRefs;
        if (!Array.isArray(children)) children = [ children ];
        return (
            <Fragment>
                {children.map((child, i) => {
                    refs.push(React.createRef());
                    return (
                        <div ref={refs[refs.length - 1]} key={i}>
                            {child}
                        </div>
                    );
                })}
            </Fragment>
        );
    }
}

export default Anime;
export { anime };
