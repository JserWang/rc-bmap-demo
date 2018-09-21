/**
 *@title：移动地图
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
      center: {
        lng: 116.332782,
        lat: 40.007978,
      },
      minZoom: 4,
      maxZoom: 8,
    };
  }
  
  handleMapMounted = (mapInstance) => {
    // 移动到广州
		setTimeout(() => {
    	mapInstance.panTo(new window.BMap.Point(113.262232,23.154345));
    }, 2000);
	}

  render() {
    const {
      center, minZoom, maxZoom,
    } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          center={center}
          minZoom={minZoom}
          maxZoom={maxZoom}
          mapMounted={this.handleMapMounted}
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