import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Container from 'components/Container';

const markdownFiles = require.context('./views', true, /\.md$/);
const keys = markdownFiles.keys();
const routes = keys.map(key => markdownFiles(key));

const getExample = code => () => (<Container code={code} />);
const getPath = path => path.substring(1, path.length - 3);
export default () => (
  <Switch>
    <React.Fragment>
      {
        routes.map((route, i) => (
          <Route
            key={getPath(keys[i])}
            exact
            path={getPath(keys[i])}
            component={getExample(route)}
          />
        ))
      }
      {/* <Redirect from="/" exact to="/map/show" /> */}
    </React.Fragment>
  </Switch>
);
