import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  Overlay,
  CustomOverlay as Custom,
} from 'rc-bmap';

@Custom
class CustomOverlay extends Component {
  render() {
    return (
      <div>这是一个自定义图层</div>
    );
  }
}

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lng: 116.3964,
        lat: 39.9093,
      },
      overlayPoint: {
        lng: 116.407845,
        lat: 39.914101,
      },
    };
  }

  render() {
    const { center, overlayPoint } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          center={center}
          zoom={15}
          scrollWheelZoom
        >
          <CustomOverlay point={overlayPoint} />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
