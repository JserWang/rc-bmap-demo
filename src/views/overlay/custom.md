import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  Overlay,
  CustomOverlay as Custom,
  Base,
} from 'rc-bmap';

const { Point } = Base;

@Custom
class CustomOverlay extends Component {
  render() {
    return (
      <div>这是一个自定义图层</div>
    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={15}
          scrollWheelZoom
        >
          <Point name="center" lng="116.3964" lat="39.9093" />
          <CustomOverlay>
          	<Point lng="116.407845"  lat="39.914101" />
          </CustomOverlay>
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
