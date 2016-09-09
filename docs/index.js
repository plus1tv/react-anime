import React from 'react';
import { render } from 'react-dom';
import Anime from 'react-anime';

let App = () =>
      <Anime easing="easeOutElastic"
           loop={true}
           duration={1000}
           direction="alternate"
           loop={true}
           delay={(el, index) => index * 240}
           translateX='13rem'
           scale={[.75, .9]}>
        <div className="blue"/>
        <div className="green"/>
        <div className="red"/>
      </Anime>

let node = document.getElementById('app');

render(<App/>, node);
