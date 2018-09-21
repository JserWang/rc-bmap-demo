/**
 *@title：叠加/删除自定义网格
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
      zoom: 15,
      center: {
        lng: 116.404,
        lat: 39.915,
      },
      visible: true,
    };
  }

  getTilesUrl = (tileCoord, zoom) => {
    return `http://lbsyun.baidu.com/jsdemo/img/border.png`;
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
