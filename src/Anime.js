import React, { Component } from 'react';
import anime from 'animejs';

class Anime extends Component {

  constructor(props) {
    super(props);
    this.targets = [];
  }

  componentDidMount() {

    let animeProps = {
      targets: this.targets,
          ...this.props
  };

    delete animeProps.children;

this.anime = anime(animeProps);

  }

addTarget = (newTarget) => {
  this.targets = [...this.targets, newTarget];
}

render() {
  let children = [];
  if (this.props.children) {
    if (Array.isArray(this.props.children))
      children = this.props.children;
    else
      children = [this.props.children];
  }

  return (
    <g>
      {children.map((child, i) => (React.cloneElement(child, { key: i, ref: this.addTarget })))}
    </g>
  );
  }
}

export default Anime;
