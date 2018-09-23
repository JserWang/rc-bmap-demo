/**
 *@title：设置主题模板样式
 */

import React from 'react';
import { Select } from 'antd';
import {
  Map,
  ControlAnchor,
  MapTypeCtrl,
  MapType,
  MapTypeControlType,
} from 'rc-bmap';
import ReactDOM from 'react-dom';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: {
        width: 0,
        height: 0,
      },
      mapStyle: {
        style: 'midnight',
      },
      anchor: ControlAnchor.TOP_RIGHT,
      type: MapTypeControlType.HORIZONTAL,
      mapTypes: [MapType.NORMAL, MapType.PERSPECTIVE, MapType.SATELLITE, MapType.HYBRID],
    };
  }

  selectStyle = (value) => {
    this.setState({
      mapStyle: {
        style: value,
      },
    });
  }

  render() {
    const {
      offset, anchor, type, mapTypes, mapStyle,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
          mapStyle={mapStyle}
        >
          <MapTypeCtrl
            offset={offset}
            anchor={anchor}
            type={type}
            mapTypes={mapTypes}
          />
        </Map>
        选择主题
        <Select defaultValue="midnight" onChange={this.selectStyle}>
          <Select.Option value="midnight">午夜蓝风格</Select.Option>
          <Select.Option value="male">11</Select.Option>
        </Select>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
