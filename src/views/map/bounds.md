import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'rc-bmap';

class Example extends Component {
  state = {
    center: {
      lng: 116.404,
      lat: 39.915,
    },
  }

  onMapMounted = (mapInstance) => {
    const bs = mapInstance.getBounds(); // 获取可视区域
    const bssw = bs.getSouthWest(); // 可视区域左下角
    const bsne = bs.getNorthEast(); // 可视区域右上角
    alert('当前地图可视范围是：' + bssw.lng + ',' + bssw.lat + '到' + bsne.lng + ',' + bsne.lat);
  }

  render() {
    const { center } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          center={center}
          zoom={14}
          mounted={this.onMapMounted}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
