/**
 *@title：
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, Label } from 'rc-bmap';

class MarkerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      point: { lng: 116.404, lat: 39.915 },
      offset: { width: 10, height: 10 },
      content: '我是文字标注哦',
      style: {
        color: 'red',
        fontSize: '12px',
        height: '20px',
        lineHeight: '20px',
        fontFamily: '微软雅黑',
      },
    };
  }

  render() {
    const {
      point, offset, content, style
    } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <Marker
            point={point}
          />
          <Label
            point={point}
            offset={offset}
            content={content}
            style={style}
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
