/**
 *@title：添加弧线
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  CurveLine,
} from 'rc-bmap';
import { Button } from 'antd';

class CurveLineExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: [
        { lng: 116.432045, lat: 39.910683 },
        { lng: 120.129721, lat: 30.314429 },
        { lng: 121.491121, lat: 25.127053 },
      ],
      zoom: 6,
      center: {
        lng: 120.129721,
        lat: 30.314429,
      },
      strokeColor: 'blue',
      strokeWeight: 3,
      strokeOpacity: 0.5,
      editing: false,
      events: {
        click() {
          console.log('CurveLine click');
        },
      },
    };
  }

  render() {
    const {
      zoom, center, points, strokeColor, strokeWeight, strokeOpacity, events, editing,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
          zoom={zoom}
          center={center}
        >
          <CurveLine
            points={points}
            strokeColor={strokeColor}
            strokeWeight={strokeWeight}
            strokeOpacity={strokeOpacity}
            editing={editing}
            events={events}
          />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <CurveLineExample />,
  document.getElementById('root'),
);
