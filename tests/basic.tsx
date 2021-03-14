import '@testing-library/jest-dom'
import React from 'react';
import {render} from '@testing-library/react';
import Anime from '../src/react-anime';

//snapshot test
it('1 child delayed fade in', () => {
  const tree = render(
    <Anime
      easing="easeOutElastic"
      loop={true}
      duration={1000}
      direction="alternate"
      delay={(_, index) => index * 240}>
      <p>1</p>
    </Anime>);

  expect(tree.asFragment()).toMatchSnapshot();
});
