import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Map, Polygon, Base,
} from 'rc-bmap';

const { Point, Path } = Base;

const center = {
  lng: 116.404,
  lat: 39.915,
};

const addOval = (x, y) => {
  const assemble = [];
  let angle;
  const tangent = x / y;
  for (let i = 0; i < 36; i += 1) {
    angle = (2 * Math.PI / 36) * i;
    assemble.push({
      lng: center.lng + Math.sin(angle) * y * tangent,
      lat: center.lat + Math.cos(angle) * y,
    });
  }
  return assemble;
};

const points = addOval(0.1, 0.3);

const Example = () => (
  <div style={{ height: '100vh' }}>
    <Map
      ak="WAeVpuoSBH4NswS30GNbCRrlsmdGB5Gv"
      scrollWheelZoom
      zoom={10}
    >
      <Point name="center" lng="116.404" lat="39.915" />
      <Polygon
        strokeColor="blue"
        strokeWeight={6}
        strokeOpacity={0.5}
      >
        <Path>
          {
            points.map((item, index) => <Point key={index} lng={item.lng} lat={item.lat} />)
          }
        </Path>
      </Polygon>
    </Map>
  </div>
);

ReactDOM.render(
  <Example />,
  document.getElementById('root'),
);
