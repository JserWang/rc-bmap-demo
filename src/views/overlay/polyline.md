import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  Polyline,
  SymbolShapeType,
} from 'rc-bmap';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lng: 116.404,
        lat: 39.915,
      },
      points: [
        {
          lng: 116.350658,
          lat: 39.938285,
        }, 
        {
          lng: 116.386446,
          lat: 39.939281,
        },
        {
          lng: 116.389034,
          lat: 39.913828,
        },
        {
          lng: 116.442501,
          lat: 39.914603,
        },
      ],
      icons: [],
    };
  }

  mapMounted = () => {
    const sy = new window.BMap.Symbol(
      window[SymbolShapeType.BACKWARD_OPEN_ARROW], 
      {
        scale: 0.6, // 图标缩放大小
        strokeColor: '#fff', // 设置矢量图标的线填充颜色
        strokeWeight: '2', // 设置线宽
      },
    );
    const icon = new window.BMap.IconSequence(sy, '10', '30');
    this.setState({
      icons: [icon],
    });
  }

  render() {
    const {
      center, points, icons,
    } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          center={center}
          zoom={14}
          scrollWheelZoom
          mapMounted={this.mapMounted}
        >
          <Polyline
            points={points}
            strokeColor="#18a45b"
            strokeWeight={8}
            strokeOpacity={0.8}
            icons={icons}
            editing={false}
            clicking
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
