import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  Base,
  Marker,
  Constants,
} from 'rc-bmap';

const { Point } = Base;
const { ANIMATION } = Constants;

const Example = () => (
  <div style={{ height: '100vh' }}>
    <Map
      ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
      zoom={15}
      scrollWheelZoom
    >
      <Point name="center" lng="116.404" lat="39.915" />
      <Marker animation={ANIMATION.BOUNCE}>
        <Point lng="116.404" lat="39.915" />
      </Marker>
    </Map>
  </div>
);

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
