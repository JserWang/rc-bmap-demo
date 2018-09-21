/**
 *@title：设置覆盖物的显示/隐藏
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Map, Circle, Marker, Polygon, Polyline,
} from 'rc-bmap';
import { Button } from 'antd';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circle: {
        point: {
          lng: 116.404,
          lat: 39.915,
        },
        radius: 500,
        strokeColor: 'blue',
        strokeWeight: 2,
        strokeOpacity: 0.5,
      },
      polyline: {
        points: [
          {
            lng: 116.399,
            lat: 39.910,
          },
          {
            lng: 116.405,
            lat: 39.920,
          },
          {
            lng: 116.425,
            lat: 39.900,
          },
        ],
        strokeColor: 'blue',
        strokeWeight: 2,
        strokeOpacity: 0.5,
      },
      isShow: false,
    };
  }

  addOverlay = () => {
    this.setState({
      isShow: true,
    });
  }

  removeOverlay = () => {
    this.setState({
      isShow: false,
    });
  }

  render() {
    const {
      circle, polyline, isShow,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          {isShow
          && (<div>
            <Circle
              point={circle.point}
              radius={circle.radius}
              strokeColor={circle.strokeColor}
              strokeWeight={circle.strokeWeight}
              strokeOpacity={circle.strokeOpacity}
            />
            <Polyline
              points={polyline.points}
              strokeColor={polyline.strokeColor}
              strokeWeight={polyline.strokeWeight}
              strokeOpacity={polyline.strokeOpacity}
            />
            <Marker point={circle.point} />
              </div>
          )}
        </Map>
        <Button onClick={this.addOverlay}>显示</Button>
        <Button onClick={this.removeOverlay}>隐藏</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
