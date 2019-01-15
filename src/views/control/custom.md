import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import {
  Map,
  Base,
  CustomControl as Custom,
  Constants,
} from 'rc-bmap';

const { CONTROL_ANCHOR } = Constants;
const { Size, Point } = Base;

const customContainerStyle = {
  backgroundColor: '#fff',
  cursor: 'pointer',
  border: '1px solid #333',
  padding: 10,
  borderRadius: 3,
};

@Custom
class CustomControl extends Component {
  handleClick = () => {
    const { map } = this.props;
    const newZoom = map.getZoom() + 2;
    map.setZoom(newZoom);
  }

  render() {
    return (
      <div
        style={customContainerStyle}
        onClick={this.handleClick}
      >
        放大2级
      </div>
    );
  }
}

class Example extends Component {
  state = {
    visible: false,
  }

  handleShow = () => {
  	this.setState({
      visible: true,
    });
  }

  handleHide = () => {
  	this.setState({
    	visible: false,
    });
  }

  render() {
    const { visible } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={11}
          scrollWheelZoom
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <CustomControl
            visible={visible}
            anchor={CONTROL_ANCHOR.TOP_LEFT}
          >
            <Size name="offset" width="10" height="20" />
          </CustomControl>
        </Map>
        <Button onClick={this.handleShow}>显示</Button>
        <Button onClick={this.handleHide}>隐藏</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
