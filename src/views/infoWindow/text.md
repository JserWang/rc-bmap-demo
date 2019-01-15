import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Map, InfoWindow,
  Marker, Base,
} from 'rc-bmap';

const { Point, Events } = Base;

const { Content, Title } = InfoWindow;

class Example extends Component {
  state = {
    visible: false,
  }

  clickMarker = () => {
    this.setState({
      visible: true,
    });
  }

  closeInfoWindow = () => {
    console.log('in close');
  }

  render() {
    const {
      visible
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={15}
          scrollWheelZoom
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <Marker>
            <Point lng="116.404" lat="39.915" />
            <Events click={this.clickMarker} />
          </Marker>
          <InfoWindow
            visible={visible}
            width={200}
            height={100}
            displayMessage
            message={'亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~'}
          >
            <Point lng="116.404" lat="39.915" />
            <Title>海底捞王府井店</Title>
            <Content>
              地址：北京市东城区王府井大街88号乐天银泰百货八层
            </Content>
            <Events close={this.closeInfoWindow} />
          </InfoWindow>
        </Map>
        点击标注点，可查看由纯文本构成的简单型信息窗口
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
