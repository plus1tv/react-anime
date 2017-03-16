import * as React from 'react';
import { HashRouter, Match, Miss, Link, Redirect } from 'react-router';
import { Home, Api, CascadingList, ReactRouter, Svg } from './views';
import { Nav } from './components';
import { css } from 'glamor';
import Anime from 'react-anime';

const styles = {
  root: css({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'row'
}),
  page: css({
    padding: '2em .5em'
  })
};

let FadeAnime = ({children}) => (<Anime opacity={[0, 1]}>{children}</Anime>);

export default (
  <HashRouter>
    <div {...styles.root}>
      <Nav />
      <div {...styles.page}>
        <Match exactly pattern="/" component={Home} />
        <Match pattern="/api" component={Api} />
        <Match
          pattern="/examples"
          render={() => <Redirect to="/cascading-list" />}
        />
        <Match pattern="/cascading-list" component={CascadingList} />
        <Match pattern="/react-router" component={ReactRouter} />
        <Match pattern="/svg" component={Svg} />
        <Miss render={() => <Redirect to="/" />} />
      </div>
    </div>
  </HashRouter>
)
