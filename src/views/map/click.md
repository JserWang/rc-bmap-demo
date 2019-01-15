import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Base } from 'rc-bmap';

const { Point } = Base;

const Example = () => (
  <div style={{ height: '100vh' }}>
    <Map
      ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
      zoom={12}
      mapClick={false}
    >
      <Point name="center" lng="116.404" lat="39.915" />
    </Map>
  </div>
);

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
