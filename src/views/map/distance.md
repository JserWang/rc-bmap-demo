import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Polyline, BMapUtil, Base } from 'rc-bmap';

const { Point, Path } = Base;

class Example extends Component {
  state = {
    points: [],
  }

  onMapMounted = (mapInstance) => {
    // 创建点坐标A--大渡口区
    const pointA = BMapUtil.BPoint({lng: 106.486654, lat: 29.490295});
    // 创建点坐标B--江北区
    const pointB = BMapUtil.BPoint({lng: 106.581515, lat: 29.615467});
    const distance = mapInstance.getDistance(pointA, pointB).toFixed(2);
    // 获取两点距离,保留小数点后两位
    alert(`从大渡口区到江北区的距离是：${distance}米。`);

    this.setState({
      points: [
        { lng: 106.486654, lat: 29.490295 },
        { lng: 106.581515, lat: 29.615467 },
      ],
    });
  }

  render() {
    const { points } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          center={'重庆'}
          zoom={12}
          mounted={this.onMapMounted}
        >
          <Polyline
            strokeColor="blue"
            strokeWeight={6}
            strokeOpacity={0.5}
          >
            <Path>
              {
                points.map(item => (
                  <Point lng={item.lng} lat={item.lat} />
                ))
              }
            </Path>
          </Polyline>
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
