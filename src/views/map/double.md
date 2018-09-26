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
  
  onTopMapMounted = () => {
    console.log(window.topMap);
  }

  onBottomMapMounted = () => {
    console.log(window.bottomMap);
  }

  render() {
    const { center } = this.state;
    return (
      <div>
        <div style={{ height: '50vh' }}>
          <Map
            ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
            name="topMap"
            mounted={this.onTopMapMounted}
            center={center}
            zoom={15}
            scrollWheelZoom
          />
        </div>
        <div style={{ height: '50vh' }}>
          <Map
            ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
            name="bottomMap"
            mounted={this.onBottomMapMounted}
            center={center}
            zoom={15}
            scrollWheelZoom
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
