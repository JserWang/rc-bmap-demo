import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Label, Base } from 'rc-bmap';

const { Content } = Label;

const { Point, Size } = Base;

const style = {
  color: 'red',
  fontSize: '12px',
  height: '20px',
  lineHeight: '20px',
  fontFamily: '微软雅黑',
};

class Example extends Component {
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={15}
          scrollWheelZoom
        >
          <Point name="center" lng="116.417854" lat="39.921988" />
          <Label style={style}>
            <Point name="position" lng="116.417854" lat="39.921988" />
            <Size name="offset" width="30" height="-30" />
            <Content>
              欢迎使用百度地图，这是一个简单的文本标注哦~
            </Content>
          </Label>
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
