/**
 *@title：叠加/删除清华微观图
 */

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
      zoom: 16,
      center: {
        lng: 116.332782,
        lat: 40.007978,
      },
      visible: true,
    };
  }

  getTilesUrl = (tileCoord, zoom) => {
    const { x, y } = tileCoord;
    // 根据当前坐标，选取合适的瓦片图
    return `http://lbsyun.baidu.com/jsdemo/demo/tiles/${zoom}/tile${x}_${y}.png`;
  };

  addTileLayer = () => {
    this.setState({
      visible: true,
    });
  }

  removeTileLayer = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const {
      zoom, center, copyright, visible,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
          center={center}
          zoom={zoom}
        >
          {visible
          && (<Tile
            copyright={copyright}
            getTilesUrl={this.getTilesUrl}
            transparentPng
          />
          )}
        </Map>
        <Button onClick={this.addTileLayer}>添加</Button>
        <Button onClick={this.removeTileLayer}>删除</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <TileExample />,
  document.getElementById('root'),
);
