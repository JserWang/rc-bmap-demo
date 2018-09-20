import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import {
  Map,
  DistanceTool,
} from 'rc-bmap';

class DistanceToolExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followText: '单击确定地点，双击结束',
      unit: 'metric',
      lineColor: '#ff6319',
      lineStroke: 2,
      opacity: 0.8,
      lineStyle: 'solid',
      cursor: 'http://is4.mzstatic.com/image/thumb/Purple122/v4/74/cf/18/74cf1856-76c6-2782-df5a-5637454f6974/source/512x512bb.jpg',
      tool: '',
      events: {
        onaddpoint() {
          console.log('on add');
        },
      },
    };
  }

  openTool = () => {
    const { tool } = this.state;
    tool.open(); // 开启测距状态
  };

  closeTool = () => {
    const { tool } = this.state;
    tool.close(); // 关闭测距状态
  };

  getTool = (instance) => {
    this.state.tool = instance;
  };

  render() {
    const {
      followText, unit, lineColor, lineStroke, opacity, lineStyle, cursor, events,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
          mapMounted={this.mapMounted}
        >
          <DistanceTool
            followText={followText}
            unit={unit}
            lineColor={lineColor}
            lineStroke={lineStroke}
            opacity={opacity}
            lineStyle={lineStyle}
            cursor={cursor}
            getInstance={this.getTool}
            events={events}
          />
        </Map>
        <Button onClick={this.openTool}>开启</Button>
        <Button onClick={this.closeTool}>关闭</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <DistanceToolExample />,
  document.getElementById('root'),
);
