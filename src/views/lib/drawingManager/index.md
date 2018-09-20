import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  ControlAnchor,
  DrawingManager,
  DrawingMode,
} from 'rc-bmap';
import { Button } from 'antd';

class DrawingManagerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchor: ControlAnchor.TOP_RIGHT,
      drawingModes: [
        DrawingMode.MARKER,
        DrawingMode.CIRCLE,
        DrawingMode.POLYLINE,
        DrawingMode.RECTANGLE,
        DrawingMode.POLYGON,
      ],
      offset: { width: 10, height: 10 },
      events: {
        // 绘制圆完成时间
        circlecomplete(e, overlay) {
          console.log(overlay);
        },
      },
      circleOptions: {
        strokeColor: 'red', // 边线颜色。
        fillColor: 'red', // 填充颜色。当参数为空时，圆形将没有填充效果。
        strokeWeight: 3, // 边线的宽度，以像素为单位。
        strokeOpacity: 0.8, // 边线透明度，取值范围0 - 1。
        fillOpacity: 0.6, // 填充的透明度，取值范围0 - 1。
        strokeStyle: 'solid', // 边线的样式，solid或dashed。
      },
    };
  }

  render() {
    const {
      anchor, drawingModes, offset, events, circleOptions,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <DrawingManager
            anchor={anchor}
            events={events}
            offset={offset}
            drawingModes={drawingModes}
            circleOptions={circleOptions}
          />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <DrawingManagerExample />,
  document.getElementById('root'),
);
