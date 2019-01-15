import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Ground, Base } from 'rc-bmap';

const { Point, Bounds, Events } = Base;

class Example extends Component {
  handleClick = () => {
    console.log('click');
  }

  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          scrollWheelZoom
          zoom={12}
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <Ground
            imageURL="http://lbsyun.baidu.com/jsdemo/img/si-huan.png"
            opacity={1}
            displayOnMinLevel={10}
            displayOnMaxLevel={14}
          >
            <Bounds>
              <Point name="sw" lng="116.295" lat="39.837" />
              <Point name="ne" lng="116.475" lat="39.976" />
            </Bounds>
            <Events
              click={this.handleClick}
            />
          </Ground>
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
