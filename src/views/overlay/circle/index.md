/**
 *@title：
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Circle } from 'rc-bmap';
import { Button } from 'antd';

class CircleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      point: { lng: 116.404, lat: 39.915 },
      radius: 500,
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
      point, radius, strokeColor, fillColor, strokeWeight,
      strokeOpacity, fillOpacity, strokeStyle, massClear, editing, clicking, events,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <Circle
            point={point}
            radius={radius}
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
  <CircleExample />,
  document.getElementById('root'),
);
