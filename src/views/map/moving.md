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
    // 两秒后移动到广州
		setTimeout(() => {
    	mapInstance.panTo(new window.BMap.Point(113.262232,23.154345));
    }, 2000);
	}

  render() {
    const { center } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          center={center}
          zoom={8}
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