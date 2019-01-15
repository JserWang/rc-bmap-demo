import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  TrafficLayer,
  Base,
} from 'rc-bmap';
import { Input, Button } from 'antd';

const { Point } = Base;

class Example extends Component {

  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          scrollWheelZoom
          zoom={16}
        >
          <Point name="center" lng="116.332782" lat="40.007978" />
          <TrafficLayer />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
