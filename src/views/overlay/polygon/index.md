import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Polygon } from 'rc-bmap';
import { Button } from 'antd';

class PolygonExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: [
        {
          lng: 116.387,
          lat: 39.920,
        }, {
          lng: 116.385,
          lat: 39.913,
        },
        {
          lng: 116.394,
          lat: 39.917,
        },
      ],
      strokeColor: 'blue',
      fillColor: 'red',
      strokeWeight: 5,
      strokeOpacity: 0.5,
      fillOpacity: 0.9,
      strokeStyle: 'dashed',
      massClear: false,
      editing: false,
      clicking: true,
      events: {
        click: this.handleClick,
      },
    };
  }

  render() {
    const {
      points, strokeColor, fillColor, strokeWeight, strokeOpacity,
      fillOpacity, strokeStyle, massClear, editing, clicking, events,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <Polygon
            points={points}
            strokeColor={strokeColor}
            fillColor={fillColor}
            strokeWeight={strokeWeight}
            strokeOpacity={strokeOpacity}
            fillOpacity={fillOpacity}
            strokeStyle={strokeStyle}
            massClear={massClear}
            editing={editing}
            clicking={clicking}
            events={events}
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
