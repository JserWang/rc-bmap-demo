import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map, Label } from 'rc-bmap';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lng: 116.417854,
        lat: 39.921988,
      },
      offset: {
        width: 30,
        height: -30,
      },
      style: {
        color: 'red',
        fontSize: '12px',
        height: '20px',
        lineHeight: '20px',
        fontFamily: '微软雅黑',
      },
    };
  }

  render() {
    const {
      center, offset, style,
    } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          center={center}
          zoom={15}
          scrollWheelZoom
        >
          <Label
            content="欢迎使用百度地图，这是一个简单的文本标注哦~"
            point={center}
            offset={offset}
            style={style}
          />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
