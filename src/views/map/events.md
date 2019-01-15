import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  Base,
} from 'rc-bmap';

const { Events, Point } = Base;

class Example extends React.Component {

  handleMapClick = () => {
    console.log('单击地图');
  }

  handleMapDblClick = () => {
    console.log('双击地图');
  }

  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={11}
          scrollWheelZoom
        >
          <Point name="center" lng="116.404" lat="39.915" />
          {/* 这里的事件名以及参数，均可参考百度官方文档 */}
          <Events
            click={this.handleMapClick}
            dblclick={this.handleMapDblClick}
          />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
