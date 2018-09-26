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

  onMapMounted = () => {
    // 通过name属性设置名称后，在地图加载完成后，
    // 会默认挂载至window对象中，如果您不需要使用全局地图实例，
    // 不设置name属性即可
    console.log(window.myFirstMap);
  }

  render() {
    const { center } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          name="myFirstMap"
          center={center}
          mounted={this.onMapMounted}
          zoom={11}
          scrollWheelZoom // 设置滚轮缩放
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
