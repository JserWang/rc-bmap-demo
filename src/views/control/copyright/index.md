import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  ControlAnchor,
  Copyright,
} from 'rc-bmap';
import { Button } from 'antd';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: {
        width: 10,
        height: 10,
      },
      anchor: ControlAnchor.TOP_RIGHT,
      content: '该版权的文本信息，用于显示在地图上，支持HTML内容',
    };
  }

  render() {
    const { offset, anchor, content } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <Copyright
            offset={offset}
            anchor={anchor}
            content={content}
          />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
