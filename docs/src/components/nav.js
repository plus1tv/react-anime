import React, { Component } from 'react';
import { Link } from 'react-router';
import { css } from 'glamor';

let styles = {
  root: css({
    boxSizing: 'content-box',
    width: 160,
    padding: '3em 1.2em 1.2em',
    lineHeight: '1.25em',
  }),
  ul: css({ paddingLeft: '.5em' }),
  li: css({ paddingBottom: '2em' }),
  i: css({ fontSize: '.75em', opacity: 0.75 }),
};

export class Nav extends Component {
  render() {
    let active = { activeOnlyWhenExact: true, activeStyle: { color: '#61b1ff' } };
    return (
      <ul {...styles.root}>
        <li {...styles.li}><img src="/assets/logo-big.svg" /></li>
        <li {...styles.li}><Link to="/" {...active}>Home</Link></li>
        <li {...styles.li}>
          <i {...styles.i}>EXAMPLES</i>
          <ul {...styles.ul}>
            <li>
              <Link to="/cascading-list" {...active}>Cascading List</Link>
            </li>
            <li>
              <Link to="/react-router" {...active}>React Router</Link>
            </li>
            <li><Link to="/svg" {...active}>SVGs</Link></li>
          </ul>
        </li>
        <li><Link to="/api" {...active}>API</Link></li>
      </ul>
    );
  }
}
