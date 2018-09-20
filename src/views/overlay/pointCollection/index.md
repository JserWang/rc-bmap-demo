import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Map, PointCollection, SizeType, ShapeType,
} from 'rc-bmap';
import { Button } from 'antd';

class PointCollectionExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      shape: ShapeType.STAR,
      size: SizeType.BIGGER,
      points: [
        {
          lng: 116.387,
          lat: 39.920,
        }, {
          lng: 116.385,
          lat: 39.913,
        },
        {
          lng: 116.394,
          lat: 39.917,
        },
      ],
      events: {
        click: this.onClick,
      },
    };
  }

  render() {
    const {
      points, size, shape, color, events,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          scrollWheelZoom
        >
          <PointCollection
            points={points}
            shape={shape}
            size={size}
            color={color}
            events={events}
          />
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <PointCollectionExample />,
  document.getElementById('root'),
);
