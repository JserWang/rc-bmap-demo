import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import {
  Map,
  CustomControl as Custom,
  ReactComponent,
  ControlAnchor,
  Offset,
} from 'rc-bmap';

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
        style={{
          backgroundColor: '#fff',
          cursor: 'pointer',
          border: '1px solid #333',
        }}
        onClick={this.handleClick}
      >
        放大2级
      </div>
    );
  }
}

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lng: 116.404,
        lat: 39.915,
      },
      visible: true,
    };
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
    const { center, visible } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          center={center}
          zoom={11}
          scrollWheelZoom
        >
          <CustomControl
            visible={visible}
            anchor={ControlAnchor.TOP_LEFT}
          >
            <Offset width="10" height="20" />
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
