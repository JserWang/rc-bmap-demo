import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Map, Circle, Marker, Polyline, Base,
} from 'rc-bmap';
import { Button } from 'antd';

const { Point, Path } = Base;

const polylinePoints = [
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
];

class Example extends Component {
  state = {
    isShow: false,
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
      isShow,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={15}
          scrollWheelZoom
        >
          <Point name="center" lng="116.404" lat="39.915" />
          {
            isShow && (
              <React.Fragment>
                <Circle radius={500}>
                  <Point name="center" lng="116.404" lat="39.915" />
                </Circle>
                <Polyline
                  strokeColor="blue"
                  strokeWeight={6}
                  strokeOpacity={0.5}
                >
                  <Path>
                    {
                      polylinePoints.map(item => (
                        <Point lng={item.lng} lat={item.lat} />
                      ))
                    }
                  </Path>
                </Polyline>
                <Marker>
                  <Point lng="116.404" lat="39.915" />
                </Marker>
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
