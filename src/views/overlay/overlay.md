/**
 *@title：添加/删除覆盖物
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
      polygon: {
        points: [
          {
            lng: 116.387112,
            lat: 39.920977,
          }, {
            lng: 116.385243,
            lat: 39.913063,
          },
          {
            lng: 116.394226,
            lat: 39.917988,
          },
          {
            lng: 116.401772,
            lat: 39.921364,
          },
          {
            lng: 116.41248,
            lat: 39.927893,
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
      circle, polyline, polygon, isShow,
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
            <Polygon
              points={polygon.points}
              strokeColor={polygon.strokeColor}
              strokeWeight={polygon.strokeWeight}
              strokeOpacity={polygon.strokeOpacity}
            />
            <Marker point={circle.point} />
              </div>
          )}
        </Map>
        <Button onClick={this.addOverlay}>添加覆盖物</Button>
        <Button onClick={this.removeOverlay}>删除覆盖物</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
