import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  Constants,
  Base,
  Marker,
} from 'rc-bmap';

const { Point } = Base;
const { CONTEXT_MENU_ICON } = Constants;
const { ContextMenu } = Marker;
const MenuItem = ContextMenu.Item;

class Example extends Component {

  state = {
    dragging: false,
  }

  handleEnableDragging = () => {
    this.setState({
      dragging: true,
    });
  }

  handleDisableDragging = () => {
    this.setState({
      dragging: false,
    });
  }

  render() {
    const { dragging } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          name="mapInstance"
          zoom={11}
          scrollWheelZoom // 设置滚轮缩放
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <Marker dragging={dragging}>
            <Point lng="116.404" lat="39.915" />
            <ContextMenu>
              <MenuItem
                disabled={dragging}
                text="设置可拖拽"
                onClick={this.handleEnableDragging}
              />
              <MenuItem
                disabled={!dragging}
                text="取消可拖拽"
                onClick={this.handleDisableDragging}
              />
            </ContextMenu>
          </Marker>
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
