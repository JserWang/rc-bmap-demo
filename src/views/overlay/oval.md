/**
 *@title：添加椭圆
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Polygon } from 'rc-bmap';

class PolygonExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      point: {
        lng: 116.387,
        lat: 39.920,
      },
      strokeColor: 'blue',
      fillColor: 'red',
      strokeWeight: 5,
      strokeOpacity: 0.5,
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

  render() {
    const {
      point, strokeColor, fillColor, strokeWeight, strokeOpacity,
    } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
          mapMounted={this.handleMapMounted}
        >
          <Polygon
            points={this.addOval(point, 0.1, 0.3)}
            strokeColor={strokeColor}
            fillColor={fillColor}
            strokeWeight={strokeWeight}
            strokeOpacity={strokeOpacity}
          />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <PolygonExample />,
  document.getElementById('root'),
);
