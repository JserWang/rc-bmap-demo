import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Container from 'components/Container';

import MapCode from 'views/map/index.md';

const getExample = code => () => (<Container code={code} />);

const route = () => (
  <Switch>
    <Route exact path="/" component={getExample(MapCode)} />
    <Route exact path="/map" component={getExample(MapCode)} />

  </Switch>
);

export default route;
