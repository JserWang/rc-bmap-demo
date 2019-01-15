import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Map, Marker, Base, Constants,
} from 'rc-bmap';

const { Symbol } = Marker;
const { Point } = Base;
const { SYMBOL_SHAPE_TYPE } = Constants;

class Example extends Component {
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Map
          ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
          scrollWheelZoom
          zoom={14}
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <Marker>
            <Point lng="116.404" lat="39.915" />
            <Symbol
              path={SYMBOL_SHAPE_TYPE.FORWARD_CLOSED_ARROW}
              scale={5}
              fillColor="red"
              strokeWeight={1}
              fillOpacity={0.8}
            />
          </Marker>

        </Map>
      </div>
    );
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
