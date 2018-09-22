/**
 *@title：添加文字标签
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Label } from 'rc-bmap';
import { Button } from 'antd';

class LabelExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '欢迎使用react百度地图，这是一个简单的文本标注哦~',
      point: {
        lng: 116.417854,
        lat: 39.921988,
      },
      offset: {
        width: -30,
        height: 30,
      },
      massClear: false,
      title: '鼠标悬浮文字',
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
      content, point, offset, massClear, title, style,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <Label
            content={content}
            point={point}
            offset={offset}
            massClear={massClear}
            title={title}
            style={style}
          />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <LabelExample />,
  document.getElementById('root'),
);
