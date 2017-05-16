import React, { Component } from 'react';
import { Logo } from '../components';

export class Home extends Component {
  render() {
    return (
      <article style={{width: '50vw', height: '50vh'}}>
        <Logo/>
      </article>
    );
  }
}
