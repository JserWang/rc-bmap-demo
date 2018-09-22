/**
 *@title：添加第三方版权控件
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  ControlAnchor,
  Copyright,
} from 'rc-bmap';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: {
        width: 10,
        height: 10,
      },
      anchor: ControlAnchor.TOP_RIGHT,
      content: "<a href='#' style='font-size:20px;background:yellow'>我是自定义版权控件呀</a>",
    };
  }

  render() {
    const { offset, anchor, content } = this.state;
    return (
      <div style={{ height: '100vh' }}>
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
