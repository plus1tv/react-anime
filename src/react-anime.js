import React, { Component } from 'react';
import anime from 'animejs';

class Anime extends Component {
  props: AnimeProps;
  targets: any[];

  constructor(props: AnimeProps) {
    super(props);

    this.targets = [];
  }

  componentDidMount() {
    this.createAnime(this.props);
  }

  componentDidUpdate() {
    this.createAnime(this.props);
  }

  createAnime = (props: AnimeProps) => {
    let prevTargets = this.targets.filter(v => !document.body.contains(v));
    this.targets = this.targets.filter(v => document.body.contains(v));

    let animeProps = { targets: this.targets, ...props };

    delete animeProps.children;

    if (typeof this.anime === undefined)
      this.anime = anime(animeProps);
    else {
      this.anime.remove(prevTargets);
      this.anime = anime(animeProps);
    }
  };

  addTarget = newTarget => {
    this.targets = [ ...this.targets, newTarget ];
  };

  render() {
    let children = [];

    if (this.props.children) {
      if (Array.isArray(this.props.children))
        children = this.props.children;
      else
        children = [ this.props.children ];
    }

    return (
      <g>
        {
          children.map(
            (child, i) =>
              React.cloneElement(child, { key: i, ref: this.addTarget })
          )
        }
      </g>
    );
  }
}

export default Anime;
