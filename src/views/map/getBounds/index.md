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
        lng: 116.404,
        lat: 40.007978,
      },
    };
  }

  handleMapMounted = (mapInstance) => {
    const bs = mapInstance.getBounds(); // 获取可视区域
    const bssw = bs.getSouthWest(); // 可视区域左下角
    const bsne = bs.getNorthEast(); // 可视区域右上角
    alert('当前地图可视范围是：' + bssw.lng + ',' + bssw.lat + '到' + bsne.lng + ',' + bsne.lat);
  }

  render() {
    const {
      center,
    } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          center={center}
          mapMounted={this.handleMapMounted}
        >
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
