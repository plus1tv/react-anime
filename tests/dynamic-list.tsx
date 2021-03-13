import React, {useState} from 'react';
import renderer from 'react-test-renderer';
import Anime from '../src/react-anime';

function App(props) {
    let [ state, setState ] = useState({ myList: [ 'First Entry' ] });
    return (
        <div>
            <a
                style={{
                    textAlign: 'center',
                    display: 'block',
                    cursor: 'pointer',
                    userSelect: 'none'
                }}
                onClick={() => setState({ myList: [ ...state.myList, 'New Entry ' + state.myList.length ] })}
            >
                Add Entry
            </a>

            <Anime opacity={[ 0, 1 ]} translateY={'1em'} delay={(e, i) => i * 300}>
                <h1>Entries</h1>
                {state.myList.map((e, i) => (
                    <p key={i}>
                        <a
                            onClick={(_) => setState({ myList: state.myList.filter((__, j) => i !== j) })}
                            style={{ textDecoration: 'none' }}
                        >
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
    const tree = renderer.create(
      <App/>,
      {
        createNodeMock: _ => ({ nodeType: false })
      }
    );
  
    expect(tree.toJSON()).toMatchSnapshot();
  });