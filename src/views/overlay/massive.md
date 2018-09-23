import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Map, PointCollection, SizeType, ShapeType,
} from 'rc-bmap';

class PointCollectionExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: [
        { lng: 116.418261, lat: 39.921984 },
        { lng: 116.423332, lat: 39.916532 },
        { lng: 116.419787, lat: 39.930658 },
        { lng: 116.418455, lat: 39.920921 },
        { lng: 116.418843, lat: 39.915516 },
        { lng: 116.42546, lat: 39.918503 },
        { lng: 116.423289, lat: 39.919989 },
        { lng: 116.418162, lat: 39.915051 },
        { lng: 116.422039, lat: 39.91782 },
        { lng: 116.41387, lat: 39.917253 },
        { lng: 116.41773, lat: 39.919426 },
        { lng: 116.421107, lat: 39.916445 },
        { lng: 116.417521, lat: 39.917943 },
        { lng: 116.419812, lat: 39.920836 },
        { lng: 116.420682, lat: 39.91463 },
        { lng: 116.415424, lat: 39.924675 },
        { lng: 116.419242, lat: 39.914509 },
        { lng: 116.422766, lat: 39.921408 },
        { lng: 116.421674, lat: 39.924396 },
        { lng: 116.427268, lat: 39.92267 },
        { lng: 116.417721, lat: 39.920034 },
      ],
    };
  }

  render() {
    const { points } = this.state;
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          scrollWheelZoom
        >
          <PointCollection
            points={points}
            shape={ShapeType.STAR}
            size={SizeType.BIGGER}
            color="#d340c3"
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
