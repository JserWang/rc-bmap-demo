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
          <Select.Option value="normal">默认地图样式</Select.Option>
          <Select.Option value="light">清新蓝风格</Select.Option>
          <Select.Option value="dark">黑夜风格</Select.Option>
          <Select.Option value="realert">红色警戒风格</Select.Option>
          <Select.Option value="googlelite">精简风格</Select.Option>
          <Select.Option value="grassgreen">自然绿风格</Select.Option>
          <Select.Option value="midnight">午夜蓝风格</Select.Option>
          <Select.Option value="pink">浪漫粉风格</Select.Option>
          <Select.Option value="darkgreen">青春绿风格</Select.Option>
          <Select.Option value="bluish">清新蓝绿风格</Select.Option>
          <Select.Option value="grayscale">高端灰风格</Select.Option>
          <Select.Option value="hardedge">强边界风格</Select.Option>

        </Select>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
