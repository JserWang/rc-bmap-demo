import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  Control,
  ReactComponent,
} from 'rc-bmap';

@ReactComponent
class CustomControl extends Control {
  handleClick() {
    const map = window.bMapInstance;
    const newZoom = map.getZoom() + 2;
    map.setZoom(newZoom);
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: '#fff',
          cursor: 'pointer',
          border: '1px solid #333',
        }}
        onClick={this.handleClick}
      >
        放大2级
      </div>
    );
  }
}

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lng: 116.404,
        lat: 39.915,
      },
    };
  }

  render() {
    const { center } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          center={center}
          zoom={11}
          scrollWheelZoom
        >
          <CustomControl />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
