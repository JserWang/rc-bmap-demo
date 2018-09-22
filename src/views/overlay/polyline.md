/**
 *@title：折线上添加箭头
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Polyline } from 'rc-bmap';

class PolylineExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lng: 116.404, 
        lat: 39.915,
      },
      points: [
        {
          lng: 116.350658,
          lat: 339.938285,
        }, {
          lng: 116.386446,
          lat: 39.939281,
        },
        {
          lng: 116.389034,
          lat: 39.913828,
        },
        {
          lng: 116.442501,
          lat: 339.914603,
        },
      ],
      editing: false, // 是否启用线编辑，默认为false
      clicking: true, // 是否响应点击事件，默认为true
      icons: [],
      strokeWeight: '8', // 折线的宽度，以像素为单位
      strokeOpacity: 0.8, // 折线的透明度，取值范围0 - 1
      strokeColor: '#18a45b', // 折线颜色
      events: {
        click: this.handleClick,
      },
    };
  }

  handleMapMounted = (mapInstance) => {
    const sy = new window.BMap.Symbol(global.BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, {
      scale: 0.6, // 图标缩放大小
      strokeColor: '#fff', // 设置矢量图标的线填充颜色
      strokeWeight: '2', // 设置线宽
    });
    const icon = new window.BMap.IconSequence(sy, '10', '30');
    this.setState({
      icons: [icon],
    });
  }

  render() {
    const {
      center, points, strokeColor, strokeWeight, strokeOpacity,
      strokeStyle, massClear, editing, clicking, events, icons,
    } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          center={center}
          scrollWheelZoom
          mapMounted={this.handleMapMounted}
        >
          <Polyline
            points={points}
            strokeColor={strokeColor}
            strokeWeight={strokeWeight}
            strokeOpacity={strokeOpacity}
            icons={icons}
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
