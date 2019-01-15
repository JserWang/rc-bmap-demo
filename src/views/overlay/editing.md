import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Map, Polygon, Polyline, Base,
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

class Example extends Component {
  state = {
    editing: false,
  }

  handleEnable = () => {
    this.setState({
      editing: true,
    });
  }

  handleDisable = () => {
    this.setState({
      editing: false,
    });
  }

  render() {
    const {
      editing,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={15}
          scrollWheelZoom
        >
          <Point name="center" lng="116.404" lat="39.915" />

          <Polyline
            strokeColor="blue"
            strokeWeight={2}
            strokeOpacity={0.5}
            editing={editing}
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
            editing={editing}
          >
            <Path>
              {
                polygonPoints.map(item => (
                  <Point lng={item.lng} lat={item.lat} />
                ))
              }
            </Path>
          </Polygon>
        </Map>
        <Button onClick={this.handleEnable}>开启线、面编辑功能</Button>
        <Button onClick={this.handleDisable}>关闭线、面编辑功能</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
