import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, Label } from 'rc-bmap';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lng: 116.400244,
        lat: 39.92556,
      },
      label: {
        offset: { width: 20, height: -10 },
        content: '我是文字标注哦',
      },
    };
  }

  render() {
    const { center, label } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          center={center}
          zoom={12}
          scrollWheelZoom
        >
          <Marker
            point={center}
            label={<Label {...label} />}
          />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
