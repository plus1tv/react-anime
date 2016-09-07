import React from 'react';
import renderer from 'react-test-renderer';
import Anime from './../src/Anime.js';

// refular function / expression test / unit test
test('Anime', () => {
  expect(1).toBe(1);
})

//snapshot test
it('Anime Snapshot', () => {
  const tree = renderer.create(
    <Anime />
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
