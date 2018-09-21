/**
 *@title：设置点的是否可拖拽
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker } from 'rc-bmap';
import { Button } from 'antd';

class MarkerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markerPoint: { lng: 116.404, lat: 39.915 },
      dragging: false,
    };
  }

  dragging = () => {
    this.setState({
      dragging: true,
    });
  }

  noDragging = () => {
    this.setState({
      dragging: false,
    });
  }

  render() {
    const {
      markerPoint, dragging,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <Marker
            point={markerPoint}
            dragging={dragging}
          />
          <Button onClick={this.dragging}>可拖拽</Button>
          <Button onClick={this.noDragging}>不可拖拽</Button>
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <MarkerExample />,
  document.getElementById('root'),
);
