/**
 *@title：根据城市名设置地图中心点
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  Navigation,
} from 'rc-bmap';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: '上海',
      zoom: 15,
    };
  }

  render() {
    const {
      zoom, center,
    } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          center={center}
          zoom={zoom}
        >
          <Navigation />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
