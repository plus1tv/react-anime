// @ts-ignore
import React from 'react';
// @ts-ignore
import { renderToString } from 'react-dom';
import renderer from 'react-test-renderer';
// @ts-ignore
import Anime from '../src/react-anime';

const reactAnimationFrame = (function () {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame =
      window[vendors[x] + 'CancelAnimationFrame'] ||
      window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
})();

//snapshot test
it('2 children delayed fade in', () => {
  const tree = renderer.create(
    <Anime
      easing="easeOutElastic"
      loop={true}
      duration={1000}
      direction="alternate"
      loop={true}
      delay={(_, index) => index * 240}>
      <p>1</p>
      <p>2</p>
    </Anime>,
    {
      createNodeMock: _ => ({ nodeType: false })
    }
  );

  expect(tree.toJSON()).toMatchSnapshot();
});
