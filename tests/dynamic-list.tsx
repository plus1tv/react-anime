import { useState } from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Anime from '../src/react-anime';

function App(props) {
  let [state, setState] = useState({ myList: ['First Entry'] });

  return (
    <div>
      <a
        style={{
          textAlign: 'center',
          display: 'block',
          cursor: 'pointer',
          userSelect: 'none'
        }}
        onClick={() => {
          setState({
            myList: [...state.myList, 'New Entry ' + state.myList.length]
          });
        }}>
        Add Entry
      </a>
      <Anime
        opacity={[0, 1]}
        translateY={'1em'}
        delay={(e, i) => i * 300}
        complete={() => console.log('Completed!')}>
        <h1>Entries</h1>
        {state.myList.map((e, i) => (
          <p key={i}>
            <a
              onClick={_ =>
                setState({ myList: state.myList.filter((__, j) => i !== j) })
              }
              style={{ textDecoration: 'none' }}>
              ❌
            </a>{' '}
            {e}
          </p>
        ))}
      </Anime>
    </div>
  );
}

//snapshot test
it('dynamic list', () => {
  let node = render(<App />);
  fireEvent.click(node.getByText('Add Entry'));
  fireEvent.click(node.getByText('Add Entry'));
  return waitFor(
    () => {
      expect(node.asFragment()).toMatchSnapshot();
    },
    { timeout: 300 * 5 }
  );
});
