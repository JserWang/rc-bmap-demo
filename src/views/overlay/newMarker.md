/**
 *@title：设置点的新图标
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker } from 'rc-bmap';

class MarkerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markerPoint: { lng: 116.404, lat: 39.915 },
      icon: {
        url: 'http://lbsyun.baidu.com/jsdemo/img/fox.gif',
        size: {
          width: 300,
          height: 157,
        },
        opts: {
          imageOffset: { width: 10, height: 10 },
        },
      },
    };
  }

  render() {
    const {
      markerPoint, icon,
    } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <Marker
            point={markerPoint}
            icon={icon}
          />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <MarkerExample />,
  document.getElementById('root'),
);
