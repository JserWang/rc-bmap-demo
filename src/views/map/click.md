import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'rc-bmap';

class Example extends Component {
  state = {
    center: {
      lng: 116.404,
      lat: 39.915,
    },
  }

  render() {
    const { center } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          center={center}
          zoom={12}
          mapClick={false}
        >
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
