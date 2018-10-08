import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Map, InfoWindow,
  Marker, Events,
} from 'rc-bmap';

const { Content, Title } = InfoWindow;

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      point: {
        lng: 116.417854,
        lat: 39.921988,
      },
      visible: true,
    };
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
      point, visible, test,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          center={point}
          zoom={15}
          scrollWheelZoom
        >
          <Marker point={point}>
            <Events click={this.clickMarker} />
          </Marker>
          <InfoWindow
            visible={visible}
            point={point}
            width={200}
            height={100}
            displayMessage
            message={'亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~'}
          >
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
