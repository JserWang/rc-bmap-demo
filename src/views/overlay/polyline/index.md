import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Polyline } from 'rc-bmap';
import { Button } from 'antd';

class PolylineExample extends Component {
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
      ],
      strokeColor: 'blue',
      strokeWeight: 5,
      strokeOpacity: 0.5,
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
      points, strokeColor, strokeWeight, strokeOpacity,
      strokeStyle, massClear, editing, clicking, events,
    } = this.state;
    return (
      <div style={{ height: '90vhh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <Polyline
            points={points}
            strokeColor={strokeColor}
            strokeWeight={strokeWeight}
            strokeOpacity={strokeOpacity}
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
  <PolylineExample />,
  document.getElementById('root'),
);
