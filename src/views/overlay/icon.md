import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, Base } from 'rc-bmap';

const { Icon } = Marker;
const { Point, Size } = Base;

class Example extends Component {
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={15}
          scrollWheelZoom
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <Marker>
            <Point lng="116.404" lat="39.915" />
            <Icon
              imageUrl="http://lbsyun.baidu.com/jsdemo/img/fox.gif"
            >
              <Size width="300" height="157" />
            </Icon>
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
