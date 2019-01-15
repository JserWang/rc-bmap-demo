import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Base } from 'rc-bmap';

const { Point } = Base;

class Example extends Component {
  onTopMapMounted = () => {
    console.log('window.topMap', window.topMap);
  }

  onBottomMapMounted = () => {
    console.log('window.bottomMap', window.bottomMap);
  }

  render() {
    return (
      <div>
        <div style={{ height: '50vh' }}>
          <Map
            ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
            name="topMap"
            mounted={this.onTopMapMounted}
            zoom={15}
            scrollWheelZoom
          >
            <Point name="center" lng="116.404" lat="39.915" />
          </Map>
        </div>
        <div style={{ height: '50vh' }}>
          <Map
            ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
            name="bottomMap"
            mounted={this.onBottomMapMounted}
            zoom={15}
            scrollWheelZoom
          >
            <Point name="center" lng="116.404" lat="39.915" />
          </Map>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
