import React, { Fragment, Component } from 'react';
import isEqual from 'lodash.isequal';
const anime = typeof window !== 'undefined' ? require('animejs') : (_) => _;

export class Anime extends Component {
    props: AnimeProps;

    targets: any[];

    constructor(props: AnimeProps) {
        super(props);

        // Current Anime DOM Targets
        this.targets = [];

        // Time based children store
        let { children } = props;
        if (!Array.isArray(children)) children = [ children ];
        this.children = {
            cur: children,
            prev: [],
            next: []
        };
    }

    componentDidMount() {
        this.createAnime();
    }

    componentWillReceiveProps(nextProps) {
        let { children } = nextProps;
        let prevChildren = this.props.children;

        if (!Array.isArray(children)) children = [ children ];
        if (!Array.isArray(prevChildren)) prevChildren = [ prevChildren ];

        // Determine diff children
        let difChildren = children.filter((v) => !prevChildren.reduce((prev, cur) => prev || isEqual(v, cur), false));

        // Determine if children are added/removed
        let childrenWereRemoved = difChildren.reduce((prev, cur) => prev || prevChildren.indexOf(cur) > -1, false);

        // Split children to current, old, and new
        this.children = {
            cur: children.filter((c) => difChildren.indexOf(c) < 0),
            prev: childrenWereRemoved ? difChildren : this.children.prev,
            next: !childrenWereRemoved ? difChildren : this.children.next
        };

        this.createAnime(nextProps);
    }

    createAnime = (props = this.props) => {
        let animeProps = { targets: this.targets, ...props };

        anime.remove(this.targets);
        delete animeProps.children;

        if (typeof this.anime === undefined) this.anime = anime(animeProps);
    };

    addTarget = (newTarget) => {
        this.targets = [ ...this.targets, newTarget ];
    };

    /**
   * Render children, and their diffs until promise of anime finishes.
   */
    render() {
        let { style } = this.props;
        let { cur, prev, next } = this.children;

        return <Fragment>{cur.map((child, i) => React.cloneElement(child, { key: i, ref: this.addTarget }))}</Fragment>;
    }
}

export default Anime;
