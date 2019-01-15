import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Map, InfoWindow,
  Marker, Base,
} from 'rc-bmap';

const { Point, Events } = Base;
const { Content } = InfoWindow;

const headerStyle = {
  margin: '0 0 5px 0',
  padding: '0.2em 0',
};

const imageStyle = {
  float: 'right',
  margin: 4,
};

const contentStyle = {
  margin: 0,
  lineHeight: 1.5,
  fontSize: 13,
  textIndent: '2em',
};

class Example extends Component {
  state = {
    visible: false,
  }

  clickMarker = () => {
    this.setState({
      visible: true,
    });
  }

  render() {
    const { visible } = this.state;
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
          <InfoWindow visible={visible}>
            <Point lng="116.404" lat="39.915" />
            <Content>
              <h4 style={headerStyle}>天安门</h4>
              <img
                style={imageStyle}
                id="imgDemo"
                src="https://lbsyun.baidu.com/jsdemo/img/tianAnMen.jpg"
                width="139"
                height="104"
                title="天安门"
                alt=""
              />
              <p style={contentStyle}>
                天安门坐落在中国北京市中心,故宫的南侧,与天安门广场隔长安街相望,是清朝皇城的大门...
              </p>
            </Content>
          </InfoWindow>
        </Map>
        点击标注点，可查看由文本，图片构成的复杂型信息窗口
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
