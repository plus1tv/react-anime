import React, { Component } from 'react';
import anime from 'animejs';

class Anime extends React.Component {

  constructor(props) {
    super(props);
    this.ref = [];
  }

  componentDidMount() {

    let animeProps = {
          targets: this.ref, 
          ...this.props 
      };

    delete animeProps.children;

    this.anime = anime(animeProps);

  }

addRef = (newRef) => {
  this.ref = [...this.ref, newRef];
}

render() {
  let children = [];
  if (this.props.children) {
    if (Array.isArray(this.props.children))
      children = this.props.children;
    else
      children = [];
  }

  return (
    <div>
      {children.map((child, i) => (React.cloneElement(child, { key: i, ref: this.addRef })))}
    </div>
  );
}
}

export default Anime;
