import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Base } from 'rc-bmap';

const { Point } = Base;

class Example extends Component {
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={8}
          minZoom={4}
          maxZoom={8}
          scrollWheelZoom
        >
          <Point name="center" lng="116.404" lat="39.915" />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
