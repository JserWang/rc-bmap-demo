import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  Circle,
  Marker,
  Polygon,
  Polyline,
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
      polygonPoints: [
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
      ],
      isShow: false,
    };
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
      center, polylinePoints, polygonPoints, isShow,
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
                  strokeColor="blue"
                  radius={500}
                  strokeWeight={2}
                  strokeOpacity={0.5}
                />
                <Polyline
                  points={polylinePoints}
                  strokeColor="blue"
                  strokeWeight={2}
                  strokeOpacity={0.5}
                />
                <Polygon
                  points={polygonPoints}
                  strokeColor="blue"
                  strokeWeight={2}
                  strokeOpacity={0.5}
                />
                <Marker point={center} />
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
