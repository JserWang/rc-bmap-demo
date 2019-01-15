import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Base, BMapUtil } from 'rc-bmap';

const { Point } = Base;

class Example extends Component {
  onMapMounted = (mapInstance) => {
    // 两秒后移动到广州
		setTimeout(() => {
    	mapInstance.panTo(BMapUtil.BPoint(113.262232, 23.154345));
    }, 2000);
	}

  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={8}
          mounted={this.onMapMounted}
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