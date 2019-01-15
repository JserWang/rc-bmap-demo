import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  Circle,
  Marker,
  Polygon,
  Polyline,
  Base,
} from 'rc-bmap';
import { Button } from 'antd';

const { Point, Path } = Base;

const polygonPoints = [
  {
    lng: 116.387112,
    lat: 39.920977,
  }, {
    lng: 116.385243,
    lat: 39.913063,
  },
  {
    lng: 116.394226,
    lat: 39.917988,
  },
  {
    lng: 116.401772,
    lat: 39.921364,
  },
  {
    lng: 116.41248,
    lat: 39.927893,
  },
];

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

  handleAdd = () => {
    this.setState({
      isShow: true,
    });
  }

  handleRemove = () => {
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
                <Circle
                  strokeColor="blue"
                  radius={500}
                  strokeWeight={2}
                  strokeOpacity={0.5}
                >
                  <Point name="center" lng="116.404" lat="39.915" />
                </Circle>
                <Polyline
                  strokeColor="blue"
                  strokeWeight={2}
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
                <Polygon
                  strokeColor="blue"
                  strokeWeight={2}
                  strokeOpacity={0.5}
                >
                  <Path>
                    {
                      polygonPoints.map(item => (
                        <Point lng={item.lng} lat={item.lat} />
                      ))
                    }
                  </Path>
                </Polygon>
                <Marker>
                  <Point lng="116.404" lat="39.915" />
                </Marker>
              </React.Fragment>
            )
          }
        </Map>
        <Button onClick={this.handleAdd}>添加覆盖物</Button>
        <Button onClick={this.handleRemove}>删除覆盖物</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
