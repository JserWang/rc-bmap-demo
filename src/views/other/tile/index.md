import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  Tile,
} from 'rc-bmap';
import { Button } from 'antd';

class TileExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transparentPng: false,
      zoom: 16,
      zIndex: -1,
      center: {
        lng: 116.332782,
        lat: 40.007978,
      },
    };
  }

  getTilesUrl = (tileCoord, zoom) => {
    const { x, y } = tileCoord;
    // const y = tileCoord.y;
    // 根据当前坐标，选取合适的瓦片图
    return `http://lbsyun.baidu.com/jsdemo/demo/tiles/${zoom}/tile${x}_${y}.png`;
  };

  render() {
    const {
      zoom, center, zIndex, copyright, transparentPng,
    } = this.state;
    return (
        <div style={{ height: '90vh' }}>
          <Map
            ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
            scrollWheelZoom
            center={center}
            zoom={zoom}
          >
            <Tile
              copyright={copyright}
              getTilesUrl={this.getTilesUrl}
              zIndex={zIndex}
              transparentPng={transparentPng}
            />
          </Map>
        </div>
    );
  }
}

ReactDOM.render(
  <TileExample />,
  document.getElementById('root'),
);
