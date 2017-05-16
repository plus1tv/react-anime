import * as React from 'react';
import { HashRouter, Route, Link, Redirect } from 'react-router-dom';
import { Home, Api, CascadingList, ReactRouter, Svg } from './views';
import { Nav } from './components';
import { css } from 'glamor';
import Anime from 'react-anime';

const styles = {
  root: css({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row'
}),
  page: css({
    padding: '3em 2em'
  })
};

let FadeAnime = ({children}) => (<Anime opacity={[0, 1]}>{children}</Anime>);

export default (
  <HashRouter>
    <div {...styles.root}>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/api" component={Api} />
        <Route
          path="/examples"
          render={() => <Redirect to="/cascading-list" />}
        />
        <Route exact path="/cascading-list" component={CascadingList} />
        <Route exact path="/react-router" component={ReactRouter} />
        <Route exact path="/svg" component={Svg} />
        <Route render={() => <Redirect to="/" />} />
      </div>
    </div>
  </HashRouter>
)
