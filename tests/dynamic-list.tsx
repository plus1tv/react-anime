import React, { useEffect, useState } from 'react';
import renderer, { act } from 'react-test-renderer';
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
    let renderConfig = {
        createNodeMock: (_) => ({ nodeType: false })
    };
    let node = <App />;

    // Effect test
    act(() => {
        const tree = renderer.create(node, renderConfig);
        expect(tree.toJSON()).toMatchSnapshot();
    });
});
