import React from 'react';
import renderer from 'react-test-renderer';
import Anime from './../src/Anime.js';
const reactAnimationFrame = (function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

//snapshot test
it('Anime single child Snapshot', () => {
  const tree = renderer.create(
    <Anime easing="easeOutElastic"
           loop={true}
           duration={1000}
           direction="alternate"
           loop={true}
           delay={(el, index) => index * 240}
           translateX='13rem'
           scale={[.75, .9]}>
           <p>1</p>
      </Anime>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})

it('Anime multi-child Snapshot', () => {
  const tree = renderer.create(
    <Anime easing="easeOutElastic"
           loop={true}
           duration={1000}
           direction="alternate"
           loop={true}
           delay={(el, index) => index * 240}
           translateX='13rem'
           scale={[.75, .9]}>
           <p>1</p>
           <p>2</p>
           <p>3</p>
      </Anime>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
