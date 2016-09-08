import React, { Component } from 'react';
import anime from 'animejs';

class Anime extends React.Component {

  constructor (props) {
    super(props);
    this.ref = [];
  }

  componentDidMount () {
    let c = Object.assign({targets: this.ref}, this.props);
    this.anime = anime(c);
  }

  addRef = (newRef) => {
    this.ref = [...this.ref, newRef];
  }

  render () {
    let children = [];
    if (this.props.children) {
      if (Array.isArray(this.props.children))
        children = this.props.children;
      else
        children = [];
    }

    return  (
      <div>
        {children.map((child, i) => (React.cloneElement(child, {key: i, ref: this.addRef})))}
      </div>
    );
  }
}

export default Anime;
