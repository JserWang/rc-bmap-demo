import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Map,
  Polyline,
  Base,
  Constants,
} from 'rc-bmap';

const { SYMBOL_SHAPE_TYPE } = Constants;
const { Point, Path } = Base;
const { IconSequence } = Polyline;
const { Symbol } = IconSequence;

const points = [
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
];

class Example extends Component {
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          zoom={14}
          scrollWheelZoom
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <Polyline
            strokeColor="#18a45b"
            strokeWeight={8}
            strokeOpacity={0.8}
            editing={false}
            clicking
          >
            <Path>
              {
                points.map(item => (
                  <Point lng={item.lng} lat={item.lat} />
                ))
              }
            </Path>
            <IconSequence
              offset="10"
              repeat="30"
            >
              <Symbol
                path={SYMBOL_SHAPE_TYPE.BACKWARD_OPEN_ARROW}
                sclae={0.6}
                strokeColor="#fff"
                strokeWeight={2}
              />
            </IconSequence>
          </Polyline>
        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
