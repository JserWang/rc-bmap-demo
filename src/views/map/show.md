import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Base } from 'rc-bmap';

const { Point } = Base;

class Example extends Component {
  onMapMounted = () => {
    // 通过name属性设置名称后，在地图加载完成后，
    // 会默认挂载至window对象中，如果您不需要使用全局地图实例，
    // 不设置name属性即可
    console.log('window.myFirstMap', window.myFirstMap);
  }

  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          name="myFirstMap"
          mounted={this.onMapMounted}
          zoom={11}
          scrollWheelZoom // 设置滚轮缩放
        >
          <Point name="center" lng="116.404" lat="39.915" />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
