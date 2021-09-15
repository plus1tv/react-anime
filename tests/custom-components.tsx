import '@testing-library/jest-dom';
import { forwardRef } from 'react';
import { render } from '@testing-library/react';
import Anime from '../src/react-anime';

const MyComponent = forwardRef((props, ref: any) => (
  <div ref={ref}>{props.children}</div>
));

//snapshot test
it('custom components', () => {
  const tree = render(
    <div>
      <Anime component={null}>
        <p>1</p>
      </Anime>
      <Anime component="section">
        <p>2</p>
      </Anime>
      <Anime component={MyComponent}>
        <p>3</p>
        <p>4</p>
        <p>5</p>
      </Anime>
      <Anime />
    </div>
  );
  expect(tree.asFragment()).toMatchSnapshot();
});
