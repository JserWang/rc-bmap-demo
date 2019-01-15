import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  Constants,
  Base,
} from 'rc-bmap';

const { Point } = Base;
const { CONTEXT_MENU_ICON } = Constants;
const { ContextMenu } = Map;
const MenuItem = ContextMenu.Item;

class Example extends Component {

  handleZoomInClick = () => {
    window.mapInstance.zoomIn();
  }

  handleZoomOutClick = () => {
    window.mapInstance.zoomOut();
  }

  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          name="mapInstance"
          zoom={11}
          scrollWheelZoom // 设置滚轮缩放
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <ContextMenu>
            <MenuItem
              text="放大"
              iconUrl={CONTEXT_MENU_ICON.ZOOM_IN}
              separator
              onClick={this.handleZoomInClick}
            />
            <MenuItem
              disabled
              iconUrl={CONTEXT_MENU_ICON.ZOOM_OUT}
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
