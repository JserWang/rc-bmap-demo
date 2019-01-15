import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, Label, Base } from 'rc-bmap';

const { Point, Size } = Base;

const { Content } = Label;

class Example extends Component {
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={12}
          scrollWheelZoom
        >
          <Point name="center" lng="116.400244" lat="39.92556" />
          <Marker>
            <Point lng="116.400244" lat="39.92556" />
            <Label>
              <Size name="offset" width="20" height="-10" />
              <Content>
                我是文字标注哦
              </Content>
            </Label>
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
