import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Boundary } from 'rc-bmap';
import { Button } from 'antd';

class BoundaryExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '杭州市萧山区',
      onError: this.onError,
      autoViewport: true,
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
        click: this.onClick,
      },
    };
  }

  render() {
    const {
      name, onError, autoViewport, strokeColor,
      fillColor, strokeWeight, strokeOpacity, fillOpacity, strokeStyle,
      massClear, editing, clicking, events,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
        >
          <Boundary
            name={name}
            onError={onError}
            autoViewport={autoViewport}
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
  <BoundaryExample />,
  document.getElementById('root'),
);
