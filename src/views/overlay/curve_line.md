import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  CurveLine,
} from 'rc-bmap';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: [
        { lng: 116.432045, lat: 39.910683 },
        { lng: 120.129721, lat: 30.314429 },
        { lng: 121.491121, lat: 25.127053 },
      ],
      center: {
        lng: 118.454,
        lat: 30.314429,
      },
    };
  }

  render() {
    const {
      center, points,
    } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          scrollWheelZoom
          zoom={6}
          center={center}
        >
          <CurveLine
            points={points}
            strokeColor="blue"
            strokeWeight={3}
            strokeOpacity={0.5}
            editing
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
