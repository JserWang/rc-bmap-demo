import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Map, Circle, Marker, Polyline,
} from 'rc-bmap';
import { Button } from 'antd';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lng: 116.404,
        lat: 39.915,
      },
      polylinePoints: [
        {
          lng: 116.399,
          lat: 39.910,
        },
        {
          lng: 116.405,
          lat: 39.920,
        },
        {
          lng: 116.425,
          lat: 39.900,
        },
      ],
      isShow: false,
    };
  }

  addOverlay = () => {
    this.setState({
      isShow: true,
    });
  }

  removeOverlay = () => {
    this.setState({
      isShow: false,
    });
  }

  render() {
    const {
      center, polylinePoints, isShow,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          center={center}
          zoom={15}
          scrollWheelZoom
        >
          {
            isShow && (
              <React.Fragment>
                <Circle
                  point={center}
                  radius={500}
                />
                <Polyline
                  points={polylinePoints}
                  strokeColor="blue"
                  strokeWeight={6}
                  strokeOpacity={0.5}
                />
                <Marker point={center} />
              </React.Fragment>
            )
          }
        </Map>
        <Button onClick={this.addOverlay}>显示</Button>
        <Button onClick={this.removeOverlay}>隐藏</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
