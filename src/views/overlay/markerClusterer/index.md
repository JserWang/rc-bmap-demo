/**
 *@title：点聚合
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  MarkerClusterer,
  Marker,
} from 'rc-bmap';
import { Button } from 'antd';

class MarkerClustererExample extends React.Component {
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
        { lng: 116.412456, lat: 39.92667 },
        { lng: 116.420432, lat: 39.919114 },
        { lng: 116.425013, lat: 39.921611 },
        { lng: 116.418733, lat: 39.931037 },
        { lng: 116.419336, lat: 39.931134 },
        { lng: 116.413557, lat: 39.923254 },
        { lng: 116.418367, lat: 39.92943 },
        { lng: 116.424312, lat: 39.919621 },
        { lng: 116.423874, lat: 39.919447 },
        { lng: 116.424225, lat: 39.923091 },
        { lng: 116.417801, lat: 39.921854 },
        { lng: 116.417129, lat: 39.928227 },
        { lng: 116.426426, lat: 39.922286 },
        { lng: 116.421597, lat: 39.91948 },
        { lng: 116.423895, lat: 39.920787 },
        { lng: 116.423563, lat: 39.921197 },
        { lng: 116.417982, lat: 39.922547 },
        { lng: 116.426126, lat: 39.921938 },
        { lng: 116.42326, lat: 39.915782 },
        { lng: 116.419239, lat: 39.916759 },
        { lng: 116.417185, lat: 39.929123 },
        { lng: 116.417237, lat: 39.927518 },
        { lng: 116.417784, lat: 39.915754 },
        { lng: 116.420193, lat: 39.917061 },
        { lng: 116.422735, lat: 39.915619 },
        { lng: 116.418495, lat: 39.915958 },
        { lng: 116.416292, lat: 39.931166 },
        { lng: 116.419916, lat: 39.924055 },
        { lng: 116.42189, lat: 39.921308 },
        { lng: 116.413765, lat: 39.929376 },
        { lng: 116.418232, lat: 39.920348 },
        { lng: 116.417554, lat: 39.930511 },
        { lng: 116.418568, lat: 39.918161 },
        { lng: 116.413461, lat: 39.926306 },
        { lng: 116.42232, lat: 39.92161 },
        { lng: 116.4174, lat: 39.928616 },
        { lng: 116.424679, lat: 39.915499 },
        { lng: 116.42171, lat: 39.915738 },
        { lng: 116.417836, lat: 39.916998 },
        { lng: 116.420755, lat: 39.928001 },
        { lng: 116.414077, lat: 39.930655 },
        { lng: 116.426092, lat: 39.922995 },
        { lng: 116.41535, lat: 39.931054 },
        { lng: 116.413022, lat: 39.921895 },
        { lng: 116.415551, lat: 39.913373 },
        { lng: 116.421191, lat: 39.926572 },
        { lng: 116.419612, lat: 39.917119 },
        { lng: 116.418237, lat: 39.921337 },
        { lng: 116.423776, lat: 39.921919 },
        { lng: 116.417694, lat: 39.92536 },
        { lng: 116.415377, lat: 39.914137 },
        { lng: 116.417434, lat: 39.914394 },
        { lng: 116.42588, lat: 39.922622 },
        { lng: 116.418345, lat: 39.919467 },
        { lng: 116.426883, lat: 39.917171 },
        { lng: 116.423877, lat: 39.916659 },
        { lng: 116.415712, lat: 39.915613 },
        { lng: 116.419869, lat: 39.931416 },
        { lng: 116.416956, lat: 39.925377 },
        { lng: 116.42066, lat: 39.925017 },
        { lng: 116.416244, lat: 39.920215 },
        { lng: 116.41929, lat: 39.915908 },
        { lng: 116.422116, lat: 39.919658 },
        { lng: 116.4183, lat: 39.925015 },
        { lng: 116.421969, lat: 39.913527 },
        { lng: 116.422936, lat: 39.921854 },
        { lng: 116.41905, lat: 39.929217 },
        { lng: 116.424579, lat: 39.914987 },
        { lng: 116.42076, lat: 39.915251 },
        { lng: 116.425867, lat: 39.918989 },
      ],
      gridSize: 50,
      maxZoom: 0,
      minClusterSize: 0,
      center: {
        lng: 116.418261, lat: 39.921984,
      },
      averageCenter: true,
    };
  }

  render() {
    const {
      gridSize, points, maxZoom, minClusterSize, center, styles, averageCenter,
    } = this.state;
    return (
      <div style={{ height: '90vh' }}>
        <Map
          ak="dbLUj1nQTvDvKXkov5fhnH5HIE88RUEO"
          scrollWheelZoom
          center={center}
        >
          <MarkerClusterer
            averageCenter={averageCenter}
            gridSize={gridSize}
            maxZoom={maxZoom}
            minClusterSize={minClusterSize}
            styles={styles}
          >
            {
              points.map((item, index) => (
                <Marker
                  key={index}
                  point={item}
                />
              ))
            }
          </MarkerClusterer>
        </Map>
        缩放地图，查看点聚合效果
      </div>
    );
  }
}

ReactDOM.render(
  <MarkerClustererExample />,
  document.getElementById('root'),
);
