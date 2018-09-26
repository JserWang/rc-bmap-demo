import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  ContextMenuIcon,
  ContextMenu,
} from 'rc-bmap';

const MenuItem = ContextMenu.Item;

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lng: 116.404,
        lat: 39.915,
      },
    };
  }

  handleZoomInClick = () => {
    window.mapInstance.zoomIn();
  }

  handleZoomOutClick = () => {
    window.mapInstance.out();
  }

  render() {
    const { center, disabled } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          name="mapInstance"
          center={center}
          zoom={11}
          scrollWheelZoom // 设置滚轮缩放
        >
          <ContextMenu>
            <MenuItem
              text="放大"
              iconUrl={ContextMenuIcon.ZOOMIN}
              separator
              onClick={this.handleZoomInClick}
            />
            <MenuItem
              disabled
              iconUrl={ContextMenuIcon.ZOOMOUT}
              text="缩小"
              onClick={this.handleZoomOutClick}
            />
          </ContextMenu>
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
