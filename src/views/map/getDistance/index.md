/**
 *@title：
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
    };
  }

  handleMapMounted = (mapInstance) => {
    const pointA = new window.BMap.Point(106.486654, 29.490295); // 创建点坐标A--大渡口区
    const pointB = new window.BMap.Point(106.581515, 29.615467); // 创建点坐标B--江北区
    const distance = mapInstance.getDistance(pointA, pointB).toFixed(2);
    alert(`从大渡口区到江北区的距离是：${distance}米。`); // 获取两点距离,保留小数点后两位
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
