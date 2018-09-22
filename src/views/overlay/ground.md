/**
 *@title：添加/删除地面叠加层
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Ground } from 'rc-bmap';
import { Button } from 'antd';

class GroundExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounds: {
        sw: {
          lng: 116.295,
          lat: 39.837,
        },
        ne: {
          lng: 116.475,
          lat: 39.976,
        },
      },
      imageURL: 'http://lbsyun.baidu.com/jsdemo/img/si-huan.png',
      opacity: 1,
      maxZoom: 14,
      minZoom: 10,
      events: {
        click: this.handleClick,
      },
      visible: false,
    };
  }

  addGround = () => {
    this.setState({
      visible: true,
    });
  }

  removeGround = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const {
      bounds, opacity, maxZoom, minZoom, events, imageURL, visible,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          scrollWheelZoom
          zoom={12}
        >
          {visible
          && (<Ground
            bounds={bounds}
            imageURL={imageURL}
            opacity={opacity}
            maxZoom={maxZoom}
            minZoom={minZoom}
            events={events}
          />
          )}
        </Map>
        <Button onClick={this.addGround}>添加</Button>
        <Button onClick={this.removeGround}>删除</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <GroundExample />,
  document.getElementById('root'),
);
