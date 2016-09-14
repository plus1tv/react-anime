import React from 'react';
import { render } from 'react-dom';
import Anime from './../dist/anime.js';

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
      </Anime>

let node = document.getElementById('app');

render(<App/>, node);
