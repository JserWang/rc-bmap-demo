import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'rc-bmap';

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
      <div>
        <div style={{ height: '50vh' }}>
          <Map
            ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
            center={center}
            zoom={15}
            scrollWheelZoom
          />
        </div>
        <div style={{ height: '50vh' }}>
          <Map
            ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
            center={center}
            zoom={15}
            scrollWheelZoom
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
