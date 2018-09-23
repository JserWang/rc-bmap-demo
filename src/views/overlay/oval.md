import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Polygon } from 'rc-bmap';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lng: 116.404,
        lat: 39.915,
      },
      points: [],
    };
  }

  addOval = (centre, x, y) => {
    const assemble = [];
    let angle;
    let dot;
    const tangent = x / y;
    for (let i = 0; i < 36; i += 1) {
      angle = (2 * Math.PI / 36) * i;
      dot = new window.BMap.Point(
        centre.lng + Math.sin(angle) * y * tangent, centre.lat + Math.cos(angle) * y,
      );
      assemble.push(dot);
    }
    return assemble;
  }

  mapMounted = (mapInstance) => {
    const { center } = this.state;
    this.setState({
      points: this.addOval(center, 0.1, 0.3),
    });
  }

  render() {
    const { center, points } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          scrollWheelZoom
          zoom={10}
          mapMounted={this.mapMounted}
          center={center}
        >
          <Polygon
            points={points}
            strokeColor="blue"
            strokeWeight={6}
            strokeOpacity={0.5}
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
