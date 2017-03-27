import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { css } from 'glamor';

let styles = {
  root: css({
    boxSizing: 'content-box',
    width: 256,
    padding: '3em 1.2em 1.2em',
    lineHeight: '1.25em',
    backgroundColor: '#121215'
  }),
  ul: css({ paddingLeft: '.5em' }),
  li: css({ paddingBottom: '2em' }),
  link: css({ padding: '.25em 0'}),
  i: css({ fontSize: '.75em', opacity: 0.75 }),
};

export class Nav extends Component {
  render() {

    let active = { exact: true, activeStyle: { color: '#61b1ff' } };

    return (
      <ul {...styles.root}>
        <li {...styles.li}><img src="/assets/logo-big.svg" /></li>
        <li {...styles.li}><NavLink to="/" {...active}>Home</NavLink></li>
        <li {...styles.li}>
          <i {...styles.i}>EXAMPLES</i>
          <ul {...styles.ul}>
            <li {...styles.link}>
              <NavLink to="/cascading-list" {...active}>Cascading List</NavLink>
            </li>
            <li {...styles.link}>
              <NavLink to="/react-router" {...active}>React Router</NavLink>
            </li>
            <li {...styles.link}>
              <NavLink to="/svg" {...active}>SVGs</NavLink>
              </li>
          </ul>
        </li>
        <li><NavLink to="/api" {...active}>API</NavLink></li>
      </ul>
    );
  }
}
