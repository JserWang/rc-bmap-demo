/**
 *@title：叠加/删除路况图层
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  ControlAnchor,
  TrafficControl,
} from 'rc-bmap';

class TrafficControlExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchor: ControlAnchor.BOTTOM_RIGHT,
    };
  }

  render() {
    const { anchor } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
        >
          <TrafficControl anchor={anchor} />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <TrafficControlExample />,
  document.getElementById('root'),
);
