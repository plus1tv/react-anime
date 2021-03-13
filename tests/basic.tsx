import React from 'react';
import renderer from 'react-test-renderer';
import Anime from '../src/react-anime';

//snapshot test
it('2 children delayed fade in', () => {
  const tree = renderer.create(
    <Anime
      easing="easeOutElastic"
      loop={true}
      duration={1000}
      direction="alternate"
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
