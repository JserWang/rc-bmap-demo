/**
 *@title：全景控件展示
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  ControlAnchor,
  Panorama,
} from 'rc-bmap';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: {
        width: 0,
        height: 0,
      },
      anchor: ControlAnchor.TOP_RIGHT,
    };
  }

  render() {
    const { offset, anchor } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <Panorama
            offset={offset}
            anchor={anchor}
          />
        </Map>
          在地图上添加全景控件，点击全景控件进入全景图
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
