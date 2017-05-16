import React, { Component } from 'react';
import Anime from 'react-anime';
import randomColor from 'randomcolor';

/**
 * A simple cascading list that animates as it
 * mounts/dismounts and items are removed/added.
 */
export class CascadingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: true,
      list: [ rcol(), rcol(), rcol() ],
    };
  }

  addList = () =>
    this.setState((prev, props) => ({ list: [ ...prev.list, rcol() ] }));

  popList = index => () =>
    this.setState((prev, props) => ({
      list: prev.list.filter((v, i) => index !== i),
    }));

  toggleMount = () =>
    this.setState((prev, props) => ({ mounted: !prev.mounted }));

  render() {
    let { mounted, list } = this.state;

    let ListNode = (
      <Anime
        opacity={[ 0, 1 ]}
        translateY={[ -64, 0 ]}
        delay={(el, i) => i * 200}
      >
        {list.map((v, i) => (
            <div
              style={
                {
                  textAlign: 'center',
                  padding: 4,
                  margin: 4,
                  borderRadius: 2,
                  background: v,
                }
              }
              key={i}

            >
              {v}
            </div>
          ))}
      </Anime>
    );

    return (
      <div>
        {mounted ? ListNode : null}
        <div>
          <a onClick={this.addList}>Add to List</a>
          <a onClick={this.toggleMount}>
            {mounted ? 'Unmount List' : 'Mount List'}
          </a>
        </div>
      </div>
    );
  }
}

function rcol() {
  return randomColor({ luminosity: 'light', hue: 'blue' });
}
